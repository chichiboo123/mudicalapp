import { Header } from '../components/Header';
import { CategoryTabs } from '../components/CategoryTabs';
import { ToolCard } from '../components/ToolCard';
import { Footer } from '../components/Footer';
import { categories, tools } from '../data/tools';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="min-h-[100dvh] relative flex flex-col overflow-x-hidden">
      {/* Starry background effect */}
      <div className="star-background" aria-hidden="true" />

      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:rounded-full focus:bg-primary focus:text-primary-foreground focus:font-bold"
      >
        {t('skip_to_content')}
      </a>

      <Header />
      <CategoryTabs />

      <main id="main-content" className="flex-1 w-full max-w-5xl mx-auto px-6 py-12 relative z-10 flex flex-col gap-20">
        {categories.map((category) => {
          const categoryTools = tools.filter(tool => tool.categoryId === category.id);
          
          if (categoryTools.length === 0) return null;

          return (
            <section 
              key={category.id} 
              id={`category-${category.id}`} 
              className="scroll-mt-[120px]"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                  <span className="material-icons">{category.icon}</span>
                </div>
                <h2 className="text-2xl font-bold text-foreground tracking-tight">
                  {t(category.key)}
                </h2>
                <div className="h-[2px] flex-1 bg-gradient-to-r from-primary/20 to-transparent ml-4 rounded-full" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryTools.map((tool) => (
                  <ToolCard key={tool.id} tool={tool} />
                ))}
              </div>
            </section>
          );
        })}
      </main>

      <Footer />
    </div>
  );
}