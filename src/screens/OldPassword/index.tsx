import React from 'react';
import { Button } from '../../components/Buttons/Button';
import { LinkButton } from '../../components/Buttons/LinkButton';
import { PasswordInput } from '../../components/Inputs/PasswordInput';
import { Wrapper } from '../../components/Wrapper';
import globalStyles from '../../styles/global';

export const OldPassword = () => {
  return (
    <Wrapper>
      <PasswordInput style={globalStyles.marginVertical} label="Old Password" />
      <Button style={globalStyles.marginVertical} text="Next" />
      <LinkButton style={globalStyles.marginVertical} text="Forgot Password" />
    </Wrapper>
  );
};
