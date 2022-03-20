import React from 'react';
import { Button } from '../../components/Buttons/Button';
import { PasswordInput } from '../../components/Inputs/PasswordInput';
import { Wrapper } from '../../components/Wrapper';
import { useStyles } from '../../helpers/hooks/useStyles';
import { createStyles } from './styles';

export const NewPassword = () => {
  const styles = useStyles(createStyles);

  return (
    <Wrapper>
      <PasswordInput style={styles.marginBottom} label="New Password" />
      <PasswordInput style={styles.marginBottom} label="Confirm Password" />
      <Button text="Confirm" />
    </Wrapper>
  );
};
