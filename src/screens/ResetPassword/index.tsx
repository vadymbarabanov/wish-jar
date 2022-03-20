import React from 'react';
import { Button } from '../../components/Buttons/Button';
import { EmailInput } from '../../components/Inputs/EmailInput';
import { Title } from '../../components/Title';
import { Wrapper } from '../../components/Wrapper';
import { AuthScreenProps } from '../../navigation/AuthStack';
import { AuthStackRoutes } from '../../navigation/routes';
import globalStyles from '../../styles/global';

export const ResetPassword = ({ navigation }: AuthScreenProps) => {
  return (
    <Wrapper>
      <Title style={globalStyles.marginVertical} text="Reset Password" />
      <EmailInput style={globalStyles.marginVertical} />
      <Button
        onPress={() => navigation.navigate(AuthStackRoutes.VERIFICATION)}
        style={globalStyles.marginVertical}
        text="Reset"
      />
    </Wrapper>
  );
};
