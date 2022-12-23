/* eslint-disable no-console */
import React, { FunctionComponent, useEffect } from 'react';
import { Button, StyleSheet, Text, View, FlatList } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { useTodosQuery } from '@api/.';
import { styleConstants } from '@constants/.';

const { regular, bold } = styleConstants;

const ExploreScreen: FunctionComponent<{
  navigation: NavigationProp<any, any>;
}> = ({ navigation }) => {
  const { isLoading, data } = useTodosQuery();

  useEffect(() => {
    if (data) console.log(data, 'DATA');
  }, [data]);

  return isLoading ? (
    <Text>LOADING...</Text>
  ) : (
    <View style={styles.viewContainer}>
      {/* this goes into ListScreen */}
      <FlatList
        data={data}
        renderItem={({ item: { title } }) => (
          <View style={styles.todo}>
            <Text>{title}</Text>
          </View>
        )}
      />
      <Text style={styles.textRegular}>
        This is Explore Screen Page with Regular Quicksand Font
      </Text>
      <Text style={styles.textBold}>
        This is Explore Screen Page with Regular Quicksand Font
      </Text>
      <Button
        title='Go to list'
        onPress={() => navigation.navigate('ListScreen')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  todo: {
    marginHorizontal: 50,
    marginVertical: 20,
    padding: 30,
    borderRadius: 5,
    backgroundColor: '#B2B2B2',
  },
  viewContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF8EA',
  },
  textRegular: {
    fontFamily: regular,
    textAlign: 'center',
  },
  textBold: {
    fontFamily: bold,
    textAlign: 'center',
  },
});

export default ExploreScreen;
