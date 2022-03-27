import 'react-native-gesture-handler';
import './src/helpers/i18next/init';
import { AppRegistry } from 'react-native';
import { AppContainer } from './src/app/AppContainer';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => AppContainer);
