import React from 'react';
import { GetOptions } from '../../types/Navigation';
import { BackButton } from '../../components/Buttons/BackButton';

export const getHeaderOptions: GetOptions = (navigation, title) => {
  return {
    headerLeft: () => <BackButton onPress={navigation.goBack} />,
    headerLeftContainerStyle: { paddingHorizontal: 20 },
    headerRightContainerStyle: { paddingHorizontal: 20 },
    headerTitle: title,
    title: '',
    headerTitleAlign: 'center',
  };
};
