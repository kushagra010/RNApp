module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          // This needs to be mirrored in tsconfig.json
          '@app': './src/app',
          '@components': './src/app/components',
          '@constants': './src/app/constants',
          '@hooks': './src/app/hooks',
          '@navigation': './src/app/navigation',
          '@screens': './src/app/screens',
          '@shared': './src/app/shared',
          '@utils': './src/app/utils',
          '@api': './src/app/api',
        },
      }
    ],[
      'module:react-native-dotenv',
      {
        envName: 'APP_ENV',
        moduleName: '@env',
        path: '.env',
      },
    ],
  ],
};
