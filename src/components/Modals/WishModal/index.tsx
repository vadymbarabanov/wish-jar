import React, { ReactElement, useEffect, useState } from 'react';
import { TextInput, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useStyles } from '../../../helpers/hooks/useStyles';
import { createStyles } from './styles';
import { BasicModal, ModalProps } from '../BasicModal';
import { ContentWrapper } from '../ContentWrapper';
import { Wish } from '../../../types/Wish';

interface WishModalProps extends ModalProps {
  editable?: boolean;
  initialWish?: Wish;
  buttons: ReactElement[];
}

const MAX_TITLE_LENGTH = 30;
const MAX_DESCRIPTION_LENGTH = 140;

const emptyWish: Wish = {
  title: '',
  description: '',
};

export const WishModal = ({
  visible,
  setVisible,
  editable = false,
  initialWish = emptyWish,
  buttons,
  ...rest
}: WishModalProps) => {
  const { t } = useTranslation('wish-modal');
  const styles = useStyles(createStyles);

  // TODO: think of moving state to parent component
  const [wish, setWish] = useState(initialWish);

  useEffect(() => {
    setWish(initialWish);
  }, [initialWish]);

  const cancelChanges = () => {
    setWish(initialWish);
    setVisible(false);
  };

  return (
    <BasicModal visible={visible} setVisible={setVisible} {...rest}>
      <ContentWrapper closeModal={cancelChanges} closeButton={false}>
        <TextInput
          multiline={true}
          editable={editable}
          value={wish?.title || ''}
          placeholder={t('title')}
          onChangeText={(title) => setWish({ ...wish, title })}
          style={styles.title}
          autoFocus={editable}
          maxLength={MAX_TITLE_LENGTH}
        />

        {editable || wish?.description ? (
          <TextInput
            multiline={true}
            editable={editable}
            value={wish?.description || ''}
            placeholder={t('description')}
            onChangeText={(description) => setWish({ ...wish, description })}
            style={styles.description}
            maxLength={MAX_DESCRIPTION_LENGTH}
          />
        ) : null}
      </ContentWrapper>

      <View style={styles.buttonsWrapper}>{buttons}</View>
    </BasicModal>
  );
};
