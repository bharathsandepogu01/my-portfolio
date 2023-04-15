import React, {useEffect, useRef, useState} from 'react';

import classes from './styles.module.scss';

function HamBurgerMenu() {
  const [expandMenu, setExpandMenu] = useState(false);
  const backgroundRef = useRef();
  const hamburgerRef = useRef();
  const linkContainerRef = useRef();

  useEffect(() => {
    if (!expandMenu) {
      hamburgerRef.current.classList.remove(classes.hamBurgerActive);
      linkContainerRef.current.classList.remove(classes.displayLinks);
      backgroundRef.current.classList.remove(classes.expandBackground);
    } else {
      hamburgerRef.current.classList.add(classes.hamBurgerActive);
      backgroundRef.current.classList.add(classes.expandBackground);
      linkContainerRef.current.classList.add(classes.displayLinks);
    }
  }, [expandMenu]);

  const handleOnClickMenu = () => {
    setExpandMenu(!expandMenu);
  };
  return (
    <div className={classes.menuContainer}>
      <ul className={classes.linksContainer} ref={linkContainerRef}>
        <li>Home</li>
        <li>About</li>
        <li>Experience</li>
        <li>Projects</li>
        <li>Blogs</li>
      </ul>
      <button
        className={classes.hamburger}
        ref={hamburgerRef}
        onClick={handleOnClickMenu}>
        <span />
      </button>
      <span className={classes.expandableBackground} ref={backgroundRef} />
    </div>
  );
}

export default HamBurgerMenu;
