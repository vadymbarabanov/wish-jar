import React from 'react';
import { Text, View } from 'react-native';
import { useStyles } from '../../../helpers/hooks/useStyles';
import { IconButton } from '../../Buttons/IconButton';
import { CheckIcon } from '../../Icons/CheckIcon';
import { CloseIcon } from '../../Icons/CloseIcon';
import { BasicModal, ModalProps } from '../BasicModal';
import { ContentWrapper } from '../ContentWrapper';
import { createStyles } from './styles';

interface ConfirmModalProps extends ModalProps {
  text: string;
  onSubmit: () => void;
}

export const ConfirmModal = ({
  visible,
  setVisible,
  text,
  onSubmit,
}: ConfirmModalProps) => {
  const styles = useStyles(createStyles);

  const handleSubmit = () => {
    onSubmit();
    setVisible(false);
  };

  return (
    <BasicModal visible={visible} setVisible={setVisible}>
      <ContentWrapper closeButton={false} setVisible={setVisible}>
        <Text style={styles.text}>{text}</Text>

        <View style={styles.buttonsWrapper}>
          <IconButton
            icon={<CloseIcon color="white" />}
            containerStyles={[styles.icon, styles.closeIcon]}
            onPress={() => setVisible(false)}
          />
          <IconButton
            icon={<CheckIcon color="white" />}
            containerStyles={[styles.icon, styles.checkIcon]}
            onPress={handleSubmit}
          />
        </View>
      </ContentWrapper>
    </BasicModal>
  );
};
