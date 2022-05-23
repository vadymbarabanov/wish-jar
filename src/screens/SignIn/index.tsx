import React from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { useTranslation } from 'react-i18next';
import {
  AuthStackRoutes,
  ResetPasswordStackRoutes,
} from '../../navigation/routes';
import { AuthScreenProps } from '../../navigation/AuthStack';
import globalStyles from '../../styles/global';
import { CentrifyWrapper } from '../../components/CentrifyWrapper';
import { Title } from '../../components/Title';
import { Button } from '../../components/Buttons/Button';
import { LinkButton } from '../../components/Buttons/LinkButton';
import { EmailInput } from '../../components/Inputs/EmailInput';
import { PasswordInput } from '../../components/Inputs/PasswordInput';

export const SignIn = ({
  navigation,
}: AuthScreenProps<AuthStackRoutes.SIGN_IN>) => {
  const { t } = useTranslation('sign-in');

  return (
    <CentrifyWrapper>
      <Title style={globalStyles.marginVertical} text={t('title')} />
      <KeyboardAvoidingView>
        <EmailInput style={globalStyles.marginVertical} />
        <PasswordInput style={globalStyles.marginVertical} />
        <Button style={globalStyles.marginVertical} text={t('button-text')} />
      </KeyboardAvoidingView>
      <LinkButton
        onPress={() => navigation.navigate(AuthStackRoutes.SIGN_UP)}
        text={t('no-account')}
      />
      <LinkButton
        onPress={() =>
          navigation.push(AuthStackRoutes.RESET_PASSWORD, {
            screen: ResetPasswordStackRoutes.RESET_PASSWORD,
          })
        }
        text={t('no-password')}
      />
    </CentrifyWrapper>
  );
};
