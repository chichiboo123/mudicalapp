import { useTranslation } from 'react-i18next';

export function Header() {
  const { t, i18n } = useTranslation();
  const isKorean = i18n.language.startsWith('ko');

  const toggleLanguage = () => {
    i18n.changeLanguage(isKorean ? 'en' : 'ko');
  };

  return (
    <header className="w-full px-6 pt-6 pb-12 md:pb-16 relative z-10">
      <div className="max-w-5xl mx-auto">
        {/* Own row rather than an absolute overlay, so the button can never
            collide with the centered title on narrow screens. */}
        <div className="flex justify-end">
          <button
            type="button"
            onClick={toggleLanguage}
            lang={isKorean ? 'en' : 'ko'}
            aria-label={isKorean ? 'Switch to English' : '한국어로 전환'}
            className="px-4 py-2 bg-white/50 backdrop-blur-md rounded-full text-sm font-medium text-primary hover:bg-white/80 transition-colors shadow-sm flex items-center gap-2 border border-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <span className="material-icons text-[16px]" aria-hidden="true">
              language
            </span>
            {t('toggle_lang')}
          </button>
        </div>

        <div className="flex flex-col items-center justify-center text-center mt-6 md:mt-8">
          <div className="mb-6 relative inline-block">
            <div
              className="absolute -top-4 -right-1 md:-right-6 text-accent animate-pulse"
              aria-hidden="true"
            >
              <span className="material-icons text-3xl">auto_awesome</span>
            </div>
            <h1
              className="text-4xl sm:text-5xl md:text-6xl text-foreground"
              style={{
                fontFamily: isKorean ? 'PretendardGOV Variable' : 'DotGothic16',
                fontWeight: isKorean ? 700 : undefined,
                wordBreak: 'keep-all',
              }}
            >
              {t('site_title')}
            </h1>
          </div>

          {/* Narrow screens break at the divider so the description gets its
              own line, instead of wrapping mid-phrase. md+ keeps one line. */}
          <p
            className="text-base md:text-lg text-foreground/80 font-medium break-words leading-relaxed"
            style={{ wordBreak: 'keep-all', overflowWrap: 'anywhere' }}
          >
            <span className="block md:inline">{t('site_tagline')}</span>
            <span className="hidden md:inline" aria-hidden="true">
              {' | '}
            </span>
            <span className="block md:inline">{t('site_description')}</span>
          </p>
        </div>
      </div>
    </header>
  );
}
