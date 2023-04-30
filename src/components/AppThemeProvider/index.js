import React, {createContext, useEffect, useMemo, useState} from 'react';
import {DARK_THEME, LIGHT_THEME} from '@constants/appTheme';
import {getLocalStorage} from '@utils/localStorage';
import {USER_APP_THEME_PREFERENCE} from '@constants/localStorage';
import classes from './styles.module.scss';

export const AppThemeContext = createContext({
  appTheme: LIGHT_THEME,
  setAppTheme: () => {},
});

function AppThemeProvider(props) {
  const [appTheme, setAppTheme] = useState(LIGHT_THEME);

  useEffect(() => {
    const userPreferredTheme = getLocalStorage(USER_APP_THEME_PREFERENCE);

    if (userPreferredTheme === 'dark' || userPreferredTheme === 'light') {
      setAppTheme(userPreferredTheme);
    }
  }, []);

  useEffect(() => {
    if (appTheme === DARK_THEME) {
      document.documentElement.classList.remove(classes.lightTheme);
      document.documentElement.classList.add(classes.darkTheme);
      return;
    }
    document.documentElement.classList.remove(classes.darkTheme);
    document.documentElement.classList.add(classes.lightTheme);
    return;
  }, [appTheme]);

  const value = useMemo(
    () => ({
      appTheme,
      setAppTheme,
    }),
    [appTheme],
  );

  return (
    <AppThemeContext.Provider value={value}>
      {props.children}
    </AppThemeContext.Provider>
  );
}

export default AppThemeProvider;
