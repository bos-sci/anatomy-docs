import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useHashScroll = (isContentLoaded = false): void => {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (isContentLoaded) {
      if (hash === '') {
        window.scrollTo(0, 0);
      } else {
        setTimeout(() => {
          const element = document.querySelector(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 1);
      }
    }
  }, [pathname, hash, key, isContentLoaded]);
};

export default useHashScroll;
