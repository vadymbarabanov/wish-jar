import React from 'react';
import { useTranslation } from 'react-i18next';
import navigationState from '../../mobx/NavigationState';
import { ResetPasswordStackRoutes } from '../../navigation/routes';
import { ResetPasswordScreenProps } from '../../navigation/ResetPasswordStack';
import globalStyles from '../../styles/global';
import { CentrifyWrapper } from '../../components/CentrifyWrapper';
import { Title } from '../../components/Title';
import { Button } from '../../components/Buttons/Button';
import { EmailInput } from '../../components/Inputs/EmailInput';

export const ResetPassword = ({
  navigation,
}: ResetPasswordScreenProps<ResetPasswordStackRoutes.RESET_PASSWORD>) => {
  const { t } = useTranslation('reset-password');

  const handleSubmit = () => {
    navigationState.setVerificationCallback(() =>
      navigation.navigate(ResetPasswordStackRoutes.NEW_PASSSWORD)
    );
    navigation.push(ResetPasswordStackRoutes.VERIFICATION);
  };

  return (
    <CentrifyWrapper>
      <Title style={globalStyles.marginVertical} text={t('title')} />
      <EmailInput style={globalStyles.marginVertical} />
      <Button
        onPress={handleSubmit}
        style={globalStyles.marginVertical}
        text={t('button-text')}
      />
    </CentrifyWrapper>
  );
};
