import React, { useEffect, useState } from 'react';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { scrollToId } from '../utils/motion';

const getInitialTheme = () => {
  if (typeof window === 'undefined') return 'light';
  try {
    const savedTheme = window.localStorage.getItem('portfolio-theme');
    return savedTheme === 'dark' || savedTheme === 'light' ? savedTheme : 'light';
  } catch {
    return 'light';
  }
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 28);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    root.dataset.theme = theme;
    try {
      window.localStorage.setItem('portfolio-theme', theme);
    } catch {
      // Theme still works without persistence.
    }
  }, [theme]);

  const navItems = [
    { id: 'sobre-mi', label: 'About' },
    { id: 'proyectos', label: 'Work' },
    { id: 'habilidades', label: 'Stack' },
    { id: 'contacto', label: 'Contact' },
  ];

  const goTo = (id) => {
    scrollToId(id);
    setIsMobileMenuOpen(false);
  };

  const themeLabel = theme === 'light' ? 'Activar modo oscuro' : 'Activar modo claro';

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-200 ease-portfolio-out ${
        isScrolled
          ? 'bg-[#f4f3ef]/90 shadow-[0_1px_0_rgba(0,0,0,.08)] backdrop-blur-xl dark:bg-[#080808]/90 dark:shadow-[0_1px_0_rgba(255,255,255,.08)]'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-[1600px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <button
          type="button"
          onClick={() => goTo('inicio')}
          className="text-left text-sm font-black uppercase tracking-[-0.02em] text-black dark:text-white"
          aria-label="Ir al inicio"
        >
          Sara Duque
        </button>

        <div className="flex items-center gap-2 sm:gap-4">
          <div className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => goTo(item.id)}
                className="text-xs font-semibold uppercase tracking-[0.16em] text-black/55 transition-colors hover:text-black dark:text-white/55 dark:hover:text-white"
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setTheme((current) => (current === 'light' ? 'dark' : 'light'))}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/45 text-black transition-[background-color,transform] duration-150 ease-portfolio-out hover:bg-white active:scale-95 dark:border-white/10 dark:bg-white/[.05] dark:text-white dark:hover:bg-white/[.1]"
            aria-label={themeLabel}
            title={themeLabel}
          >
            {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </button>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/45 text-black transition-[background-color,transform] duration-150 ease-portfolio-out hover:bg-white active:scale-95 dark:border-white/10 dark:bg-white/[.05] dark:text-white dark:hover:bg-white/[.1] md:hidden"
            aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div className="mobile-menu-shell absolute left-5 right-5 top-[76px] md:hidden" data-open={isMobileMenuOpen ? 'true' : 'false'}>
        <div className="overflow-hidden rounded-3xl border border-black/10 bg-[#f4f3ef]/96 p-2 shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-[#0b0b0b]/96">
          {navItems.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => goTo(item.id)}
              tabIndex={isMobileMenuOpen ? 0 : -1}
              className="flex w-full items-center justify-between rounded-2xl px-4 py-4 text-left text-lg font-semibold text-black transition-colors hover:bg-black/[.05] dark:text-white dark:hover:bg-white/[.06]"
            >
              <span>{item.label}</span>
              <span className="text-xs font-medium text-black/35 dark:text-white/35">0{index + 1}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
