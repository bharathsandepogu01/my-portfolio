import React, {createContext, useEffect, useMemo, useState} from 'react';
import {DARK_THEME, LIGHT_THEME} from '@constants/appTheme';
import {getLocalStorage} from '@utils/localStorage';
import {USER_APP_THEME_PREFERENCE} from '@constants/localStorage';

export const AppThemeContext = createContext({
  appTheme: DARK_THEME,
  setAppTheme: () => {},
});

function AppThemeProvider(props) {
  const [appTheme, setAppTheme] = useState(DARK_THEME);

  useEffect(() => {
    const userPreferredTheme = getLocalStorage(USER_APP_THEME_PREFERENCE);

    if (userPreferredTheme === 'dark' || userPreferredTheme === 'light') {
      setAppTheme(userPreferredTheme);
    }
  }, []);

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
