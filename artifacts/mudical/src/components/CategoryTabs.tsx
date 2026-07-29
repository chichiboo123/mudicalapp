import { useTranslation } from 'react-i18next';
import { categories } from '../data/tools';
import { useEffect, useState } from 'react';

export function CategoryTabs() {
  const { t } = useTranslation();
  const [activeId, setActiveId] = useState<string>(categories[0].id);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 250);
      
      // Update active tab based on scroll position
      const sections = categories.map(c => document.getElementById(`category-${c.id}`));
      
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

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(`category-${id}`);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className={`sticky top-0 z-40 w-full transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-lg shadow-sm py-3' : 'bg-transparent py-4'}`}>
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <div className="flex overflow-x-auto hide-scrollbar gap-2 md:justify-center">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => scrollToSection(cat.id)}
              className={`whitespace-nowrap px-4 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 transition-all duration-300 ${
                activeId === cat.id 
                  ? 'bg-primary text-primary-foreground shadow-md transform scale-105' 
                  : 'bg-white/60 text-foreground/70 hover:bg-white hover:text-foreground border border-white/40'
              }`}
            >
              <span className="material-icons text-[18px]">{cat.icon}</span>
              {t(cat.key)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}