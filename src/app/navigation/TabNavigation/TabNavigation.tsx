import React, { FunctionComponent } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import { TABS as TabConfigs } from './TabNavigationConfigs';

const Tab = createBottomTabNavigator();

const TabNavigator: FunctionComponent = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='Profile'>
        {TabConfigs.map((tabs) => (
          <Tab.Screen key={tabs.id} {...tabs} />
        ))}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigator;
