import { StackNavigationConfig } from '@navigation/StackNavigation/StackNavigation.config';
import {
  BottomNavigationTypes,
  BottomNavigationConfigType,
} from './BottomNavigation.type';

export const BottomNavigationConfig: BottomNavigationConfigType[] = [
  {
    id: '1',
    options: { headerShown: false },
    name: BottomNavigationTypes.EXPLORE_TAB,
    stackConfig: StackNavigationConfig.ExploreStack,
  },
  {
    id: '2',
    options: { headerShown: false },
    name: BottomNavigationTypes.PROFILE_TAB,
    stackConfig: StackNavigationConfig.ProfileStack,
  },
  {
    id: '3',
    options: { headerShown: false },
    name: BottomNavigationTypes.SEARCH_TAB,
    stackConfig: StackNavigationConfig.SearchStack,
  },
];
