import React, { useCallback, useMemo, useState } from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ImageSourcePropType,
  Linking,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import { useColors } from '@/hooks/useColors';
import { useLanguage } from '@/contexts/LanguageContext';

// ─── Static tool image map (require() must be static) ────────────────────────
const TOOL_IMAGES: Record<string, ImageSourcePropType> = {
  emotion_card: require('@/assets/images/tools/01_emotion_card.png'),
  our4to: require('@/assets/images/tools/02_our4to.png'),
  finger_people: require('@/assets/images/tools/03_finger_people.png'),
  story_card: require('@/assets/images/tools/04_story_card.png'),
  character_matrix: require('@/assets/images/tools/05_character_matrix.png'),
  script_note: require('@/assets/images/tools/06_script_note.png'),
  easy_lyrics: require('@/assets/images/tools/07_easy_lyrics.png'),
  easy_piano: require('@/assets/images/tools/08_easy_piano.png'),
  easy_score: require('@/assets/images/tools/09_easy_score.png'),
  blocking_note: require('@/assets/images/tools/10_blocking_note.png'),
  my_stage: require('@/assets/images/tools/11_my_stage.png'),
  sound_box: require('@/assets/images/tools/12_sound_box.png'),
  poster_studio: require('@/assets/images/tools/13_poster_studio.png'),
  stagebill: require('@/assets/images/tools/14_stagebill.png'),
};

// ─── Data ─────────────────────────────────────────────────────────────────────
const TOOLS = [
  { id: 'emotion_card',     categoryId: 'foundation',   link: 'https://chichiboo123.github.io/emotioncard/' },
  { id: 'our4to',           categoryId: 'foundation',   link: 'https://chichiboo123.github.io/our4to/' },
  { id: 'finger_people',    categoryId: 'foundation',   link: 'https://chichiboo123.github.io/finger/' },
  { id: 'story_card',       categoryId: 'story',        link: 'https://chichiboo123.github.io/storycard/' },
  { id: 'character_matrix', categoryId: 'story',        link: 'https://chichiboo123.github.io/matrix/' },
  { id: 'script_note',      categoryId: 'story',        link: 'https://chichiboo123.github.io/scriptnote/' },
  { id: 'easy_lyrics',      categoryId: 'music',        link: 'https://chichiboo123.github.io/easylyrics/' },
  { id: 'easy_piano',       categoryId: 'music',        link: 'https://chichiboo123.github.io/easypiano/' },
  { id: 'easy_score',       categoryId: 'music',        link: 'https://chichiboo123.github.io/easyscore/' },
  { id: 'blocking_note',    categoryId: 'movement',     link: 'https://chichiboo123.github.io/musicalblockingnote/' },
  { id: 'my_stage',         categoryId: 'stage',        link: 'https://chichiboo123.github.io/mystage/' },
  { id: 'sound_box',        categoryId: 'performance',  link: 'https://chichiboo123.github.io/soundbox/' },
  { id: 'poster_studio',    categoryId: 'performance',  link: 'https://chichiboo123.github.io/posterstudio/' },
  { id: 'stagebill',        categoryId: 'appreciation', link: 'https://chichiboo123.github.io/stagebillonline/' },
] as const;

type Tool = (typeof TOOLS)[number];

const CATEGORIES = [
  { id: 'all',          icon: 'grid-outline' as const },
  { id: 'foundation',   icon: 'layers-outline' as const },
  { id: 'story',        icon: 'book-outline' as const },
  { id: 'music',        icon: 'musical-notes-outline' as const },
  { id: 'movement',     icon: 'walk-outline' as const },
  { id: 'stage',        icon: 'color-palette-outline' as const },
  { id: 'performance',  icon: 'mic-outline' as const },
  { id: 'appreciation', icon: 'eye-outline' as const },
];

// Small decorative stars — fixed positions relative to header
const STARS = [
  { top: 22,  left:  28, size: 5 },
  { top: 48,  left:  76, size: 3 },
  { top: 12,  left: 195, size: 6 },
  { top: 58,  left: 155, size: 3 },
  { top: 28,  left: 310, size: 4 },
  { top:  8,  left: 268, size: 3 },
  { top: 52,  left: 345, size: 5 },
  { top: 18,  left: 365, size: 3 },
];

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const GRID_PADDING  = 16;
const GRID_GAP      = 10;
const CARD_WIDTH    = (SCREEN_WIDTH - GRID_PADDING * 2 - GRID_GAP) / 2;
const IMAGE_HEIGHT  = CARD_WIDTH * 0.72;

// ─── ToolCard ─────────────────────────────────────────────────────────────────
function ToolCard({ tool, onPress }: { tool: Tool; onPress: () => void }) {
  const colors = useColors();
  const { t }  = useLanguage();

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.80}
      testID={`tool-card-${tool.id}`}
      style={[
        styles.card,
        {
          width: CARD_WIDTH,
          backgroundColor: colors.card,
          borderColor: colors.border,
          borderRadius: colors.radius,
        },
      ]}
    >
      <Image
        source={TOOL_IMAGES[tool.id]}
        style={[styles.cardImage, { height: IMAGE_HEIGHT, borderRadius: colors.radius - 4 }]}
        resizeMode="cover"
      />
      <View style={styles.cardBody}>
        <Text
          style={[styles.cardName, { color: colors.foreground }]}
          numberOfLines={2}
        >
          {t(`tools.${tool.id}.name`)}
        </Text>
        <View style={[styles.openBadge, { backgroundColor: colors.accent, borderRadius: colors.radius / 2 }]}>
          <Ionicons name="arrow-forward" size={11} color={colors.accentForeground} />
        </View>
      </View>
    </TouchableOpacity>
  );
}

// ─── HomeScreen ───────────────────────────────────────────────────────────────
export default function HomeScreen() {
  const colors = useColors();
  const { t, toggleLang } = useLanguage();
  const insets = useSafeAreaInsets();

  const [selectedCategory, setSelectedCategory] = useState('all');

  // Web-only inset values
  const topPadding    = Platform.OS === 'web' ? 67 : insets.top;
  const bottomPadding = Platform.OS === 'web' ? 34 : insets.bottom;

  const filteredTools = useMemo(
    () => (selectedCategory === 'all' ? [...TOOLS] : TOOLS.filter((tool) => tool.categoryId === selectedCategory)),
    [selectedCategory],
  );

  const handleOpenTool = useCallback(async (link: string) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    Linking.openURL(link);
  }, []);

  const handleCategoryPress = useCallback((catId: string) => {
    Haptics.selectionAsync();
    setSelectedCategory(catId);
  }, []);

  // Render the header + category row as ListHeaderComponent
  const ListHeader = useMemo(
    () => (
      <View>
        {/* ── App header ── */}
        <View
          style={[
            styles.header,
            { paddingTop: topPadding + 20, backgroundColor: colors.background },
          ]}
        >
          {/* Star decorations */}
          {STARS.map((star, i) => (
            <View
              key={i}
              style={[
                styles.star,
                {
                  top:             star.top + topPadding,
                  left:            star.left,
                  width:           star.size,
                  height:          star.size,
                  borderRadius:    star.size / 2,
                  backgroundColor: colors.accent,
                  opacity: 0.7,
                },
              ]}
            />
          ))}

          <View style={styles.headerRow}>
            <View style={styles.titleGroup}>
              <Text style={[styles.title, { color: colors.foreground }]}>
                {t('site_title')}
              </Text>
              <Text style={[styles.subtitle, { color: colors.mutedForeground }]}>
                {t('site_subtitle')}
              </Text>
            </View>

            <TouchableOpacity
              onPress={toggleLang}
              activeOpacity={0.75}
              style={[
                styles.langBtn,
                { backgroundColor: colors.primary, borderRadius: 100 },
              ]}
              testID="lang-toggle"
            >
              <Ionicons name="language-outline" size={13} color={colors.primaryForeground} />
              <Text style={[styles.langBtnText, { color: colors.primaryForeground }]}>
                {t('toggle_lang')}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* ── Category pills ── */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={[styles.categoryScroll, { backgroundColor: colors.background }]}
          contentContainerStyle={styles.categoryContent}
        >
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            const label =
              cat.id === 'all' ? t('all_categories') : t(`categories.${cat.id}`);
            return (
              <TouchableOpacity
                key={cat.id}
                onPress={() => handleCategoryPress(cat.id)}
                activeOpacity={0.75}
                style={[
                  styles.pill,
                  {
                    backgroundColor: isActive ? colors.primary : colors.muted,
                    borderRadius: 100,
                  },
                ]}
              >
                <Ionicons
                  name={cat.icon}
                  size={13}
                  color={isActive ? colors.primaryForeground : colors.mutedForeground}
                />
                <Text
                  style={[
                    styles.pillText,
                    { color: isActive ? colors.primaryForeground : colors.mutedForeground },
                  ]}
                >
                  {label}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        {/* Divider */}
        <View style={[styles.divider, { backgroundColor: colors.border }]} />
      </View>
    ),
    // re-render when lang or category changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [colors, selectedCategory, topPadding, t, toggleLang, handleCategoryPress],
  );

  const renderItem = useCallback(
    ({ item }: { item: Tool }) => (
      <ToolCard tool={item} onPress={() => handleOpenTool(item.link)} />
    ),
    [handleOpenTool],
  );

  const keyExtractor = useCallback((item: Tool) => item.id, []);

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <FlatList
        data={filteredTools}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        numColumns={2}
        ListHeaderComponent={ListHeader}
        columnWrapperStyle={styles.columnWrapper}
        contentContainerStyle={[
          styles.listContent,
          { paddingBottom: bottomPadding + 24 },
        ]}
        showsVerticalScrollIndicator={false}
        scrollEnabled
      />
    </View>
  );
}

// ─── Styles ───────────────────────────────────────────────────────────────────
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: GRID_PADDING,
    paddingBottom: 16,
    overflow: 'hidden',
  },
  star: {
    position: 'absolute',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: 12,
  },
  titleGroup: {
    flex: 1,
  },
  title: {
    fontSize: 28,
    fontFamily: 'Inter_700Bold',
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 12,
    fontFamily: 'Inter_400Regular',
    marginTop: 4,
    lineHeight: 17,
  },
  langBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginTop: 4,
  },
  langBtnText: {
    fontSize: 12,
    fontFamily: 'Inter_600SemiBold',
  },
  categoryScroll: {
    paddingVertical: 12,
  },
  categoryContent: {
    paddingHorizontal: GRID_PADDING,
    gap: 8,
  },
  pill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    paddingHorizontal: 12,
    paddingVertical: 7,
  },
  pillText: {
    fontSize: 12,
    fontFamily: 'Inter_500Medium',
  },
  divider: {
    height: 1,
    marginHorizontal: GRID_PADDING,
    marginBottom: 12,
    opacity: 0.6,
  },
  listContent: {
    paddingHorizontal: GRID_PADDING,
  },
  columnWrapper: {
    gap: GRID_GAP,
    marginBottom: GRID_GAP,
  },
  card: {
    borderWidth: 1,
    overflow: 'hidden',
    shadowColor: '#6A8F78',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 2,
  },
  cardImage: {
    width: '100%',
  },
  cardBody: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 6,
  },
  cardName: {
    flex: 1,
    fontSize: 12,
    fontFamily: 'Inter_600SemiBold',
    lineHeight: 17,
  },
  openBadge: {
    width: 22,
    height: 22,
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
});
