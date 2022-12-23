import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { Icon } from '.';
import { icons } from './Icon.types';
import { CenterView } from '../CenterView';

const styles = StyleSheet.create({
  container: {
    width: '80%',
    padding: 10,
  },
  heading: {
    fontSize: 20,
  },
  listItem: {
    padding: 5,
    height: 60,
    borderWidth: 1,
    borderStyle: 'solid',
    margin: 10,
    display: 'flex',
    flexDirection: 'row',
  },
});

storiesOf('Icon', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Examples of IcoMoon icons', () => (
    <>
      <Text style={styles.heading}>IcoMoon Icons</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        style={styles.container}
        data={icons}
        renderItem={({ item: name }) => (
          <View style={styles.listItem}>
            <Icon name={name} size={40} color='#C47AFF' />
            <Text> {name}</Text>
          </View>
        )}
      />
    </>
  ));
