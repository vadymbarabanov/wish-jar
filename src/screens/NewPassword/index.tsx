import React from 'react';
import { Button } from '../../components/Buttons/Button';
import { PasswordInput } from '../../components/Inputs/PasswordInput';
import { Wrapper } from '../../components/Wrapper';
import globalStyles from '../../styles/global';

export const NewPassword = () => {
  return (
    <Wrapper>
      <PasswordInput style={globalStyles.marginVertical} label="New Password" />
      <PasswordInput
        style={globalStyles.marginVertical}
        label="Confirm Password"
      />
      <Button text="Confirm" />
    </Wrapper>
  );
};
