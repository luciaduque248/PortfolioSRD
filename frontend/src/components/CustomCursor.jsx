import { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const [label, setLabel] = useState('');

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine) and (min-width: 1024px)');
    if (!finePointer.matches) return undefined;

    const root = document.documentElement;
    root.classList.add('custom-cursor-enabled');
    const cursor = cursorRef.current;
    if (!cursor) return undefined;

    const move = (event) => {
      cursor.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0) translate(-50%, -50%)`;
      cursor.dataset.visible = 'true';
      const target = event.target.closest?.('[data-cursor]');
      setLabel(target?.getAttribute('data-cursor') || '');
    };

    const leave = () => { cursor.dataset.visible = 'false'; };
    window.addEventListener('pointermove', move, { passive: true });
    document.documentElement.addEventListener('mouseleave', leave);

    return () => {
      root.classList.remove('custom-cursor-enabled');
      window.removeEventListener('pointermove', move);
      document.documentElement.removeEventListener('mouseleave', leave);
    };
  }, []);

  return <div ref={cursorRef} className={`custom-cursor ${label ? 'has-label' : ''}`} data-visible="false"><span>{label}</span></div>;
};

export default CustomCursor;
