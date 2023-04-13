import React, {useContext} from 'react';
import clsx from 'clsx';
import {Rubik} from 'next/font/google';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import classes from './styles.module.scss';
import {AppThemeContext} from '@components/AppThemeProvider';
import {DARK_THEME} from '@constants/appTheme';

const rubik = Rubik({
  weight: ['300', '500', '600'],
  style: ['normal'],
  subsets: ['latin'],
});

function AppLayout() {
  const {appTheme} = useContext(AppThemeContext);
  const isDarkTheme = appTheme === DARK_THEME;
  return (
    <div
      className={clsx(
        rubik.className,
        isDarkTheme && classes.darkTheme,
        !isDarkTheme && classes.lightTheme,
        classes.appLayoutContainer,
      )}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default AppLayout;
