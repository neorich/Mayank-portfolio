
import React, { useState, useEffect } from 'react';

const CursorGlow: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const root = document.documentElement;

    const handleMouseMove = (e: MouseEvent) => {
      root.style.setProperty('--mouse-x', `${e.clientX}px`);
      root.style.setProperty('--mouse-y', `${e.clientY}px`);
      
      const target = e.target as HTMLElement;
      // Also check for role="button" for accessibility and custom components
      if (target.closest('a, button, [role="button"]')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Clean up the CSS variables when the component unmounts
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      root.style.removeProperty('--mouse-x');
      root.style.removeProperty('--mouse-y');
    };
  }, []);

  return (
    <div
      id="aurora-cursor"
      className={isHovering ? 'hovering' : ''}
    />
  );
};

export default CursorGlow;