import React from 'react';
import { Button } from '../../components/Buttons/Button';
import { LinkButton } from '../../components/Buttons/LinkButton';
import { PasswordInput } from '../../components/Inputs/PasswordInput';
import { CentrifyWrapper } from '../../components/CentrifyWrapper';
import globalStyles from '../../styles/global';

export const OldPassword = () => {
  return (
    <CentrifyWrapper>
      <PasswordInput style={globalStyles.marginVertical} label="Old Password" />
      <Button style={globalStyles.marginVertical} text="Next" />
      <LinkButton style={globalStyles.marginVertical} text="Forgot Password" />
    </CentrifyWrapper>
  );
};
