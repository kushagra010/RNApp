import React, { FunctionComponent } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ListScreen: FunctionComponent = () => {
  return (
    <View style={styles.viewContainer}>
      <Text>This is List Screen Page</Text>
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

export default ListScreen;
