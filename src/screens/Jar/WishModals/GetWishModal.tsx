import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '../../../components/Buttons/Button';
import { WishModal } from '../../../components/Modals/WishModal';
import { useStyles } from '../../../helpers/hooks/useStyles';
import LoaderState from '../../../mobx/LoaderState';
import { createStyles } from './styles';

const LOADER_DURATION = 1500;

const mockWish = {
  title: 'Mocked Wish',
  description: 'Super',
};

export const GetWishModal = () => {
  const { t } = useTranslation('jar');
  const styles = useStyles(createStyles);
  const [visible, setVisible] = useState(false);
  const [randomWishLoader, setRandomWishLoader] = useState(false);

  useEffect(() => {
    if (!randomWishLoader) {
      return;
    }

    // TODO: Remove after replacing text with animation or timer
    LoaderState.setLoading(true);

    const timeoutId = setTimeout(() => {
      setRandomWishLoader(false);
      setVisible(true);

      // Same as above
      LoaderState.setLoading(false);
    }, LOADER_DURATION);

    return () => clearTimeout(timeoutId);
  }, [randomWishLoader]);

  return (
    <>
      <Button
        onPress={() => setRandomWishLoader(true)}
        text={t('get-random-wish')}
        style={styles.btn}
      />
      <WishModal
        wish={mockWish}
        visible={visible}
        setVisible={setVisible}
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
    </>
  );
};
