import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Main from './pages/main/index.js';
import NewEntry from './pages/NewEntry/NewEntry.js';
import Report from './pages/Report/Report.js';

const Routes = createAppContainer(
  createSwitchNavigator(
    {
      Main,
      NewEntry,
      Report,
    },
    {
      initialRouteName: 'Main',
      backBehavior: 'order',
    },
  ),
);

export default Routes;
