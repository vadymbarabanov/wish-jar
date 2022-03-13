import Toast from 'react-native-toast-message';
import { ToastType } from '../../types/Toast';
import { BaseToastOptions, ToastOptions } from './types';

const showToast = ({ title, body, type }: BaseToastOptions) => {
  Toast.show({
    text1: title,
    text2: body,
    type: type,
    visibilityTime: 5000,
  });
};

export const showErrorToast = (options?: ToastOptions) => {
  showToast({
    title: options?.title || 'Oops!',
    body: options?.body || 'Try again later',
    type: ToastType.ERROR,
  });
};

export const showSuccessToast = (options?: ToastOptions) => {
  showToast({
    title: options?.title || 'Success!',
    body: options?.body,
    type: ToastType.SUCCESS,
  });
};
