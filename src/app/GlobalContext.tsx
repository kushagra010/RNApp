import React from 'react';

export const GlobalContext = React.createContext({
  toggleTheme: () => {},
  isDarkTheme: false,
});
