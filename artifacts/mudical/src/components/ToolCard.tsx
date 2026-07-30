import { useTranslation } from 'react-i18next';
import { tools } from '../data/tools';

interface ToolCardProps {
  tool: typeof tools[0];
}

export function ToolCard({ tool }: ToolCardProps) {
  const { t } = useTranslation();
  
  return (
    <div className="group relative flex flex-col bg-card rounded-[24px] p-6 shadow-sm border border-card-border hover:shadow-md hover:-translate-y-1 transition-all duration-300">
      <div className="flex items-start gap-4 mb-4">
        <div className="w-[90px] h-[90px] rounded-2xl overflow-hidden shadow-sm shrink-0 border border-muted/50 bg-white">
          <img 
            src={tool.img} 
            alt={t(`${tool.key}.name_ko`)} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="flex flex-col pt-1">
          <h3
            className="font-bold text-lg text-card-foreground leading-tight tracking-tight"
            style={{ wordBreak: 'keep-all' }}
          >
            {t(`${tool.key}.name_ko`)}
          </h3>
          <p className="text-sm font-medium text-muted-foreground mt-0.5 font-sans">
            {t(`${tool.key}.name_en`)}
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
          className="inline-flex w-full items-center justify-center gap-2 bg-primary/10 hover:bg-primary/20 text-primary font-bold py-3 px-4 rounded-xl transition-colors duration-200"
        >
          <span>{t('open_app')}</span>
          <span className="material-icons text-[18px]">open_in_new</span>
        </a>
      </div>
    </div>
  );
}