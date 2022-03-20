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
import { createStyles } from './styles';

export const SignUp = ({ navigation }: AuthScreenProps) => {
  const styles = useStyles(createStyles);

  return (
    <Wrapper>
      <Title style={styles.marginBottom} text="Sign Up" />
      <KeyboardAvoidingView>
        <EmailInput style={styles.marginBottom} />
        <PasswordInput style={styles.marginBottom} label="Password" />
        <PasswordInput style={styles.marginBottom} label="Confirm Password" />
        <Button style={styles.marginBottom} text="Sign Up" />
      </KeyboardAvoidingView>
      <LinkButton
        onPress={() => navigation.navigate('Sign In')}
        text="I already have an account"
      />
    </Wrapper>
  );
};
