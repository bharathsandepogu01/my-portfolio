import React from 'react';
import HeaderSection from '@components/HeaderSection';
import ExperienceSection from '@components/ExperienceSection';
import ProjectsSection from '@components/ProjectsSection';
import classes from './styles.module.scss';

function Main() {
  return (
    <main className={classes.mainContainer}>
      <HeaderSection />
      <ProjectsSection />
      <ExperienceSection />
    </main>
  );
}

export default Main;
