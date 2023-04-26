import React, {useEffect, useRef} from 'react';
import Image from 'next/image';
import AppText from '@components/AppText';
import AppButton from '@components/AppButton';
import ContactLogos from '@components/ContactLogos';
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
    <section className={classes.headerSectionContainer} id={'headerSection'}>
      <div className={classes.contentContainer} ref={contentRef}>
        <AppText variant="p" large>
          Hello, I am
        </AppText>
        <AppText variant="h1" extraLarge primaryColor bold>
          Bharath Sandepogu
        </AppText>
        <AppText variant="p" light>
          A passionate Full Stack Software Developer having an experience of
          building Web and Mobile applications with JavaScript / Reactjs /
          Nodejs / React Native and some other cool libraries and frameworks.
        </AppText>
        <div className={classes.contactLogos}>
          <ContactLogos />
        </div>
        <div className={classes.btnContainer}>
          <AppButton btnText="Contact Me" primary />
          <AppButton btnText="See My Resume" secondary />
        </div>
      </div>
      <div className={classes.imageContainer} ref={imageRef}>
        <div className={classes.imageWrapper}>
          <Image
            alt="Bharath Sandepogu's Avatar Image"
            src={'/images/avatar.png'}
            priority
            fill
            onLoadingComplete={handleImageLoadingComplete}
          />
        </div>
      </div>
    </section>
  );
}

export default HeaderSection;