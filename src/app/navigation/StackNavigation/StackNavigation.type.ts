import { NativeStackNavigationOptions } from '@react-navigation/native-stack';

/**
 * Defines the fix set of constants for Stack Navigation.
 */
export enum StackNavigationType {
  EXPLORE_SCREEN = 'ExploreScreen',
  PROFILE_SCREEN = 'ProfileScreen',
  SEARCH_SCREEN = 'SearchScreen',
  LIST_SCREEN = 'ListScreen',
}

export interface StackConfigType {
  id: string;
  options: NativeStackNavigationOptions;
  name: StackNavigationType;
  component: React.FunctionComponent;
}

export interface StackNavigationProps {
  stackConfig: StackConfigType[];
}
