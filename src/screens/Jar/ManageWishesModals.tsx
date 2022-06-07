import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { Button } from '../../components/Buttons/Button';
import { WishModal } from '../../components/Modals/WishModal';
import { createStyles } from './styles';
import { useTranslation } from 'react-i18next';
import { useStyles } from '../../helpers/hooks/useStyles';
import LoaderState from '../../mobx/LoaderState';

const LOADER_DURATION = 2000;

export const ManageWishesModals = () => {
  const { t } = useTranslation('jar');
  const styles = useStyles(createStyles);
  const [addWishModalVisible, setAddWishModalVisible] = useState(false);
  const [getWishModalVisible, setGetWishModalVisible] = useState(false);
  const [randomWishLoader, setRandomWishLoader] = useState(false);

  useEffect(() => {
    if (!randomWishLoader) {
      return;
    }

    // TODO: Remove after replacing text with animation or timer
    LoaderState.setLoading(true);

    const timeoutId = setTimeout(() => {
      setRandomWishLoader(false);
      setGetWishModalVisible(true);

      // Same as above
      LoaderState.setLoading(false);
    }, LOADER_DURATION);

    return () => clearTimeout(timeoutId);
  }, [randomWishLoader]);

  return (
    <View>
      <View style={styles.btnWrapper}>
        <Button
          onPress={() => setAddWishModalVisible(true)}
          text={t('add-wish')}
          style={styles.btn}
        />
        <Button
          onPress={() => setRandomWishLoader(true)}
          text={t('get-random-wish')}
          style={styles.btn}
        />
      </View>
      {/* TODO: Replace with timer or fancy animation */}
      {randomWishLoader && (
        // eslint-disable-next-line react-native/no-inline-styles
        <Text style={{ color: '#000' }}>Getting your random wish ...</Text>
      )}
      <WishModal
        editable
        visible={addWishModalVisible}
        setVisible={setAddWishModalVisible}
        buttons={[
          <Button
            text={t('add-wish')}
            onPress={() => console.log('Wish added')}
          />,
        ]}
      />
      <WishModal
        visible={getWishModalVisible}
        setVisible={setGetWishModalVisible}
        buttons={[
          <Button
            text={t('put-back-wish')}
            onPress={() => console.log('Wish put back')}
          />,
          <Button
            text={t('remove-wish')}
            onPress={() => console.log('Wish removed')}
          />,
        ]}
      />
    </View>
  );
};
