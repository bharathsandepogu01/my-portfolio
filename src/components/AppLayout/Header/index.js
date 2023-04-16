import React, {useRef, useEffect} from 'react';
import Logo from '@components/Logo';
import HamBurgerMenu from '@components/HamburgerMenu';
import classes from './styles.module.scss';
import ThemeButton from '@components/ThemeButton';

function Header() {
  const headerRef = useRef();
  const prevScrollY = useRef(0);

  useEffect(() => {
    const scrollHandler = e => {
      const currScrollY = window.scrollY;
      if (currScrollY > prevScrollY.current) {
        headerRef.current.classList.add(classes.hideHeaderContainer);
      } else {
        headerRef.current.classList.remove(classes.hideHeaderContainer);
      }
      prevScrollY.current = currScrollY;
    };

    window.addEventListener('scroll', scrollHandler);

    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  return (
    <header className={classes.headerContainer} ref={headerRef}>
      <Logo />
      <HamBurgerMenu />
      <ThemeButton />
    </header>
  );
}

export default Header;
