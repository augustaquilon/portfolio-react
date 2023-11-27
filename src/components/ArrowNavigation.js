import React, { useEffect, forwardRef, useCallback } from 'react';

const ArrowNavigation = forwardRef(({ sectionRefs }, ref) => {
  const handleKeyDown = useCallback((event) => {
    const { activeElement } = document;
    const keys = Object.keys(sectionRefs);
    const index = keys.findIndex((key) => sectionRefs[key].current === activeElement);
    const nextSectionRef = sectionRefs[keys[index + 1]];
    switch (event.key) {
      case 'ArrowUp':
        console.log('Up arrow pressed');
        break;
      case 'ArrowDown':
        event.preventDefault();
        if (activeElement.closest('header')) {
          if (index !== -1 && index < keys.length - 1) {
            if (nextSectionRef?.current) {
              nextSectionRef.current.scrollIntoView({ behavior: 'smooth' });
            }
          }
        }
        break;
      case 'ArrowLeft':
        console.log('Left arrow pressed');
        break;
      case 'ArrowRight':
        console.log('Right arrow pressed');
        break;
      default:
        break;
    }
  }, [sectionRefs]);

  useEffect(() => {
    if (ref) {
      ref.current = {
        handleKeyDown
      };
    }
  }, [ref, handleKeyDown]);

  useEffect(() => {
    const handleKeyPress = (event) => {
      handleKeyDown(event);
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyDown]);

  return (
    <div>
      <p>Press arrow keys for navigation</p>
    </div>
  );
});

export default ArrowNavigation;
