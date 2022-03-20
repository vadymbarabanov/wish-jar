import React from 'react';
import { Button } from '../../components/Buttons/Button';
import { PasswordInput } from '../../components/Inputs/PasswordInput';
import { CentrifyWrapper } from '../../components/CentrifyWrapper';
import globalStyles from '../../styles/global';

export const NewPassword = () => {
  return (
    <CentrifyWrapper>
      <PasswordInput style={globalStyles.marginVertical} label="New Password" />
      <PasswordInput
        style={globalStyles.marginVertical}
        label="Confirm Password"
      />
      <Button text="Confirm" />
    </CentrifyWrapper>
  );
};
