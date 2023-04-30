import React, {useEffect, useRef} from 'react';
import Image from 'next/image';
import AppText from '@components/AppText';
import AppButton from '@components/AppButton';
import ContactLogos from '@components/ContactLogos';
import {CONTACT_SECTION, HOME_SECTION} from '@constants/sections';
import classes from './styles.module.scss';

function HeaderSection() {
  const contentRef = useRef();
  const imageRef = useRef();

  useEffect(() => {
    if (!contentRef.current) return;
    contentRef.current.classList.add(classes.showContentContainer);
  }, []);

  const handleImageLoadingComplete = img => {
    imageRef.current.classList.add(classes.showImageContainer);
  };

  return (
    <section
      className={classes.headerSectionContainer}
      id={HOME_SECTION}
      aria-label={HOME_SECTION}>
      <div className={classes.contentContainer} ref={contentRef}>
        <AppText variant="p" extraMedium semiBold>
          Hello, I am
        </AppText>
        <AppText variant="h1" extraLarge primaryColor bold>
          Bharath Sandepogu
        </AppText>
        <AppText variant="p" secondaryText medium>
          As a passionate Full Stack Software Developer, I've honed my skills in
          building Web and Mobile applications using JavaScript, ReactJS,
          NodeJS, React Native, and a host of other cool libraries and
          frameworks.
        </AppText>
        <AppText variant="p" secondaryText medium>
          Always a JavaScript Enthusiast...🤩
        </AppText>
        <div className={classes.contactLogos}>
          <ContactLogos />
        </div>
        <div className={classes.btnContainer}>
          {/* TODO remove button inside anchor tag */}
          <a
            href={`#${CONTACT_SECTION}`}
            aria-label={'click to go to contact section'}>
            <AppButton btnText="Contact Me" primary aria-hidden />
          </a>
          <AppButton
            btnText="See My Resume"
            secondary
            onClick={() =>
              window.open(
                'https://drive.google.com/file/d/1b3qoReqsvd0VnZfVF4WTEMZbg7kuJkEo/view?usp=sharing',
                '_blank',
              )
            }
            ariaLabel={`click to see Bharath Sandepogu's Resume`}
          />
        </div>
      </div>
      <div className={classes.imageContainer} ref={imageRef}>
        <div className={classes.imageWrapper}>
          <Image
            alt="Bharath Sandepogu's Avatar Image"
            src={'/images/avatar.png'}
            fill
            loading={'lazy'}
            onLoadingComplete={handleImageLoadingComplete}
          />
        </div>
      </div>
    </section>
  );
}

export default HeaderSection;
