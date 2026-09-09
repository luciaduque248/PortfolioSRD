export const prefersReducedMotion = () => {
  if (typeof window === 'undefined' || !window.matchMedia) return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

export const scrollToElement = (element, options = {}) => {
  if (!element) return;

  element.scrollIntoView({
    behavior: prefersReducedMotion() ? 'auto' : 'smooth',
    block: options.block ?? 'start',
    inline: options.inline ?? 'nearest',
  });
};

export const scrollToId = (id, options = {}) => {
  if (typeof document === 'undefined') return;
  scrollToElement(document.getElementById(id), options);
};
