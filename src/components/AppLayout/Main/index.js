import React from 'react';
import HeaderSection from '@components/HeaderSection';
import classes from './styles.module.scss';

function Main() {
  return (
    <main className={classes.mainContainer}>
      <HeaderSection />
    </main>
  );
}

export default Main;
