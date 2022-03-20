import React from 'react';
import { GetOptions } from '../../types/Navigation';
import { BackButton } from '../../components/Buttons/BackButton';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  headerButtons: {
    paddingHorizontal: 20,
  },
});

export const getHeaderOptions: GetOptions = (navigation, title) => {
  return {
    headerLeft: () => <BackButton onPress={navigation.goBack} />,
    headerLeftContainerStyle: styles.headerButtons,
    headerRightContainerStyle: styles.headerButtons,
    headerTitle: title,
    title: '',
    headerTitleAlign: 'center',
  };
};
