import React, { useEffect, useState } from 'react';

const Preloader = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let seen = false;
    try { seen = window.sessionStorage.getItem('portfolio-intro-seen') === '1'; } catch {}

    if (reduceMotion || seen) {
      setVisible(false);
      return undefined;
    }

    const timer = window.setTimeout(() => {
      setVisible(false);
      try { window.sessionStorage.setItem('portfolio-intro-seen', '1'); } catch {}
    }, 900);

    return () => window.clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="preloader" aria-hidden="true">
      <div className="preloader-inner">
        <span className="preloader-name">Sara Duque</span>
        <div className="preloader-title">
          <span>Frontend</span>
          <span>Developer</span>
        </div>
        <div className="preloader-line"><span /></div>
      </div>
    </div>
  );
};

export default Preloader;
