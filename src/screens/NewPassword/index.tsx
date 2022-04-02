import React from 'react';
import { useTranslation } from 'react-i18next';
import navigationState from '../../mobx/NavigationState';
import globalStyles from '../../styles/global';
import { CentrifyWrapper } from '../../components/CentrifyWrapper';
import { Button } from '../../components/Buttons/Button';
import { PasswordInput } from '../../components/Inputs/PasswordInput';

export const NewPassword = () => {
  const { t } = useTranslation(['new-password', 'common']);

  return (
    <CentrifyWrapper>
      <PasswordInput style={globalStyles.marginVertical} label={t('label')} />
      <PasswordInput
        style={globalStyles.marginVertical}
        label={t('common:confirm-password')}
      />
      <Button
        text={t('button-text')}
        onPress={navigationState.newPasswordCallback!}
      />
    </CentrifyWrapper>
  );
};
