import React, { FunctionComponent, useContext } from 'react';
import { Button, StyleSheet, Text, View, Switch } from 'react-native';
import { GlobalContext } from '@app/GlobalContext';

const ProfileScreen: FunctionComponent<any> = ({ navigation }) => {
  const { toggleTheme, isDarkTheme } = useContext(GlobalContext);

  return (
    <View style={styles.viewContainer}>
      <Text>This is Profile Screen Page</Text>
      <Button
        title='Go to list'
        onPress={() => navigation.navigate('ListScreen')}
      />
      {/* TODO: Move to drawer navigation */}
      <Switch onValueChange={toggleTheme} value={isDarkTheme} />
    </View>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProfileScreen;
