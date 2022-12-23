import {
  ExploreScreen,
  ProfileScreen,
  SearchScreen,
  ListScreen,
} from '@screens/.';
import { StackNavigationType } from './StackNavigation.type';

export const StackNavigationConfig = {
  ExploreStack: [
    {
      id: '1',
      name: StackNavigationType.EXPLORE_SCREEN,
      component: ExploreScreen,
      options: { headerShown: false },
    },
    {
      id: '2',
      name: StackNavigationType.LIST_SCREEN,
      component: ListScreen,
      options: { headerShown: false },
    },
  ],
  ProfileStack: [
    {
      id: '3',
      name: StackNavigationType.PROFILE_SCREEN,
      component: ProfileScreen,
      options: { headerShown: false },
    },
    {
      id: '4',
      name: StackNavigationType.LIST_SCREEN,
      component: ListScreen,
      options: { headerShown: false },
    },
  ],
  SearchStack: [
    {
      id: '5',
      name: StackNavigationType.SEARCH_SCREEN,
      component: SearchScreen,
      options: { headerShown: false },
    },
    {
      id: '6',
      name: StackNavigationType.LIST_SCREEN,
      component: ListScreen,
      options: { headerShown: false },
    },
  ],
};
