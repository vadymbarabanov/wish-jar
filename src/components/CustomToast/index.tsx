import React from 'react';
import Toast, { ToastConfigParams } from 'react-native-toast-message';
import { ToastType } from '../../types/Toast';
import { ToastContainer } from './ToastContainer';

type Config = Record<
  ToastType,
  (params: ToastConfigParams<any>) => JSX.Element
>;

export const CustomToast = () => {
  const config: Config = {
    [ToastType.ERROR]: ToastContainer,
    [ToastType.SUCCESS]: ToastContainer,
  };

  return <Toast position="bottom" config={config} onPress={Toast.hide} />;
};
