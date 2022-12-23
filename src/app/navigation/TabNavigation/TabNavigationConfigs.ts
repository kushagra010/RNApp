import { ProfileScreen, SearchScreen, ExploreScreen } from '@app/screens';

export const TABS = [
  {
    id: '1',
    options: { title: 'Explore' },
    name: 'Explore',
    component: ExploreScreen,
  },
  {
    id: '2',
    options: { title: 'Profile' },
    name: 'Profile',
    component: ProfileScreen,
  },
  {
    id: '3',
    options: { title: 'Search' },
    name: 'Search',
    component: SearchScreen,
  },
];
