## React Native Base Template

### Steps to create .env file

- Copy the content from .env.template

- To run the storybook, the LOAD_STORYBOOK env should be `true` or set to `false` to run the mobile app.

### Steps to run storybook
- Run React Native Storybook Developer Server
```
yarn run storybook
```
- Run Storybook on iOS simulator
```
yarn run ios
```
- Run Storybook on Android emulator
```
yarn run android
```
- Load sidebar of the storybook  
```
Refresh storybook page in the browser or Reload your app in debug mode
```

**_NOTE:_**  We don't have to add the path of each story manually in Storybook. Running the command `yarn run storybook` will first run the `react-native-storybook-loader` script and add the path of all the files matching the pattern `*.stories.js` inside .`/src/app/components` to `./storybook/storyloader.js` and load them into Storybook.
