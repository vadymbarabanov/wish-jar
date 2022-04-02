import React from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { useTranslation } from 'react-i18next';
import navigationState from '../../mobx/NavigationState';
import { AuthStackRoutes } from '../../navigation/routes';
import { AuthScreenProps } from '../../navigation/AuthStack';
import globalStyles from '../../styles/global';
import { CentrifyWrapper } from '../../components/CentrifyWrapper';
import { Title } from '../../components/Title';
import { Button } from '../../components/Buttons/Button';
import { LinkButton } from '../../components/Buttons/LinkButton';
import { EmailInput } from '../../components/Inputs/EmailInput';
import { PasswordInput } from '../../components/Inputs/PasswordInput';

export const SignUp = ({
  navigation,
}: AuthScreenProps<AuthStackRoutes.SIGN_UP>) => {
  const { t } = useTranslation(['sign-up', 'common']);

  const handleSignUp = () => {
    navigationState.setVerificationCallback(() =>
      navigation.navigate(AuthStackRoutes.HOME)
    );
    navigation.push(AuthStackRoutes.VERIFICATION);
  };

  return (
    <CentrifyWrapper>
      <Title style={globalStyles.marginVertical} text={t('title')} />
      <KeyboardAvoidingView>
        <EmailInput style={globalStyles.marginVertical} />
        <PasswordInput style={globalStyles.marginVertical} />
        <PasswordInput
          style={globalStyles.marginVertical}
          label={t('common:confirm-password')}
        />
        <Button
          style={globalStyles.marginVertical}
          text={t('button-text')}
          onPress={handleSignUp}
        />
      </KeyboardAvoidingView>
      <LinkButton
        onPress={() => navigation.navigate(AuthStackRoutes.SIGN_IN)}
        text={t('account-exists')}
      />
    </CentrifyWrapper>
  );
};
