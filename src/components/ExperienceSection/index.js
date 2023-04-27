import React, {useEffect, useRef} from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import AppSection from '@components/AppSection';
import AppText from '@components/AppText';
import RocketIcon from '@public/icons/rocket-icon.svg';
import TickIcon from '@public/icons/tick-icon.svg';
import classes from './styles.module.scss';

const experienceArr = [
  {
    id: 'startDevMission',
    content: null,
    icon: RocketIcon,
  },
  {
    id: 'innovaccer',
    icon: TickIcon,
    content: {
      header: 'SDE Intern',
      company: 'INNOVACCER',
      companyUrl: 'https://innovaccer.com/about',
      companyLogoUrl: '/images/innovaccer-logo.png',
      workingPeriod: 'May 2020 - July 2020',
      highlights: [
        `Worked with team on Django application which provides a platform for payers to process the patient eligibility, enrollment, claims in US healthcare system.`,
        `Dockerizing backend of the application and writing unit test cases for APIs.`,
        `Experience with Django REST framework.`,
      ],
    },
  },
  {
    id: 'perspectAI',
    icon: TickIcon,
    content: {
      header: 'ReactJS Developer Intern',
      company: 'PERSPECT AI',
      companyUrl: 'https://perspect.ai/our-story.html',
      companyLogoUrl: '/images/perspect-ai-logo.png',
      workingPeriod: 'Feb 2021 - June 2021',
      highlights: [
        `Worked on a HR portal, a platform for HRs to go through the applied candidate performances in assessments and assess them for a particular job role in their respective companies.`,
        `Hands-on experience with Typescript and Redux.`,
        `Adapt to fast paced work environment.`,
      ],
    },
  },
  {
    id: 'greedyGame',
    icon: TickIcon,
    content: {
      header: 'Frontend Developer',
      company: 'GREEDYGAME',
      companyUrl: 'https://greedygame.com/company/about',
      companyLogoUrl: '/images/greedygame-logo.png',
      workingPeriod: 'Sep 2021 - Jan 2023',
      highlights: [
        `Worked on Unified Dashboard of organisation products both Publishers and Admins. Developed using React, Redux, Recharts and using organisation custom UI library built using Material-UI and React with Typescript.`,
        `Developed an Agreement Sign-In feature that allows publishers to sign the generated agreements through Zoho Sign, which is integrated into the Unified Dashboard. Eliminating the need for manual paperwork process.`,
        `Developed and managed an Insights ROAS product for registered publisher apps in a unified dashboard by linking third-party sources, such as Google Analytics and Google AdMob. Collaborated with the backend team to establish a seamless data flow and integration process for a comprehensive view of ROAS performance.`,
        `Developed fast, performant, SEO-friendly and responsive static pages for the main website using Gatsby and later using Next.js.`,
        `Good understanding on SSR, SSG, CSR and Web performance optimizations.`,
      ],
    },
  },
];

function ExperienceSection() {
  const timeLineIconRefs = useRef({});
  const timeLineContentRefs = useRef({});
  const timeLineObserverRefs = useRef({});

  useEffect(() => {
    experienceArr.forEach(experience => {
      const timeLineIconRef = timeLineIconRefs.current[experience.id];
      const timeLineContentRef = timeLineContentRefs.current[experience.id];

      const obsCallBack = function (entries, observer) {
        const [entry] = entries;

        if (!entry.intersectionRatio && !entry.isIntersecting) {
          timeLineIconRef.classList.remove(classes.timeLineIconExpand);
          if (timeLineContentRef) {
            timeLineContentRef.classList.remove(classes.showTimeLineContent);
          }
        }

        if (entry.intersectionRatio > 0.2 && entry.isIntersecting) {
          timeLineIconRef.classList.add(classes.timeLineIconExpand);
          if (timeLineContentRef) {
            timeLineContentRef.classList.add(classes.showTimeLineContent);
          }
        }
      };
      const obsOptions = {
        root: null,
        threshold: [0, 0.2],
      };
      const timelineObserver = new IntersectionObserver(
        obsCallBack,
        obsOptions,
      );
      if (timeLineContentRef) {
        timelineObserver.observe(timeLineContentRef);
      } else {
        timelineObserver.observe(timeLineIconRef);
      }
      timeLineObserverRefs.current[experience.id] = timelineObserver;
    });

    return () => {
      experienceArr.forEach(experience => {
        timeLineObserverRefs.current[experience.id].disconnect();
      });
    };
  }, []);

  return (
    <AppSection headerTxt={'EXPERIENCE'}>
      <div className={classes.mainTimeLineContainer}>
        {experienceArr.map((experience, index) => {
          const {icon: Icon, content} = experience;
          return (
            <div className={classes.timeLine} key={experience.id}>
              <div
                className={classes.timeLineIcon}
                ref={el => (timeLineIconRefs.current[experience.id] = el)}>
                <Icon className={classes.icon} />
              </div>
              {content && (
                <div
                  className={clsx(
                    classes.timeLineContentLeft,
                    index % 2 === 0 && classes.timeLineContentRight,
                  )}
                  ref={el => (timeLineContentRefs.current[experience.id] = el)}>
                  <div className={classes.timeLineContentHeader}>
                    <div className={classes.timeLineContentImageContainer}>
                      <Image
                        alt={content.company}
                        src={content.companyLogoUrl}
                        fill
                      />
                    </div>
                    <div>
                      <AppText variant="h3" semiBold>
                        {content.header}
                      </AppText>
                      <a
                        href={content.companyUrl}
                        target="_blank"
                        className={classes.companyUrl}>
                        <AppText variant="span" secondaryText extraSmall>
                          {`@ ${content.company} | `}
                        </AppText>
                      </a>
                      <AppText variant="span" secondaryText extraSmall>
                        {`${content.workingPeriod}`}
                      </AppText>
                    </div>
                  </div>
                  <ul className={classes.highlightsList}>
                    {content.highlights.map((highlight, index) => {
                      return (
                        <li key={index}>
                          <AppText variant="p" small>
                            {highlight}
                          </AppText>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </AppSection>
  );
}

export default ExperienceSection;
