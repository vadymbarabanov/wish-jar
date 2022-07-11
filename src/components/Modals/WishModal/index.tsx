import React, { ReactElement, useState } from 'react';
import { TextInput, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useStyles } from '../../../helpers/hooks/useStyles';
import { createStyles } from './styles';
import { BasicModal, ModalProps } from '../BasicModal';
import { ContentWrapper } from '../ContentWrapper';

interface WishModalProps extends ModalProps {
  editable?: boolean;
  initialWish?: {
    title: string;
    description: string;
  };
  Buttons: ReactElement[];
  onDismiss: () => void;
}

const MAX_TITLE_LENGTH = 30;
const MAX_DESCRIPTION_LENGTH = 140;

const emptyWish = {
  title: '',
  description: '',
};

export const WishModal = ({
  visible,
  onDismiss,
  editable = false,
  initialWish = emptyWish,
  Buttons,
  ...rest
}: WishModalProps) => {
  const { t } = useTranslation('wish-modal');
  const styles = useStyles(createStyles);
  const [wish, setWish] = useState(initialWish);

  const cancelChanges = () => {
    setWish(initialWish);
    onDismiss();
  };

  return (
    <BasicModal visible={visible} onDismiss={onDismiss} {...rest}>
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

      <View style={styles.buttonsWrapper}>{Buttons}</View>
    </BasicModal>
  );
};
