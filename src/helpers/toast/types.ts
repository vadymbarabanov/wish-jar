import { ToastType } from '../../types/Toast';

export interface BaseToastOptions {
  title?: string;
  body?: string;
  type: ToastType;
}

export type ToastOptions = Omit<BaseToastOptions, 'type'>;
