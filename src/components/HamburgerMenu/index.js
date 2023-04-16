import React, {useEffect, useRef, useState} from 'react';

import classes from './styles.module.scss';
import useWindowSize from '@hooks/useWindowSize';
import Modal from '@components/Modal';

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
      if (!expandMenu) {
        mobileMenuLinks.current.classList.remove(classes.displayMobileLinks);
      } else {
        mobileMenuLinks.current.classList.add(classes.displayMobileLinks);
      }
    }
  }, [expandMenu, isMobileMenuScreen]);

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
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Experience</a>
        </li>
        <li>
          <a href="#">Projects</a>
        </li>
        <li>
          <a href="#">Blogs</a>
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
      <Modal showModal={expandMenu && isMobileMenuScreen}>
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
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Experience</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Blogs</a>
            </li>
          </ul>
        </nav>
      </Modal>
    </nav>
  );
}

export default HamBurgerMenu;
