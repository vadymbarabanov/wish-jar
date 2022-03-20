import React from 'react';
import { Button } from '../../components/Buttons/Button';
import { LinkButton } from '../../components/Buttons/LinkButton';
import { PasswordInput } from '../../components/Inputs/PasswordInput';
import { Wrapper } from '../../components/Wrapper';
import { useStyles } from '../../helpers/hooks/useStyles';
import { createStyles } from './styles';

export const OldPassword = () => {
  const styles = useStyles(createStyles);

  return (
    <Wrapper>
      <PasswordInput style={styles.marginBottom} label="Old Password" />
      <Button style={styles.marginBottom} text="Next" />
      <LinkButton style={styles.marginBottom} text="Forgot Password" />
    </Wrapper>
  );
};
