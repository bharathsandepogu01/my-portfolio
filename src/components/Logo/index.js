import React, {useRef} from 'react';
import classes from './styles.module.scss';

function Logo() {
  const borderRef = useRef();

  const handleOnMouseEnter = () => {
    borderRef.current.classList.remove(classes.rotateBorderReverse);
    borderRef.current.classList.add(classes.rotateBorder);
  };

  const handleOnMouseLeave = () => {
    borderRef.current.classList.remove(classes.rotateBorder);
    borderRef.current.classList.add(classes.rotateBorderReverse);
  };

  return (
    <div
      className={classes.logoContainer}
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}>
      <div className={classes.bordersContainer} ref={borderRef}>
        <div className={classes.borderOne}></div>
        <div className={classes.borderTwo}></div>
      </div>
      <div className={classes.contentContainer}>BS</div>
    </div>
  );
}

export default Logo;
