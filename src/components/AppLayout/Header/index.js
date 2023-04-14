import React from 'react';
import Logo from '@components/Logo';
import classes from './styles.module.scss';
import ThemeButton from '@components/ThemeButton';

function Header() {
  return (
    <header className={classes.headerContainer}>
      <Logo />
      <ThemeButton />
    </header>
  );
}

export default Header;
