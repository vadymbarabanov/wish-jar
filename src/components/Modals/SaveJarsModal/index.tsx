import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Text } from 'react-native';
import { useStyles } from '../../../helpers/hooks/useStyles';
import { Variant } from '../../../types/Styles';
import { Button } from '../../Buttons/Button';
import { Checkbox } from '../../Buttons/Checkbox';
import { BasicModal, ModalProps } from '../BasicModal';
import { ContentWrapper } from '../ContentWrapper';
import { createStyles } from './styles';

interface SaveJarModalProps extends ModalProps {
  onSignInPress: () => void;
  dismissModal: () => void;
}

export const SaveJarsModal = ({
  visible,
  dismissModal,
  onSignInPress,
}: SaveJarModalProps) => {
  const styles = useStyles(createStyles);
  const { t } = useTranslation('save-jars-modal');
  const [active, setActive] = useState(false);

  const handleSignInPress = () => {
    dismissModal();
    onSignInPress();
  };

  return (
    <BasicModal visible={visible} onDismiss={dismissModal}>
      <ContentWrapper closeModal={dismissModal}>
        <Text style={styles.title}>{t('title')}</Text>
        <Checkbox
          style={styles.checkbox}
          label={t('not-show')}
          active={active}
          onPress={() => setActive(!active)}
        />
        <Button
          variant={Variant.PRIMARY}
          text={t('sign-in')}
          onPress={handleSignInPress}
        />
      </ContentWrapper>
    </BasicModal>
  );
};
