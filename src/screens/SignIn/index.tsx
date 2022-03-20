import React from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { Button } from '../../components/Buttons/Button';
import { LinkButton } from '../../components/Buttons/LinkButton';
import { EmailInput } from '../../components/Inputs/EmailInput';
import { PasswordInput } from '../../components/Inputs/PasswordInput';
import { Title } from '../../components/Title';
import { CentrifyWrapper } from '../../components/CentrifyWrapper';
import { AuthScreenProps } from '../../navigation/AuthStack';
import { AuthStackRoutes } from '../../navigation/routes';
import globalStyles from '../../styles/global';

export const SignIn = ({ navigation }: AuthScreenProps) => {
  return (
    <CentrifyWrapper>
      <Title style={globalStyles.marginVertical} text="Sign In" />
      <KeyboardAvoidingView>
        <EmailInput style={globalStyles.marginVertical} />
        <PasswordInput style={globalStyles.marginVertical} label="Password" />
        <Button style={globalStyles.marginVertical} text="Sign In" />
      </KeyboardAvoidingView>
      <LinkButton
        onPress={() => navigation.navigate(AuthStackRoutes.SIGN_UP)}
        text="I don't have account"
      />
      <LinkButton
        onPress={() => navigation.push(AuthStackRoutes.RESET_PASSWORD)}
        text="Forgot password"
      />
    </CentrifyWrapper>
  );
};
