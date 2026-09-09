import React, { useEffect, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { ArrowUpRight, Menu, Moon, Sun, X } from 'lucide-react';
import { scrollToId } from '../utils/motion';
import { personalInfo } from '../data/mock';

const getInitialTheme = () => {
  if (typeof window === 'undefined') return 'light';
  try {
    const saved = window.localStorage.getItem('portfolio-theme');
    return saved === 'dark' || saved === 'light' ? saved : 'light';
  } catch {
    return 'light';
  }
};

const navItems = [
  ['inicio', 'Home'],
  ['sobre-mi', 'About'],
  ['servicios', 'What I do'],
  ['proyectos', 'Work'],
  ['habilidades', 'Stack'],
  ['contacto', 'Contact'],
];

const Navbar = () => {
  const [theme, setTheme] = useState(getInitialTheme);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    root.dataset.theme = theme;
    try { window.localStorage.setItem('portfolio-theme', theme); } catch {}
  }, [theme]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const goTo = (id) => {
    setMenuOpen(false);
    window.setTimeout(() => scrollToId(id), 20);
  };

  const themeLabel = theme === 'light' ? 'Activar modo oscuro' : 'Activar modo claro';

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <button type="button" className="site-brand" onClick={() => goTo('inicio')} aria-label="Ir al inicio">
        <span className="site-brand-mark">SD</span>
        <span className="site-brand-copy">
          <strong>Sara Duque</strong>
          <small>Frontend Developer</small>
        </span>
      </button>

      <div className="site-header-actions">
        <span className="site-header-role">Web + Mobile · UX/UI · Software</span>
        <button
          type="button"
          onClick={() => setTheme((current) => (current === 'light' ? 'dark' : 'light'))}
          className="header-round-button"
          aria-label={themeLabel}
          title={themeLabel}
        >
          {theme === 'light' ? <Moon /> : <Sun />}
        </button>

        <Dialog.Root open={menuOpen} onOpenChange={setMenuOpen}>
          <Dialog.Trigger asChild>
            <button type="button" className="header-menu-button" aria-label="Abrir menú" data-cursor="OPEN">
              <span>Menu</span><Menu />
            </button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="menu-overlay" />
            <Dialog.Content className="menu-panel">
              <div className="menu-panel-top">
                <Dialog.Title className="menu-title">Navigation</Dialog.Title>
                <Dialog.Close asChild>
                  <button type="button" className="header-round-button menu-close" aria-label="Cerrar menú">
                    <X />
                  </button>
                </Dialog.Close>
              </div>

              <nav className="menu-links" aria-label="Navegación principal">
                {navItems.map(([id, label], index) => (
                  <button key={id} type="button" onClick={() => goTo(id)} className="menu-link">
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <strong>{label}</strong>
                    <ArrowUpRight />
                  </button>
                ))}
              </nav>

              <div className="menu-panel-footer">
                <p>Frontend development · Web applications · Mobile applications · UX/UI · Software</p>
                <div>
                  <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                  <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  <a href={`mailto:${personalInfo.email}`}>Email</a>
                </div>
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </header>
  );
};

export default Navbar;
