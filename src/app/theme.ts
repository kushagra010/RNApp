import { DefaultTheme, DarkTheme, Theme } from '@react-navigation/native';

export const lightTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    common: {
      black: '#000000',
      white: '#ffffff',
      transparent: 'transparent',
      error: '#E02401',
      success: '#21BF73',
      info: '#7DE5ED',
      warning: '#FF8C32',
    },
    primary: '#354259',
    background: '#C2DED1',
    text: '#CDC2AE',
    secondary: '#ECE5C7',
  },
  shape: {
    borderRadius: 10,
  },
};

export const darkTheme: Theme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    common: {
      black: '#000000',
      white: '#ffffff',
      transparent: 'transparent',
      error: '#E02401',
      success: '#21BF73',
      info: '#7DE5ED',
      warning: '#FF8C32',
    },
    primary: '#395B64',
    background: '#2C3333',
    text: '#E7F6F2',
    secondary: '#A5C9CA',
  },
  shape: {
    borderRadius: 10,
  },
};
