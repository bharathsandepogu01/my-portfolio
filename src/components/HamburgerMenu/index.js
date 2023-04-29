import React, {useEffect, useRef, useState} from 'react';
import dynamic from 'next/dynamic';
import useWindowSize from '@hooks/useWindowSize';
import AppText from '@components/AppText';
import {
  BLOGS_SECTION,
  CONTACT_SECTION,
  EXPERIENCE_SECTION,
  HOME_SECTION,
  PROJECTS_SECTION,
  SKILLS_SECTION,
} from '@constants/sections';
import classes from './styles.module.scss';

const Modal = dynamic(() => import('@components/AppModal'), {ssr: false});

const appLinks = [
  HOME_SECTION,
  EXPERIENCE_SECTION,
  SKILLS_SECTION,
  PROJECTS_SECTION,
  BLOGS_SECTION,
  CONTACT_SECTION,
];

function HamBurgerMenu() {
  const [expandMenu, setExpandMenu] = useState(false);
  const backgroundRef = useRef();
  const hamburgerRef = useRef();
  const linkContainerRef = useRef();
  const mobileMenuLinks = useRef();

  const {isMobileMenuScreen} = useWindowSize();

  useEffect(() => {
    if (!isMobileMenuScreen) {
      if (!expandMenu) {
        hamburgerRef.current.classList.remove(classes.hamBurgerActive);
        linkContainerRef.current.classList.remove(classes.displayLinks);
        backgroundRef.current.classList.remove(classes.expandBackground);
      } else {
        hamburgerRef.current.classList.add(classes.hamBurgerActive);
        backgroundRef.current.classList.add(classes.expandBackground);
        linkContainerRef.current.classList.add(classes.displayLinks);
      }
    } else {
      hamburgerRef.current.classList.remove(classes.hamBurgerActive);
      linkContainerRef.current.classList.remove(classes.displayLinks);
      backgroundRef.current.classList.remove(classes.expandBackground);
    }
  }, [expandMenu, isMobileMenuScreen]);

  const onOpenModal = () => {
    if (!mobileMenuLinks.current) return;
    mobileMenuLinks.current.classList.remove(classes.displayLinks);
    mobileMenuLinks.current.classList.add(classes.displayMobileLinks);
  };

  const onCloseModal = () => {
    if (!mobileMenuLinks.current) return;
    mobileMenuLinks.current.classList.remove(classes.displayMobileLinks);
  };

  const handleOnClickMenu = () => {
    setExpandMenu(!expandMenu);
  };

  return (
    <nav className={classes.menuContainer}>
      <ul
        className={classes.linksContainer}
        ref={linkContainerRef}
        aria-label={'links'}>
        {appLinks.map(appLink => {
          return (
            <li key={appLink}>
              <a href={`#${appLink}`}>
                <AppText variant="span" small secondaryText semiBold>
                  {appLink}
                </AppText>
              </a>
            </li>
          );
        })}
      </ul>
      <button
        className={classes.hamburger}
        ref={hamburgerRef}
        onClick={handleOnClickMenu}
        aria-label={`${expandMenu ? 'close menu' : 'open menu'}`}>
        <span />
      </button>
      <span
        className={classes.expandableBackground}
        ref={backgroundRef}
        aria-hidden
      />
      <Modal
        showModal={expandMenu && isMobileMenuScreen}
        onCloseModal={onCloseModal}
        onOpenModal={onOpenModal}>
        <nav className={classes.mobileMenuContainer}>
          <button
            className={classes.cancelIcon}
            aria-label="close menu"
            onClick={handleOnClickMenu}>
            <span aria-hidden />
          </button>
          <ul
            className={classes.mobileLinksContainer}
            aria-label={'links'}
            ref={mobileMenuLinks}>
            {appLinks.map(appLink => {
              return (
                <li key={appLink}>
                  <a href={`#${appLink}`} onClick={() => setExpandMenu(false)}>
                    <AppText variant="span" small secondaryText semiBold>
                      {appLink}
                    </AppText>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </Modal>
    </nav>
  );
}

export default HamBurgerMenu;
