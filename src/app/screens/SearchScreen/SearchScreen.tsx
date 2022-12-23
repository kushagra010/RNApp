import React, { FunctionComponent } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const SeacrchScreen: FunctionComponent = () => {
  return (
    <View style={styles.viewContainer}>
      <Text>This is Search Screen Page</Text>
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

export default SeacrchScreen;
