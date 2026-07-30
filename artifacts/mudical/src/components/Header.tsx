import { useTranslation } from 'react-i18next';

export function Header() {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language.startsWith('ko') ? 'en' : 'ko');
  };

  return (
    <header className="w-full py-16 px-6 relative z-10">
      <div className="max-w-5xl mx-auto flex flex-col items-center justify-center text-center relative">
        <button 
          onClick={toggleLanguage}
          className="absolute top-0 right-0 px-4 py-2 bg-white/50 backdrop-blur-md rounded-full text-sm font-medium text-primary hover:bg-white/80 transition-colors shadow-sm flex items-center gap-2 border border-white/20"
        >
          <span className="material-icons text-[16px]">language</span>
          {t('toggle_lang')}
        </button>
        
        <div className="mb-6 relative inline-block">
          <div className="absolute -top-4 -right-6 text-accent animate-pulse">
            <span className="material-icons text-3xl">auto_awesome</span>
          </div>
          <h1
            className="text-5xl md:text-6xl text-foreground"
            style={{
              fontFamily: i18n.language.startsWith('ko')
                ? 'PretendardGOV Variable'
                : 'DotGothic16',
              fontWeight: i18n.language.startsWith('ko') ? 700 : undefined,
            }}
          >
            {t('site_title')}
          </h1>
        </div>
        
        <p
          className="text-base md:text-lg text-foreground/80 font-medium break-words leading-relaxed"
          style={{ wordBreak: 'keep-all', overflowWrap: 'anywhere' }}
        >
          {t('site_subtitle')}
        </p>
      </div>
    </header>
  );
}