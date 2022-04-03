import React from 'react';
import { GetOptions } from '../../types/Navigation';
import { StyleSheet } from 'react-native';
import { IconButton } from '../../components/Buttons/IconButton';
import { MenuIcon } from '../../components/Icons/MenuIcon';
import { ArrowIcon } from '../../components/Icons/ArrowIcon';

const styles = StyleSheet.create({
  headerButtons: {
    paddingHorizontal: 20,
  },
  iconPadding: {
    padding: 0,
  },
});

export const getHeaderOptions: GetOptions = (navigation, title) => {
  return {
    headerLeft: () => (
      <IconButton
        containerStyles={styles.iconPadding}
        icon={<ArrowIcon />}
        onPress={navigation.goBack}
      />
    ),
    headerLeftContainerStyle: styles.headerButtons,
    headerRightContainerStyle: styles.headerButtons,
    headerTitle: title,
    title: '',
    headerTitleAlign: 'center',
  };
};

export const getHomeHeaderOptions: GetOptions = (navigation, title) => {
  return {
    ...getHeaderOptions(navigation, title),
    headerLeft: () => (
      <IconButton
        containerStyles={styles.iconPadding}
        icon={<MenuIcon />}
        onPress={navigation.openDrawer}
      />
    ),
  };
};
