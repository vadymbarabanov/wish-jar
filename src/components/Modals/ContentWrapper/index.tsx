import React from 'react';
import { Pressable, PressableProps } from 'react-native';
import { useStyles } from '../../../helpers/hooks/useStyles';
import { IconButton } from '../../Buttons/IconButton';
import { CloseIcon } from '../../Icons/CloseIcon';
import { createStyles } from './styles';

interface ContentWrapperProps extends PressableProps {
  closeButton?: boolean;
  closeModal: () => void;
}

export const ContentWrapper = ({
  children,
  closeButton = true,
  closeModal,
}: ContentWrapperProps) => {
  const styles = useStyles(createStyles);

  return (
    <Pressable style={styles.wrapper}>
      {closeButton && (
        <IconButton
          onPress={closeModal}
          containerStyles={styles.close}
          icon={<CloseIcon />}
        />
      )}
      {children}
    </Pressable>
  );
};
