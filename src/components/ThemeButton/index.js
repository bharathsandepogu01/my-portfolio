import React, {useContext, useEffect, useRef} from 'react';
import {AppThemeContext} from '@components/AppThemeProvider';
import {DARK_THEME, LIGHT_THEME} from '@constants/appTheme';
import LightThemeIcon from '@public/icons/light-theme-icon.svg';
import DarkThemeIcon from '@public/icons/dark-theme-icon.svg';
import classes from './styles.module.scss';
import {setLocalStorage} from '@utils/localStorage';
import {USER_APP_THEME_PREFERENCE} from '@constants/localStorage';

function ThemeButton() {
  const {appTheme, setAppTheme} = useContext(AppThemeContext);
  const isDarkTheme = appTheme === DARK_THEME;

  const darkThemeIconRef = useRef();
  const lightThemeIconRef = useRef();

  useEffect(() => {
    if (!isDarkTheme) {
      darkThemeIconRef.current.classList.remove(classes.showThemeIconContainer);
      lightThemeIconRef.current.classList.add(classes.showThemeIconContainer);
    } else {
      lightThemeIconRef.current.classList.remove(
        classes.showThemeIconContainer,
      );
      darkThemeIconRef.current.classList.add(classes.showThemeIconContainer);
    }
  }, [isDarkTheme]);

  const handleThemeChange = () => {
    const themeToSet = isDarkTheme ? LIGHT_THEME : DARK_THEME;
    setAppTheme(themeToSet);
    setLocalStorage(USER_APP_THEME_PREFERENCE, themeToSet);
  };

  return (
    <button
      className={classes.themeButtonContainer}
      onClick={handleThemeChange}
      aria-label={`click to change theme to ${
        isDarkTheme ? 'light theme' : 'dark theme'
      }`}>
      <div className={classes.darkThemeContainer} ref={darkThemeIconRef}>
        <DarkThemeIcon className={classes.themeIcon} />
      </div>
      <div className={classes.lightThemeContainer} ref={lightThemeIconRef}>
        <LightThemeIcon className={classes.themeIcon} />
      </div>
    </button>
  );
}

export default ThemeButton;
