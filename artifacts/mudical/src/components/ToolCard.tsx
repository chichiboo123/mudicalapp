import { useTranslation } from 'react-i18next';
import { tools } from '../data/tools';

interface ToolCardProps {
  tool: typeof tools[0];
}

export function ToolCard({ tool }: ToolCardProps) {
  const { t, i18n } = useTranslation();
  const isKorean = i18n.language.startsWith('ko');

  const nameKo = t(`${tool.key}.name_ko`);
  const nameEn = t(`${tool.key}.name_en`);
  // Lead with the name in the reader's own language; keep the other one as the
  // secondary line so the card stays bilingual either way.
  const primaryName = isKorean ? nameKo : nameEn;
  const secondaryName = isKorean ? nameEn : nameKo;

  return (
    <div className="group relative flex flex-col bg-card rounded-[24px] p-6 shadow-sm border border-card-border hover:shadow-md hover:-translate-y-1 transition-all duration-300">
      <div className="flex items-start gap-4 mb-4">
        <div className="w-[90px] h-[90px] rounded-2xl overflow-hidden shadow-sm shrink-0 border border-muted/50 bg-white">
          <img
            src={tool.img}
            alt=""
            width={90}
            height={90}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="flex flex-col pt-1">
          <h3
            className="font-bold text-lg text-card-foreground leading-tight tracking-tight"
            style={{ wordBreak: 'keep-all' }}
          >
            {primaryName}
          </h3>
          <p
            className="text-sm font-medium text-muted-foreground mt-0.5 font-sans"
            style={{ wordBreak: 'keep-all' }}
          >
            {secondaryName}
          </p>
        </div>
      </div>

      <p className="text-sm text-card-foreground/80 leading-relaxed mb-6">
        {t(`${tool.key}.desc`)}
      </p>

      <div className="mt-auto pt-2">
        <a
          href={tool.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t('open_app_aria', { name: primaryName })}
          className="inline-flex w-full items-center justify-center gap-2 bg-primary/10 hover:bg-primary/20 text-primary font-bold py-3 px-4 rounded-xl transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          <span>{t('open_app')}</span>
          <span className="material-icons text-[18px]" aria-hidden="true">
            open_in_new
          </span>
        </a>
      </div>
    </div>
  );
}
