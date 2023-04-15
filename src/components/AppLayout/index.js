import React from 'react';
import clsx from 'clsx';
import {Rubik} from 'next/font/google';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import classes from './styles.module.scss';

const rubik = Rubik({
  weight: ['300', '500', '600'],
  style: ['normal'],
  subsets: ['latin'],
});

function AppLayout() {
  return (
    <div className={clsx(rubik.className, classes.appLayoutContainer)}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default AppLayout;
