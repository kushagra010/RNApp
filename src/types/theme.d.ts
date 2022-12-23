/**
 * Theme definitions to provide custom property in the default
 * theme provided by `React Navigation`
 */
import '@react-navigation/native';

declare module '@react-navigation/native' {
  interface Theme {
    dark: boolean;
    colors: {
      common: {
        black: string;
        white: string;
        transparent: string;
        error: string;
        success: string;
        info: string;
        warning: string;
      };
      primary: string;
      background: string;
      card: string;
      text: string;
      border: string;
      notification: string;
      secondary: string;
    };
    shape: {
      borderRadius: number;
    };
  }
}
