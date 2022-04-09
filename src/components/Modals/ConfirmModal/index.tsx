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
      <ContentWrapper closeButton={false} closeModal={() => setVisible(false)}>
        <Text style={styles.text}>{text}</Text>

        <View style={styles.buttonsWrapper}>
          <CancelButton onPress={() => setVisible(false)} />
          <CheckButton onPress={handleSubmit} />
        </View>
      </ContentWrapper>
    </BasicModal>
  );
};
