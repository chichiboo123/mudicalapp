import { useTranslation } from 'react-i18next';
import { categories } from '../data/tools';
import { useCallback, useEffect, useState } from 'react';

export function CategoryTabs() {
  const { t } = useTranslation();
  const [activeId, setActiveId] = useState<string>(categories[0].id);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 250);

      // Update active tab based on scroll position
      const sections = categories.map((c) =>
        document.getElementById(`category-${c.id}`),
      );

      // Find the last section that has scrolled past the top of the viewport
      let currentActiveId = categories[0].id;
      for (const section of sections) {
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150) {
            currentActiveId = section.id.replace('category-', '');
          }
        }
      }
      setActiveId(currentActiveId);
    };

    // Run once on mount so a deep-linked or restored scroll position starts
    // with the correct tab highlighted instead of always the first one.
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(`category-${id}`);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }, []);

  return (
    <nav
      aria-label={t('categories_nav_label')}
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-lg shadow-sm py-3' : 'bg-transparent py-4'}`}
    >
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        {/* Below md the labels are dropped and the tabs share the row evenly,
            so all seven always fit on one line at any narrow width — no
            horizontal scrolling and nothing cut off. At md+ the labels come
            back and the row wraps as before. */}
        <div className="flex justify-center gap-1.5 md:flex-wrap md:gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => scrollToSection(cat.id)}
              aria-current={activeId === cat.id ? 'true' : undefined}
              aria-label={t(cat.key)}
              title={t(cat.key)}
              className={`flex-1 min-w-0 max-w-[56px] h-11 justify-center rounded-full text-sm font-bold flex items-center transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary md:flex-none md:max-w-none md:h-auto md:gap-2 md:px-4 md:py-2.5 md:whitespace-nowrap ${
                activeId === cat.id
                  ? 'bg-primary text-primary-foreground shadow-md transform scale-105'
                  : 'bg-white/60 text-foreground/70 hover:bg-white hover:text-foreground border border-white/40'
              }`}
            >
              <span className="material-icons text-[18px]" aria-hidden="true">
                {cat.icon}
              </span>
              <span className="hidden md:inline">{t(cat.key)}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
