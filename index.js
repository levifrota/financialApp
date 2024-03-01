/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './src/App';
import Main from './src/pages/main';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => Main);
