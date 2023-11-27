import React, { useEffect } from 'react';

const ArrowNavigation = () => {
  const handleKeyDown = (event) => {
    switch (event.key) {
      case 'ArrowUp':
        console.log('Up arrow pressed');
        break;
      case 'ArrowDown':
        console.log('Down arrow pressed');
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
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      handleKeyDown(event);
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <div>
      <p>Press arrow keys for navigation</p>
    </div>
  );
};

export default ArrowNavigation;
