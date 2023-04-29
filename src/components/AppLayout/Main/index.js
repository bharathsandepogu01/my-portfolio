import React from 'react';
import HeaderSection from '@components/HeaderSection';
import ExperienceSection from '@components/ExperienceSection';
import ProjectsSection from '@components/ProjectsSection';
import SkillsSection from '@components/SkillsSection';
import EducationSection from '@components/EducationSection';
import classes from './styles.module.scss';

function Main() {
  return (
    <main className={classes.mainContainer}>
      <HeaderSection />
      <ExperienceSection />
      <SkillsSection />
      <EducationSection />
      <ProjectsSection />
    </main>
  );
}

export default Main;
