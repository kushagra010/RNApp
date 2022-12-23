import React, { FunctionComponent } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { BottomNavigationConfig } from './BottomNavigation.config';
import {
  BottomNavigationConfigType,
  BottomNavigationTypes,
} from './BottomNavigation.type';
import StackNavigation from '@navigation/StackNavigation/StackNavigation';

const Tab = createBottomTabNavigator();

const BottomNavigation: FunctionComponent = () => {
  return (
    <Tab.Navigator initialRouteName={BottomNavigationTypes.PROFILE_TAB}>
      {BottomNavigationConfig.map((tabs: BottomNavigationConfigType) => (
        <Tab.Screen key={tabs.id} options={tabs.options} name={tabs.name}>
          {() => <StackNavigation stackConfig={tabs.stackConfig} />}
        </Tab.Screen>
      ))}
    </Tab.Navigator>
  );
};

export default BottomNavigation;
