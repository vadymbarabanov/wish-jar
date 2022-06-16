import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Pressable, ScrollView, Text } from 'react-native';
import { Button } from '../../components/Buttons/Button';
import { RemoveButton } from '../../components/Buttons/RemoveButton';
import { ConfirmModal } from '../../components/Modals/ConfirmModal';
import { WishModal } from '../../components/Modals/WishModal';
import { useStyles } from '../../helpers/hooks/useStyles';
import { Wish } from '../../types/Wish';
import { createStyles } from './styles';

interface WishListProps {
  wishes: Wish[];
}

export const WishList = ({ wishes }: WishListProps) => {
  const { t } = useTranslation('wish-list');
  const styles = useStyles(createStyles);
  const [confirmModalVisible, setConfirmModalVisible] = useState(false);
  const [editWishModalVisible, setEditWishModalVisible] = useState(false);
  const [editableWish, setEditableWish] = useState<Wish | null>(null);

  const handleEditWish = (wish: Wish) => {
    setEditableWish(wish);
    setEditWishModalVisible(true);
  };

  return (
    <ScrollView>
      {wishes.map((wish) => {
        return (
          <Pressable onPress={() => handleEditWish(wish)} style={styles.card}>
            <Text style={styles.label}>{wish.title}</Text>
            <RemoveButton onPress={() => setConfirmModalVisible(true)} />
          </Pressable>
        );
      })}
      <ConfirmModal
        text={t('confirmation')}
        visible={confirmModalVisible}
        onSubmit={() => console.log('Wish deleted')}
        setVisible={setConfirmModalVisible}
      />
      {editableWish && (
        <WishModal
          editable
          visible={editWishModalVisible}
          setVisible={setEditWishModalVisible}
          initialWish={editableWish}
          buttons={[
            <Button text="Save" onPress={() => console.log('Wish saved')} />,
          ]}
        />
      )}
    </ScrollView>
  );
};
