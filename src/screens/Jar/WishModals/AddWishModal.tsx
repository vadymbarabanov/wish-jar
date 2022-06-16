import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '../../../components/Buttons/Button';
import { WishModal } from '../../../components/Modals/WishModal';
import { useStyles } from '../../../helpers/hooks/useStyles';
import { Wish } from '../../../types/Wish';
import { createStyles } from './styles';

export const AddWishModal = () => {
  const { t } = useTranslation('jar');
  const styles = useStyles(createStyles);
  const [wish, setWish] = useState<Wish>({ title: '', description: '' });
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Button
        onPress={() => setVisible(true)}
        text={t('add-wish')}
        style={styles.btn}
      />
      <WishModal
        wish={wish}
        setWish={setWish}
        editable
        visible={visible}
        setVisible={setVisible}
        buttons={[
          <Button
            text={t('add-wish')}
            onPress={() => console.log('Wish added')}
          />,
        ]}
      />
    </>
  );
};
