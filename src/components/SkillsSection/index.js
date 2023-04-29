import React, {useEffect, useRef} from 'react';
import AppSection from '@components/AppSection';
import AppText from '@components/AppText';
import {SKILLS_SECTION} from '@constants/sections';
import JavascriptLogo from '@public/icons/javascript-logo.svg';
import PythonLogo from '@public/icons/python-logo.svg';
import TypescriptLogo from '@public/icons/typescript-logo.svg';
import NodeJSLogo from '@public/icons/nodejs-logo.svg';
import ExpressJSLogo from '@public/icons/express-logo.svg';
import MongoDBLogo from '@public/icons/mongo-logo.svg';
import PostgresSQLLogo from '@public/icons/postgresql-logo.svg';
import GitLogo from '@public/icons/git-logo.svg';
import DockerLogo from '@public/icons/docker-logo.svg';
import HTMLLogo from '@public/icons/html-5-logo.svg';
import CSSLogo from '@public/icons/css-3-logo.svg';
import SASSLogo from '@public/icons/sass-logo.svg';
import ReactLogo from '@public/icons/react-logo.svg';
import NextJSLogo from '@public/icons/nextjs-logo.svg';
import GatsbyLogo from '@public/icons/gatsby-logo.svg';
import ReduxLogo from '@public/icons/redux-logo.svg';
import GraphQLLogo from '@public/icons/graphql-logo.svg';
import ApolloClientLogo from '@public/icons/apollo-client-logo.svg';
import MaterialUILogo from '@public/icons/material-logo.svg';
import AntDLogo from '@public/icons/ant-design-logo.svg';
import LogoSubSection from './LogosSubSection';
import classes from './styles.module.scss';

const programmingSkills = [
  {
    id: 'javascript',
    logo: JavascriptLogo,
    name: 'JavaScript',
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    id: 'typescript',
    logo: TypescriptLogo,
    name: 'TypeScript',
    url: 'https://www.typescriptlang.org/docs/',
  },
  {
    id: 'python',
    logo: PythonLogo,
    name: 'Python',
    url: 'https://www.python.org/doc/',
  },
];

const frontendSkills = [
  {
    id: 'html',
    logo: HTMLLogo,
    name: 'HTML',
    url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
  },
  {
    id: 'css',
    logo: CSSLogo,
    name: 'CSS',
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
  },
  {
    id: 'sass',
    logo: SASSLogo,
    name: 'SASS',
    url: 'https://sass-lang.com/documentation/',
  },
  {
    id: 'reactJS',
    logo: ReactLogo,
    name: 'ReactJS',
    url: 'https://reactjs.org/',
  },
  {id: 'nextJS', logo: NextJSLogo, name: 'NextJS', url: 'https://nextjs.org/'},
  {
    id: 'gatsby',
    logo: GatsbyLogo,
    name: 'Gatsby',
    url: 'https://www.gatsbyjs.com/',
  },
  {
    id: 'reactNative',
    logo: ReactLogo,
    name: 'React Native',
    url: 'https://reactnative.dev/',
  },
  {id: 'redux', logo: ReduxLogo, name: 'Redux', url: 'https://redux.js.org/'},
  {
    id: 'graphQL',
    logo: GraphQLLogo,
    name: 'GraphQL',
    url: 'https://graphql.org/',
  },
  {
    id: 'apolloClient',
    logo: ApolloClientLogo,
    name: 'Apollo Client',
    url: 'https://www.apollographql.com/docs',
  },
  {
    id: 'materialUI',
    logo: MaterialUILogo,
    name: 'Material UI',
    url: 'https://mui.com/',
  },
  {id: 'antD', logo: AntDLogo, name: 'Ant Design', url: 'https://ant.design/'},
];

const backendSkills = [
  {
    id: 'node',
    logo: NodeJSLogo,
    name: 'NodeJS',
    url: 'https://nodejs.org/en/docs/',
  },
  {
    id: 'express',
    logo: ExpressJSLogo,
    name: 'ExpressJS',
    url: 'https://expressjs.com/en/api.html',
  },
  {
    id: 'mongoDB',
    logo: MongoDBLogo,
    name: 'MongoDB',
    url: 'https://docs.mongodb.com/',
  },
  {
    id: 'postgresSQL',
    logo: PostgresSQLLogo,
    name: 'PostgresSQL',
    url: 'https://www.postgresql.org/docs/',
  },
];

const cloudSkills = [
  {id: 'git', logo: GitLogo, name: 'Git', url: 'https://git-scm.com/doc'},
  {
    id: 'docker',
    logo: DockerLogo,
    name: 'Docker',
    url: 'https://docs.docker.com/',
  },
];

const allSkills = [
  {
    id: 'programmingSkills',
    skills: programmingSkills,
    header: 'Programming Languages',
  },
  {
    id: 'backendSkills',
    skills: backendSkills,
    header: 'Backend',
  },
  {
    id: 'cloudSkills',
    skills: cloudSkills,
    header: 'CI/CD',
  },
  {
    id: 'frontendSkills',
    skills: frontendSkills,
    header: 'Frontend',
  },
];

function SkillsSection() {
  const skillsRef = useRef({
    programmingRef: null,
    backendRef: null,
    cloudRef: null,
    frontendRef: null,
  });

  const observerRefs = useRef({});

  useEffect(() => {
    Object.keys(skillsRef.current).forEach(skill => {
      const skillRef = skillsRef.current[skill];
      const obsOptions = {root: null, threshold: 0};
      const obsCallback = function (entries, object) {
        const [entry] = entries;
        if (entry.isIntersecting) {
          skillRef.classList.add(classes.showSkillsSubSection);
        } else {
          skillRef.classList.remove(classes.showSkillsSubSection);
        }
      };

      const observer = new IntersectionObserver(obsCallback, obsOptions);
      observer.observe(skillRef);
      observerRefs.current[skill] = observer;
    });

    return () => {
      Object.keys(skillsRef.current).forEach(skill => {
        observerRefs.current[skill].disconnect();
      });
    };
  }, []);

  return (
    <AppSection headerTxt={SKILLS_SECTION}>
      <div className={classes.skillsMainContainer}>
        <div>
          <div
            className={classes.skillsSubSection}
            ref={el => (skillsRef.current.programmingRef = el)}>
            <AppText variant={'h3'} semiBold>
              Programming Languages
            </AppText>
            <LogoSubSection skills={programmingSkills} />
          </div>
          <div
            className={classes.skillsSubSection}
            ref={el => (skillsRef.current.backendRef = el)}>
            <AppText variant={'h3'} semiBold>
              Backend
            </AppText>
            <LogoSubSection skills={backendSkills} />
          </div>
          <div
            className={classes.skillsSubSection}
            ref={el => (skillsRef.current.cloudRef = el)}>
            <AppText variant={'h3'} semiBold>
              CI/CD
            </AppText>
            <LogoSubSection skills={cloudSkills} />
          </div>
        </div>
        <div>
          <div
            className={classes.skillsSubSection}
            ref={el => (skillsRef.current.frontendRef = el)}>
            <AppText variant={'h3'} semiBold>
              Frontend
            </AppText>
            <LogoSubSection skills={frontendSkills} />
          </div>
        </div>
      </div>
    </AppSection>
  );
}

export default SkillsSection;
