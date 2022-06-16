import React from 'react';
import { View } from 'react-native';
import { useStyles } from '../../../helpers/hooks/useStyles';
import { GetWishModal } from './GetWishModal';
import { AddWishModal } from './AddWishModal';
import { createStyles } from './styles';

export const WishModals = () => {
  const styles = useStyles(createStyles);

  return (
    <View style={styles.modalsWrapper}>
      <GetWishModal />
      <AddWishModal />
    </View>
  );
};
