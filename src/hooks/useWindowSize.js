import {useEffect, useState} from 'react';
import {
  MOBILE_MENU_SCREEN_MAX_BREAKPOINT,
  MOBILE_SCREEN_MAX_BREAKPOINT,
  TAB_SCREEN_MAX_BREAKPOINT,
} from '@constants/screenBreakpoints';

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return {
    ...windowSize,
    isMobileScreen:
      windowSize.width > 0 && windowSize.width <= MOBILE_SCREEN_MAX_BREAKPOINT,
    isTabScreen:
      windowSize.width > 0 &&
      windowSize.width <= TAB_SCREEN_MAX_BREAKPOINT &&
      windowSize.width > MOBILE_SCREEN_MAX_BREAKPOINT,
    isDesktopScreen:
      windowSize.width > 0 && windowSize.width > TAB_SCREEN_MAX_BREAKPOINT,
    isMobileMenuScreen:
      windowSize.width > 0 &&
      windowSize.width <= MOBILE_MENU_SCREEN_MAX_BREAKPOINT,
  };
};

export default useWindowSize;
