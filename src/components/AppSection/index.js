import React, {useEffect, useRef} from 'react';
import classes from './styles.module.scss';
import AppText from '@components/AppText';

function AppSection(props) {
  const sectionLineRef = useRef();

  useEffect(() => {}, []);

  return (
    <section className={classes.sectionContainer}>
      {props.headerTxt && (
        <>
          <AppText
            variant="h2"
            large
            light
            customClassName={classes.sectionHeader}>
            {props.headerTxt}
          </AppText>
          <div className={classes.sectionLine} ref={sectionLineRef}></div>
        </>
      )}
      {props.children}
    </section>
  );
}

export default AppSection;
