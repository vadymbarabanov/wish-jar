import { Dimensions, Platform } from 'react-native';

export const DEVICE_HEIGHT = Dimensions.get('window').height;
export const DEVICE_WIDTH = Dimensions.get('window').width;

export const isAndroid = Platform.OS === 'android';
