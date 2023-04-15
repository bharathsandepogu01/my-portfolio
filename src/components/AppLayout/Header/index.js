import React from 'react';
import Logo from '@components/Logo';
import HamBurgerMenu from '@components/HamburgerMenu';
import classes from './styles.module.scss';
import ThemeButton from '@components/ThemeButton';

function Header() {
  return (
    <header className={classes.headerContainer}>
      <Logo />
      <HamBurgerMenu />
      <ThemeButton />
    </header>
  );
}

export default Header;
