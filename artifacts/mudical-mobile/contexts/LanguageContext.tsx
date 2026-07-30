import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export type Lang = 'ko' | 'en';

interface LanguageContextValue {
  lang: Lang;
  toggleLang: () => void;
  t: (key: string) => string;
}

type DeepRecord = { [key: string]: string | DeepRecord };

const translations: Record<Lang, DeepRecord> = {
  ko: {
    site_title: '뮤.디.컬',
    site_subtitle: '모두의 뮤지컬 수업을 위한 디지털 도구',
    open_app: '앱 열기',
    toggle_lang: 'English',
    all_categories: '전체',
    categories: {
      foundation: '기반',
      story: '이야기/대본',
      music: '음악',
      movement: '움직임',
      stage: '무대미술',
      performance: '공연',
      appreciation: '감상수업',
    },
    tools: {
      emotion_card: { name: '감정카드', desc: '24가지 감정을 카드 형태로 활용' },
      our4to: { name: '우리네컷', desc: '네컷 사진 촬영 후 장식' },
      finger_people: { name: '핑거피플', desc: '손가락으로 인물 카드 창작' },
      story_card: { name: '스토리텔링 카드', desc: '랜덤 이미지로 발상과 표현' },
      character_matrix: { name: '인물도감', desc: '인물의 외모·성격을 시각화' },
      script_note: { name: '뮤지컬 대본 노트', desc: '대사·노래를 블록으로 작성' },
      easy_lyrics: { name: '가사 바꾸기 마법사', desc: '가사를 네모칸 형태로 변환' },
      easy_piano: { name: '여기 있어 피아노', desc: '포켓 피아노 & 자동 반주' },
      easy_score: { name: '너를 위한 악보', desc: '시각적 악보 웹앱' },
      blocking_note: { name: '뮤지컬 동선 노트', desc: '안무·동선을 아이콘으로 시각화' },
      my_stage: { name: '마이 스테이지', desc: '3D 무대 디자인' },
      sound_box: { name: '여기 있어 효과음', desc: '효과음을 쉽게 재생' },
      poster_studio: { name: '뮤지컬 포스터 스튜디오', desc: '포스터 초안 디자인' },
      stagebill: { name: '스테이지빌', desc: '뮤지컬 작품 큐레이션' },
    },
  },
  en: {
    site_title: 'Mu.Di.Cal',
    site_subtitle: 'Digital Tools for Musical Theater Teachers',
    open_app: 'Open App',
    toggle_lang: '한국어',
    all_categories: 'All',
    categories: {
      foundation: 'Foundation',
      story: 'Story / Script',
      music: 'Music',
      movement: 'Movement',
      stage: 'Stage Design',
      performance: 'Performance',
      appreciation: 'Appreciation',
    },
    tools: {
      emotion_card: { name: 'Emotion Card', desc: 'Explore 24 emotions as cards' },
      our4to: { name: 'Our4to', desc: 'Take & decorate 4-cut photos' },
      finger_people: { name: 'Finger People', desc: 'Create character cards with fingers' },
      story_card: { name: 'Story Card', desc: 'Random images spark imagination' },
      character_matrix: { name: 'Character Matrix', desc: 'Visualize character traits' },
      script_note: { name: 'Script Note', desc: 'Write scripts in block format' },
      easy_lyrics: { name: 'Easy Lyrics', desc: 'Convert lyrics to grid format' },
      easy_piano: { name: 'Easy Piano', desc: 'Pocket piano & auto-accompaniment' },
      easy_score: { name: 'Easy Score', desc: 'Visual score web app' },
      blocking_note: { name: 'Blocking Note', desc: 'Visualize stage blocking' },
      my_stage: { name: 'My Stage', desc: '3D stage design tool' },
      sound_box: { name: 'Sound Box', desc: 'Play sound effects easily' },
      poster_studio: { name: 'Poster Studio', desc: 'Design musical poster drafts' },
      stagebill: { name: 'Stagebill', desc: 'Curated musical recommendations' },
    },
  },
};

function getNestedValue(obj: DeepRecord, keyPath: string): string {
  const parts = keyPath.split('.');
  let current: string | DeepRecord = obj;
  for (const part of parts) {
    if (typeof current === 'object' && part in current) {
      current = current[part];
    } else {
      return keyPath;
    }
  }
  return typeof current === 'string' ? current : keyPath;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: 'ko',
  toggleLang: () => {},
  t: (key) => key,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('ko');

  useEffect(() => {
    AsyncStorage.getItem('mudical_lang').then((v) => {
      if (v === 'ko' || v === 'en') setLang(v);
    });
  }, []);

  const toggleLang = useCallback(() => {
    const next: Lang = lang === 'ko' ? 'en' : 'ko';
    setLang(next);
    AsyncStorage.setItem('mudical_lang', next);
  }, [lang]);

  const t = useCallback(
    (key: string): string => getNestedValue(translations[lang], key),
    [lang],
  );

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
