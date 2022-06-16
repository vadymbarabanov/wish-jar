import React, { ReactElement } from 'react';
import { TextInput, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useStyles } from '../../../helpers/hooks/useStyles';
import { createStyles } from './styles';
import { BasicModal, ModalProps } from '../BasicModal';
import { ContentWrapper } from '../ContentWrapper';
import { Wish } from '../../../types/Wish';

interface WishModalProps extends ModalProps {
  wish: Wish;
  setWish?: (wish: Wish) => void; // Optional because we need to show wish in read only mode
  editable?: boolean;
  buttons: ReactElement[];
}

const MAX_TITLE_LENGTH = 30;
const MAX_DESCRIPTION_LENGTH = 140;

export const WishModal = ({
  wish,
  setWish,
  visible,
  setVisible,
  editable = false,
  buttons,
  ...rest
}: WishModalProps) => {
  const { t } = useTranslation('wish-modal');
  const styles = useStyles(createStyles);

  const cancelChanges = () => {
    setVisible(false);
  };

  const handleChange = (value: Partial<Wish>) => {
    if (setWish) {
      setWish({ ...wish, ...value });
    }
  };

  return (
    <BasicModal visible={visible} setVisible={setVisible} {...rest}>
      <ContentWrapper closeModal={cancelChanges} closeButton={false}>
        <TextInput
          multiline={true}
          editable={editable}
          value={wish?.title || ''}
          placeholder={t('title')}
          onChangeText={(title) => handleChange({ title })}
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
            onChangeText={(description) => handleChange({ description })}
            style={styles.description}
            maxLength={MAX_DESCRIPTION_LENGTH}
          />
        ) : null}
      </ContentWrapper>

      <View style={styles.buttonsWrapper}>{buttons}</View>
    </BasicModal>
  );
};
