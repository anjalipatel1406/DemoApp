/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Post from './Post';

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Post);
