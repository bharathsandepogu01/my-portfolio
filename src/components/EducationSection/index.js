import React, {useEffect, useRef} from 'react';
import Image from 'next/image';
import AppSection from '@components/AppSection';
import AppText from '@components/AppText';
import classes from './styles.module.scss';

const educations = [
  {
    id: 'bTech',
    date: 'Aug 2017 - May 2021',
    course: 'Bachelor of Technology in Computer Science',
    name: 'Indian Institute of Information Technology Sri City',
    logoURL: '/images/iiit-logo.png',
    url: 'https://www.iiits.ac.in/',
  },
];

function EducationSection() {
  const educationRefs = useRef({});
  const observerRefs = useRef({});

  useEffect(() => {
    educations.forEach(education => {
      const educationRef = educationRefs.current[education.id];
      const obsOptions = {root: null, threshold: 0};
      const obsCallback = function (entries, object) {
        const [entry] = entries;
        if (entry.isIntersecting) {
          educationRef.classList.add(classes.showEducationCard);
        } else {
          educationRef.classList.remove(classes.showEducationCard);
        }
      };
      const observer = new IntersectionObserver(obsCallback, obsOptions);
      observer.observe(educationRef);
      observerRefs.current[education.id] = observer;
    });
    return () => {
      educations.forEach(education => {
        observerRefs.current[education.id].disconnect();
      });
    };
  }, []);

  return (
    <AppSection headerTxt={'EDUCATION'}>
      <div className={classes.educationMainContainer}>
        {educations.map(education => {
          return (
            <a
              href={education.url}
              className={classes.educationCard}
              key={education.id}
              target={'_blank'}
              ref={el => (educationRefs.current[education.id] = el)}>
              <div className={classes.logoContainer}>
                <Image
                  alt={education.name}
                  src={education.logoURL}
                  height={75}
                  width={75}
                  loading={'lazy'}
                  className={classes.logo}
                />
              </div>
              <div className={classes.contentContainer}>
                <AppText variant="h3" semiBold>
                  {education.name}
                </AppText>
                <AppText variant="p" small>
                  {education.course}
                </AppText>
                <AppText variant="p" extraSmall secondaryText>
                  {education.date}
                </AppText>
              </div>
            </a>
          );
        })}
      </div>
    </AppSection>
  );
}

export default EducationSection;
