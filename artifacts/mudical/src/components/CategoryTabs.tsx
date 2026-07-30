import { useTranslation } from 'react-i18next';
import { categories } from '../data/tools';
import { useCallback, useEffect, useRef, useState } from 'react';

export function CategoryTabs() {
  const { t } = useTranslation();
  const [activeId, setActiveId] = useState<string>(categories[0].id);
  const [isScrolled, setIsScrolled] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<Record<string, HTMLButtonElement | null>>({});

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

  // On mobile the tab strip scrolls horizontally; keep the active tab visible.
  useEffect(() => {
    const button = buttonRefs.current[activeId];
    const list = listRef.current;
    if (!button || !list) return;
    if (list.scrollWidth <= list.clientWidth) return;

    const target =
      button.offsetLeft - list.clientWidth / 2 + button.clientWidth / 2;
    list.scrollTo({ left: Math.max(0, target), behavior: 'smooth' });
  }, [activeId]);

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
        {/* `justify-center` on an overflowing scroll container clips the
            leading tabs and makes them unreachable. Centering the inner track
            with `w-max mx-auto` instead keeps every tab scrollable once the
            row is wider than the viewport. `relative` makes the scroller the
            offsetParent for the centering maths below. */}
        <div ref={listRef} className="relative overflow-x-auto hide-scrollbar">
          <div className="flex w-max mx-auto gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                ref={(el) => {
                  buttonRefs.current[cat.id] = el;
                }}
                onClick={() => scrollToSection(cat.id)}
                aria-current={activeId === cat.id ? 'true' : undefined}
                className={`shrink-0 whitespace-nowrap px-4 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                  activeId === cat.id
                    ? 'bg-primary text-primary-foreground shadow-md transform scale-105'
                    : 'bg-white/60 text-foreground/70 hover:bg-white hover:text-foreground border border-white/40'
                }`}
              >
                <span className="material-icons text-[18px]" aria-hidden="true">
                  {cat.icon}
                </span>
                {t(cat.key)}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
