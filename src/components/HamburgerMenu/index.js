import React, {useEffect, useRef, useState} from 'react';
import dynamic from 'next/dynamic';

import classes from './styles.module.scss';
import useWindowSize from '@hooks/useWindowSize';
import AppText from '@components/AppText';

const Modal = dynamic(() => import('@components/Modal'), {ssr: false});

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
        <li>
          <a href="#">
            <AppText variant="span" small secondaryText>
              Home
            </AppText>
          </a>
        </li>
        <li>
          <a href="#">
            <AppText variant="span" small secondaryText>
              About
            </AppText>
          </a>
        </li>
        <li>
          <a href="#">
            <AppText variant="span" small secondaryText>
              Experience
            </AppText>
          </a>
        </li>
        <li>
          <a href="#">
            <AppText variant="span" small secondaryText>
              Projects
            </AppText>
          </a>
        </li>
        <li>
          <a href="#">
            <AppText variant="span" small secondaryText>
              Blogs
            </AppText>
          </a>
        </li>
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
            <li>
              <a href="#">
                <AppText variant="span" small secondaryText>
                  Home
                </AppText>
              </a>
            </li>
            <li>
              <a href="#headerSection">
                <AppText variant="span" small secondaryText>
                  About
                </AppText>
              </a>
            </li>
            <li>
              <a href="#testSection">
                <AppText variant="span" small secondaryText>
                  Experience
                </AppText>
              </a>
            </li>
            <li>
              <a href="#">
                <AppText variant="span" small secondaryText>
                  Projects
                </AppText>
              </a>
            </li>
            <li>
              <a href="#">
                <AppText variant="span" small secondaryText>
                  Blogs
                </AppText>
              </a>
            </li>
          </ul>
        </nav>
      </Modal>
    </nav>
  );
}

export default HamBurgerMenu;
