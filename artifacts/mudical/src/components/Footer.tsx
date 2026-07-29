import { useTranslation } from 'react-i18next';

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="w-full py-12 mt-20 relative z-10 border-t border-primary/10 bg-primary/5">
      <div className="max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
        <a 
          href="https://litt.ly/chichiboo" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-lg font-bold text-foreground hover:text-primary transition-colors inline-flex items-center gap-2 mb-3"
        >
          {t('footer_author')}
          <span className="material-icons text-sm text-accent">stars</span>
        </a>
        <p className="text-sm text-foreground/60 max-w-lg leading-relaxed">
          {t('footer_notice')}
        </p>
      </div>
    </footer>
  );
}