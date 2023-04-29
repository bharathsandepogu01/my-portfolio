import React, {useEffect, useRef} from 'react';
import classes from './styles.module.scss';
import AppText from '@components/AppText';

function AppSection(props) {
  const sectionLineRef = useRef();

  useEffect(() => {
    if (!props.headerTxt) return;
    const obsCallBack = function (entries, observer) {
      const [entry] = entries;
      if (!sectionLineRef.current) return;
      if (entry.isIntersecting) {
        sectionLineRef.current.classList.add(classes.expandSectionLine);
      } else {
        sectionLineRef.current.classList.remove(classes.expandSectionLine);
      }
    };
    const obsOptions = {
      root: null,
      threshold: 0,
    };
    const observer = new IntersectionObserver(obsCallBack, obsOptions);
    observer.observe(sectionLineRef.current);

    return () => {
      observer.disconnect();
    };
  }, [props.headerTxt]);

  return (
    <section className={classes.sectionContainer} id={props.headerTxt}>
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
