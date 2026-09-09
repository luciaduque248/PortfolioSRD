import { useEffect } from 'react';

const ScrollReveal = () => {
  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const getRevealElements = (root = document) => {
      const elements = [];
      if (root instanceof Element && root.matches('[data-reveal]')) elements.push(root);
      if (root.querySelectorAll) elements.push(...root.querySelectorAll('[data-reveal]'));
      return elements;
    };

    if (reducedMotion) {
      const revealImmediately = (root = document) => {
        getRevealElements(root).forEach((element) => element.classList.add('is-visible'));
      };

      revealImmediately();

      const mutationObserver = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          mutation.addedNodes.forEach((node) => {
            if (node instanceof Element) revealImmediately(node);
          });
        });
      });

      mutationObserver.observe(document.body, { childList: true, subtree: true });
      return () => mutationObserver.disconnect();
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.08 }
    );

    const observeRevealElements = (root = document) => {
      getRevealElements(root).forEach((element) => {
        if (!element.classList.contains('is-visible')) observer.observe(element);
      });
    };

    observeRevealElements();

    // React remounts project cards when a filter changes. Observe those new nodes
    // too; otherwise they retain the initial opacity: 0 reveal state until reload.
    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof Element) observeRevealElements(node);
        });
      });
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      mutationObserver.disconnect();
      observer.disconnect();
    };
  }, []);

  return null;
};

export default ScrollReveal;
