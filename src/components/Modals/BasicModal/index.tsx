import React from 'react';
import { Modal, Pressable, ViewProps } from 'react-native';
import { useStyles } from '../../../helpers/hooks/useStyles';
import { createStyles } from './styles';

export interface ModalProps extends ViewProps {
  visible: boolean;
  onDismiss: () => void;
}

export const BasicModal = ({ children, visible, onDismiss }: ModalProps) => {
  const styles = useStyles(createStyles);

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onDismiss}
    >
      <Pressable style={styles.wrapper} onPress={onDismiss}>
        {children}
      </Pressable>
    </Modal>
  );
};
