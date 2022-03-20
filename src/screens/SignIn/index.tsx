import React from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { Button } from '../../components/Buttons/Button';
import { LinkButton } from '../../components/Buttons/LinkButton';
import { EmailInput } from '../../components/Inputs/EmailInput';
import { PasswordInput } from '../../components/Inputs/PasswordInput';
import { Title } from '../../components/Title';
import { Wrapper } from '../../components/Wrapper';
import { useStyles } from '../../helpers/hooks/useStyles';
import { AuthScreenProps } from '../../navigation/AuthStack';
import { AuthStackRoutes } from '../../navigation/routes';
import { createStyles } from './styles';

export const SignIn = ({ navigation }: AuthScreenProps) => {
  const styles = useStyles(createStyles);

  return (
    <Wrapper>
      <Title style={styles.marginBottom} text="Sign In" />
      <KeyboardAvoidingView>
        <EmailInput style={styles.marginBottom} />
        <PasswordInput style={styles.marginBottom} label="Password" />
        <Button style={styles.marginBottom} text="Sign In" />
      </KeyboardAvoidingView>
      <LinkButton
        onPress={() => navigation.navigate(AuthStackRoutes.SIGN_UP)}
        text="I don't have account"
      />
      <LinkButton
        onPress={() => navigation.push(AuthStackRoutes.RESET_PASSWORD)}
        text="Forgot password"
      />
    </Wrapper>
  );
};
