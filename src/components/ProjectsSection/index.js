import React, {useRef, useEffect, useMemo, useState} from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import AppSection from '@components/AppSection';
import AppText from '@components/AppText';
import AppButton from '@components/AppButton';
import GithubIcon from '@public/icons/github-icon.svg';
import APKFileIcon from '@public/icons/apk-file-icon.svg';
import WebIcon from '@public/icons/web-icon.svg';
import FolderIcon from '@public/icons/folder-icon.svg';
import classes from './styles.module.scss';

const mainProjects = [
  {
    id: 'papier',
    name: 'Papier',
    description: `Papier is an elegantly designed wallpaper application with user-friendly search functionality and categorized wallpapers, providing an easy way for users to find their preferred wallpapers.`,
    techStack: ['React Native', 'TypeScript', 'Apollo Client', 'GraphQL'],
    imgURL: '/images/papier-project.png',
    githubLink: `https://github.com/bharathsandepogu01/Papier`,
    bgColor: '#df1f5ad9',
    isWebApp: false,
    isInProgress: true,
  },
  {
    id: 'carger',
    name: 'Carger',
    description: `A web application and mobile application(customer specific) for Automated Fuel Stations and for customers to buy fuel digitally in advance and refuel by entering the OTP at the station before it expires.`,
    techStack: [
      'React',
      'Node',
      'Express',
      'MongoDB',
      'React Native',
      'TypeScript',
      'Redux',
      'Paypal payment gateway',
    ],
    imgURL: '/images/carger-project.png',
    githubLink: `https://github.com/bharathsandepogu01/Carger`,
    apkLink: `https://drive.google.com/file/d/1-Qa00wa0gYcraCll-XXKcqhgEKLAj21D/view?usp=share_link`,
    bgColor: '#1F4E5F',
    isWebApp: false,
    isInProgress: false,
  },
  {
    id: 'analytics-table-ui',
    name: 'Analytics Table UI',
    description: `Web application which shows Analytics Data in a Table. Users can select a date range, change the order of table columns, apply filters, and share the filtered data and column order via URL`,
    techStack: ['React', 'Typescript', 'Redux', 'Lodash'],
    imgURL: '/images/analytics-project.png',
    githubLink: `https://github.com/bharathsandepogu01/Analytics-Table-Data-UI`,
    demoLink: `https://wpbkm.csb.app/`,
    bgColor: '#136fed',
    isWebApp: true,
    isInProgress: false,
  },
  {
    id: 'drive-ui',
    name: 'Drive UI',
    description: `Simple Drive UI web application with skeleton loader, nested folders and breadcrumbs. Users can search, create, update, duplicate and delete folders and files.`,
    techStack: ['React', 'Typescript', 'Redux', 'Lodash'],
    imgURL: '/images/drive-project.png',
    githubLink: `https://github.com/bharathsandepogu01/Drive-UI`,
    demoLink: `https://3fudh.csb.app/`,
    bgColor: '#008392',
    isWebApp: true,
    isInProgress: false,
  },
  {
    id: 'minesweeper',
    name: 'Minesweeper',
    description: `A simple web application for simplified minesweeper game with difficulty levels.`,
    techStack: ['React', 'Typescript', 'Redux', 'Lodash'],
    imgURL: '/images/minesweeper-project.png',
    githubLink: `https://github.com/bharathsandepogu01/Minesweeper`,
    demoLink: `https://5ngzp.csb.app/`,
    bgColor: 'rgb(126, 200, 80)',
    isWebApp: true,
    isInProgress: false,
  },
  {
    id: 'field-builder-ui',
    name: 'Field Builder UI',
    description: `Field Builder UI is a simple application to create fields with name and type, can be deleted and updated. And the created fields are displayed in nested format.`,
    techStack: ['NextJS', 'Typescript'],
    imgURL: '/images/field-builder-ui-project.png',
    githubLink: `https://github.com/bharathsandepogu01/field-builder-ui`,
    demoLink: `https://field-builder-ui-inky.vercel.app/`,
    bgColor: '#2f58cd',
    isWebApp: true,
    isInProgress: false,
  },
];

function ProjectsSection() {
  const projectRefs = useRef({});
  const projectObserverRefs = useRef({});
  const [showProjectsLength, setShowProjectsLength] = useState(3);

  const projects = useMemo(() => {
    return mainProjects.slice(0, showProjectsLength);
  }, [showProjectsLength]);

  useEffect(() => {
    projects.forEach(project => {
      const projectRef = projectRefs.current[project.id];

      const obsCallBack = function (entries, observer) {
        const [entry] = entries;

        if (!entry.isIntersecting) {
          projectRef.classList.remove(classes.showProjectContainer);
        } else {
          projectRef.classList.add(classes.showProjectContainer);
        }
      };
      const obsOptions = {
        root: null,
        threshold: 0,
      };
      const projectObserver = new IntersectionObserver(obsCallBack, obsOptions);
      projectObserver.observe(projectRef);
      projectObserverRefs.current[project.id] = projectObserver;
    });

    return () => {
      projects.forEach(project => {
        projectObserverRefs.current[project.id].disconnect();
      });
    };
  }, [projects]);

  const handleOnClickLoadMoreBtn = () => {
    if (showMore) {
      setShowProjectsLength(prevState => {
        prevState + 3;
      });
    } else {
      setShowProjectsLength(3);
    }
  };

  const showMore = projects.length < mainProjects.length;

  return (
    <AppSection headerTxt={'PROJECTS'}>
      <div className={classes.projectsListContainer}>
        {projects.map(project => {
          return (
            <div
              className={classes.projectContainer}
              key={project.id}
              ref={el => (projectRefs.current[project.id] = el)}>
              <div
                className={classes.projectImageContainer}
                style={{backgroundColor: `${project.bgColor}`}}>
                <div
                  className={clsx(
                    classes.imageWrapper,
                    !project.isWebApp && classes.imageWrapperMobile,
                  )}>
                  <Image alt={project.name} src={project.imgURL} fill />
                </div>
              </div>
              <div className={classes.projectContentContainer}>
                <div className={classes.linksHeader}>
                  <div className={classes.folderIconContainer}>
                    <FolderIcon className={classes.folderIcon} />
                  </div>
                  <div className={classes.linksContainer}>
                    {project.githubLink && (
                      <div className={classes.linkIconContainer}>
                        <a href={project.githubLink} target="_blank">
                          <GithubIcon className={classes.linkIcon} />
                        </a>
                      </div>
                    )}
                    {project.demoLink && (
                      <div className={classes.linkIconContainer}>
                        <a href={project.demoLink} target="_blank">
                          <WebIcon className={classes.linkIcon} />
                        </a>
                      </div>
                    )}
                    {project.apkLink && (
                      <div className={classes.linkIconContainer}>
                        <a href={project.apkLink} target="_blank">
                          <APKFileIcon className={classes.linkIcon} />
                        </a>
                      </div>
                    )}
                    {project.isInProgress && (
                      <AppText variant="span" extraSmall>
                        Coming Soon
                      </AppText>
                    )}
                  </div>
                </div>
                <AppText variant="h3" medium semiBold>
                  {project.name}
                </AppText>
                <AppText variant="p" small secondaryText>
                  {project.description}
                </AppText>
                <div className={classes.projectTechStack}>
                  {project.techStack.map(tech => {
                    return (
                      <AppText variant="p" extraSmall key={tech}>
                        {tech}
                      </AppText>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className={classes.loadMoreBtnWrapper}>
        <AppButton secondary onClick={handleOnClickLoadMoreBtn}>
          <span>{showMore ? 'Show More' : 'Show Less'}</span>
        </AppButton>
      </div>
    </AppSection>
  );
}

export default ProjectsSection;
