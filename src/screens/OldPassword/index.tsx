import React from 'react';
import { Button } from '../../components/Buttons/Button';
import { LinkButton } from '../../components/Buttons/LinkButton';
import { PasswordInput } from '../../components/Inputs/PasswordInput';
import { CentrifyWrapper } from '../../components/CentrifyWrapper';
import globalStyles from '../../styles/global';
import { useTranslation } from 'react-i18next';

export const OldPassword = () => {
  const { t } = useTranslation('old-password');

  return (
    <CentrifyWrapper>
      <PasswordInput style={globalStyles.marginVertical} label={t('label')} />
      <Button style={globalStyles.marginVertical} text={t('button-text')} />
      <LinkButton style={globalStyles.marginVertical} text={t('no-password')} />
    </CentrifyWrapper>
  );
};
