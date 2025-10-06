import React, { useEffect } from 'react';

const ScrollSpotlight: React.FC = () => {
  useEffect(() => {
    const spotlight = document.getElementById('scroll-spotlight');
    if (!spotlight) return;

    const handleScroll = () => {
      const viewportHeight = window.innerHeight;
      const scrollY = window.scrollY;
      
      // Position the spotlight slightly ahead in the scroll direction for a leading effect
      const spotlightY = scrollY + (viewportHeight / 3);

      spotlight.style.setProperty('--spotlight-y', `${spotlightY}px`);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    // Set initial position
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <div id="scroll-spotlight" aria-hidden="true" />;
};

export default ScrollSpotlight;
