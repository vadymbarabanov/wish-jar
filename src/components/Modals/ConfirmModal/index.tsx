import React from 'react';
import { Text, View } from 'react-native';
import { useStyles } from '../../../helpers/hooks/useStyles';
import { createStyles } from './styles';
import { BasicModal, ModalProps } from '../BasicModal';
import { ContentWrapper } from '../ContentWrapper';
import { CancelButton } from '../../Buttons/IconButton/CancelButton';
import { CheckButton } from '../../Buttons/IconButton/CheckButton';

interface ConfirmModalProps extends ModalProps {
  text: string;
  onSubmit: () => void;
  onDismiss: () => void;
}

export const ConfirmModal = ({
  visible,
  text,
  onSubmit,
  onDismiss,
}: ConfirmModalProps) => {
  const styles = useStyles(createStyles);

  return (
    <BasicModal visible={visible} onDismiss={onDismiss}>
      <ContentWrapper closeButton={false} closeModal={onDismiss}>
        <Text style={styles.text}>{text}</Text>

        <View style={styles.buttonsWrapper}>
          <CancelButton onPress={onDismiss} />
          <CheckButton onPress={onSubmit} />
        </View>
      </ContentWrapper>
    </BasicModal>
  );
};
