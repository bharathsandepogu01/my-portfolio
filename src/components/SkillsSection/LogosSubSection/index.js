import React from 'react';
import AppText from '@components/AppText';
import classes from './styles.module.scss';

function LogoSubSection({skills}) {
  return (
    <div className={classes.logosMainContainer}>
      {skills.map(skill => {
        const {logo: Logo} = skill;
        return (
          <a
            href={skill.url}
            target={'_blank'}
            className={classes.logoContainer}
            key={skill.id}>
            <Logo className={classes.logo} />
            <AppText variant="p" small secondaryText>
              {skill.name}
            </AppText>
          </a>
        );
      })}
    </div>
  );
}

export default LogoSubSection;
