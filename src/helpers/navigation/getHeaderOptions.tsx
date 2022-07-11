import React from 'react';
import { GetOptions } from '../../types/Navigation';
import { StyleSheet } from 'react-native';
import { ParamListBase } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { BackButton } from '../../components/Buttons/IconButton/BackButton';
import { MenuButton } from '../../components/Buttons/IconButton/MenuButton';

const styles = StyleSheet.create({
  headerButtons: {
    paddingHorizontal: 20,
  },
});

export const getHeaderOptions: GetOptions = (navigation, headerTitle) => {
  return {
    headerLeft: () => <BackButton onPress={navigation.goBack} />,
    headerLeftContainerStyle: styles.headerButtons,
    headerRightContainerStyle: styles.headerButtons,
    headerTitle,
    title: '',
    headerTitleAlign: 'center',
  };
};

export const getHomeHeaderOptions: GetOptions<
  DrawerNavigationProp<ParamListBase, keyof ParamListBase>
> = (navigation, title) => {
  return {
    ...getHeaderOptions(navigation, title),
    headerLeft: () => <MenuButton onPress={navigation.openDrawer} />,
  };
};
