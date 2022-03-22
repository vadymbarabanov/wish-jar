import React from 'react';
import { Button } from '../../components/Buttons/Button';
import { EmailInput } from '../../components/Inputs/EmailInput';
import { Title } from '../../components/Title';
import { CentrifyWrapper } from '../../components/CentrifyWrapper';
import { AuthScreenProps } from '../../navigation/AuthStack';
import { AuthStackRoutes } from '../../navigation/routes';
import globalStyles from '../../styles/global';
import { useTranslation } from 'react-i18next';

export const ResetPassword = ({ navigation }: AuthScreenProps) => {
  const { t } = useTranslation('reset-password');

  return (
    <CentrifyWrapper>
      <Title style={globalStyles.marginVertical} text={t('title')} />
      <EmailInput style={globalStyles.marginVertical} />
      <Button
        onPress={() => navigation.navigate(AuthStackRoutes.VERIFICATION)}
        style={globalStyles.marginVertical}
        text={t('button-text')}
      />
    </CentrifyWrapper>
  );
};
