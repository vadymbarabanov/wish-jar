import React from 'react';
import { Button } from '../../components/Buttons/Button';
import { PasswordInput } from '../../components/Inputs/PasswordInput';
import { CentrifyWrapper } from '../../components/CentrifyWrapper';
import globalStyles from '../../styles/global';
import { useTranslation } from 'react-i18next';

export const NewPassword = () => {
  const { t } = useTranslation(['new-password', 'common']);

  return (
    <CentrifyWrapper>
      <PasswordInput style={globalStyles.marginVertical} label={t('label')} />
      <PasswordInput
        style={globalStyles.marginVertical}
        label={t('common:confirm-password')}
      />
      <Button text={t('button-text')} />
    </CentrifyWrapper>
  );
};
