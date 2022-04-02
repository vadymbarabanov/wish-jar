import React from 'react';
import { Pressable, PressableProps } from 'react-native';
import { useStyles } from '../../../helpers/hooks/useStyles';
import { IconButton } from '../../Buttons/IconButton';
import { CloseIcon } from '../../Icons/CloseIcon';
import { createStyles } from './styles';

interface ContentWrapperProps extends PressableProps {
  setVisible: (visible: boolean) => void;
}

export const ContentWrapper = ({
  children,
  setVisible,
}: ContentWrapperProps) => {
  const styles = useStyles(createStyles);

  return (
    <Pressable style={styles.wrapper}>
      <IconButton
        onPress={() => setVisible(false)}
        containerStyles={styles.close}
        icon={<CloseIcon />}
      />
      {children}
    </Pressable>
  );
};
