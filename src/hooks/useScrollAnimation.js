import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollAnimation = () => {
  const location = useLocation(); // ✅ detects route changes

  useEffect(() => {
    const faders = document.querySelectorAll('.fade-in');

    // Reset visibility so animations can replay
    faders.forEach(fader => fader.classList.remove('visible'));

    const appearOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };

    const appearOnScroll = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, appearOptions);

    faders.forEach(fader => appearOnScroll.observe(fader));

    // cleanup
    return () => faders.forEach(fader => appearOnScroll.unobserve(fader));

  }, [location.pathname]); // ✅ re-run every time you change route
};
