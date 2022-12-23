import React, {
  FunctionComponent,
  useCallback,
  useMemo,
  useState,
} from 'react';
import { useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { REACT_APP_LOAD_STORYBOOK } from '@env';

import { BottomNavigation } from '@navigation/.';
import { lightTheme, darkTheme } from '@app/theme';
import { GlobalContext } from '@app/GlobalContext';
import { store, persistor } from '@app/store';
import StorybookUI from '../storybook';

const App: FunctionComponent = () => {
  const scheme = useColorScheme();
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(
    scheme === 'dark' ? true : false,
  );

  const theme = isDarkTheme ? darkTheme : lightTheme;

  const toggleTheme = useCallback(
    () => setIsDarkTheme(!isDarkTheme),
    [isDarkTheme],
  );

  const contextValue = useMemo(
    () => ({
      toggleTheme,
      isDarkTheme,
    }),
    [toggleTheme, isDarkTheme],
  );

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GlobalContext.Provider value={contextValue}>
          <NavigationContainer theme={theme}>
            <BottomNavigation />
          </NavigationContainer>
        </GlobalContext.Provider>
      </PersistGate>
    </Provider>
  );
};

export default REACT_APP_LOAD_STORYBOOK === 'true' ? StorybookUI : App;
