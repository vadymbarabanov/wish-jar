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

export const SaveJarsModal = ({
  visible,
  setVisible,
  onSignInPress,
}: ModalProps & { onSignInPress: () => void }) => {
  const styles = useStyles(createStyles);
  const { t } = useTranslation('save-jars-modal');
  const [active, setActive] = useState(false);

  const handleSignInPress = () => {
    setVisible(false);
    onSignInPress();
  };

  return (
    <BasicModal visible={visible} setVisible={setVisible}>
      <ContentWrapper closeModal={() => setVisible(false)}>
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
