import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StackConfigType, StackNavigationProps } from './StackNavigation.type';

const Stack = createNativeStackNavigator();

const StackNavigation: React.FunctionComponent<StackNavigationProps> = (
  props,
) => {
  const { stackConfig } = props;

  return (
    <Stack.Navigator>
      {stackConfig.map((stack: StackConfigType) => (
        <Stack.Screen key={stack.id} {...stack} />
      ))}
    </Stack.Navigator>
  );
};

export default StackNavigation;
