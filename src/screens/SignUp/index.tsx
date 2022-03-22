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
import { useTranslation } from 'react-i18next';

export const SignUp = ({ navigation }: AuthScreenProps) => {
  const { t } = useTranslation(['sign-up', 'common']);

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
        <Button style={globalStyles.marginVertical} text={t('button-text')} />
      </KeyboardAvoidingView>
      <LinkButton
        onPress={() => navigation.navigate(AuthStackRoutes.SIGN_IN)}
        text={t('account-exists')}
      />
    </CentrifyWrapper>
  );
};
