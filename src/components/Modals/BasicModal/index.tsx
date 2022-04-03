import React from 'react';
import { Modal, Pressable, ViewProps } from 'react-native';
import { useStyles } from '../../../helpers/hooks/useStyles';
import { createStyles } from './styles';

export interface ModalProps extends ViewProps {
  visible: boolean;
  setVisible: (visible: boolean) => void;
}

export const BasicModal = ({ children, visible, setVisible }: ModalProps) => {
  const styles = useStyles(createStyles);

  const handleClose = () => {
    setVisible(false);
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={handleClose}
    >
      <Pressable style={styles.wrapper} onPress={handleClose}>
        {children}
      </Pressable>
    </Modal>
  );
};
