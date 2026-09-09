import React, { useEffect, useState } from 'react';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { scrollToId } from '../utils/motion';

const getInitialTheme = () => {
  if (typeof window === 'undefined') return 'dark';

  try {
    const savedTheme = window.localStorage.getItem('portfolio-theme');
    return savedTheme === 'light' || savedTheme === 'dark' ? savedTheme : 'dark';
  } catch {
    return 'dark';
  }
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 32);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    root.dataset.theme = theme;

    try {
      window.localStorage.setItem('portfolio-theme', theme);
    } catch {
      // El cambio visual sigue funcionando aunque localStorage no esté disponible.
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'));
  };

  const scrollToSection = (sectionId) => {
    scrollToId(sectionId);
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'sobre-mi', label: 'Sobre mí' },
    { id: 'proyectos', label: 'Proyectos' },
    { id: 'habilidades', label: 'Habilidades' },
    { id: 'contacto', label: 'Contacto' }
  ];

  const themeButtonLabel = theme === 'dark'
    ? 'Activar modo claro'
    : 'Activar modo oscuro';

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-[background-color,box-shadow,backdrop-filter] duration-200 ease-portfolio-out ${
        isScrolled
          ? 'bg-white/82 shadow-[0_8px_30px_rgba(15,23,42,0.06)] backdrop-blur-xl dark:bg-black/72 dark:shadow-[0_8px_30px_rgba(0,0,0,0.22)]'
          : 'bg-white/60 backdrop-blur-lg dark:bg-black/25'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <button
            type="button"
            onClick={() => scrollToSection('inicio')}
            className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-2xl font-bold text-transparent active:scale-[0.97]"
            aria-label="Ir al inicio"
          >
            SD
          </button>

          <div className="flex items-center gap-2 md:gap-4">
            <div className="hidden md:block">
              <div className="flex items-center gap-1 lg:gap-3">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => scrollToSection(item.id)}
                    className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition-[background-color,color,transform] duration-150 ease-portfolio-out hover:bg-slate-900/[0.04] hover:text-slate-950 active:scale-[0.97] dark:text-gray-300 dark:hover:bg-white/[0.05] dark:hover:text-white"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={toggleTheme}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-slate-900/[0.05] text-slate-700 transition-[background-color,color,transform] duration-150 ease-portfolio-out hover:bg-slate-900/[0.09] active:scale-95 dark:bg-white/[0.07] dark:text-gray-200 dark:hover:bg-white/[0.12]"
              aria-label={themeButtonLabel}
              title={themeButtonLabel}
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Moon className="h-5 w-5" aria-hidden="true" />
              )}
            </button>

            <div className="md:hidden">
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen((open) => !open)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-slate-900/[0.05] transition-[background-color,transform] duration-150 ease-portfolio-out hover:bg-slate-900/[0.09] active:scale-95 dark:bg-white/[0.07] dark:hover:bg-white/[0.12]"
                aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-navigation"
              >
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5 text-slate-800 dark:text-white" />
                ) : (
                  <Menu className="h-5 w-5 text-slate-800 dark:text-white" />
                )}
              </button>
            </div>
          </div>
        </div>

        <div
          id="mobile-navigation"
          className="mobile-menu-shell absolute left-4 right-4 top-16 md:hidden"
          data-open={isMobileMenuOpen ? 'true' : 'false'}
          aria-hidden={!isMobileMenuOpen}
        >
          <div className="overflow-hidden rounded-2xl bg-white/95 p-2 shadow-xl backdrop-blur-xl dark:bg-gray-950/95">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                tabIndex={isMobileMenuOpen ? 0 : -1}
                onClick={() => scrollToSection(item.id)}
                className="block w-full rounded-xl px-4 py-3 text-left text-base font-medium text-slate-700 transition-[background-color,color,transform] duration-150 ease-portfolio-out hover:bg-slate-900/[0.04] active:scale-[0.99] dark:text-gray-300 dark:hover:bg-white/[0.05]"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
