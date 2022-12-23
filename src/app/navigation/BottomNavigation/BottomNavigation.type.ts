import { StackConfigType } from '@navigation/StackNavigation';
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';

/**
 * Defines the fix set of constants for Bottom Tabs.
 */
export enum BottomNavigationTypes {
  EXPLORE_TAB = 'Explore',
  PROFILE_TAB = 'Profile',
  SEARCH_TAB = 'Search',
}

export interface BottomNavigationConfigType {
  id: string;
  options: BottomTabNavigationOptions;
  name: BottomNavigationTypes;
  stackConfig: StackConfigType[];
}
