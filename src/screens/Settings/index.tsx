import React from 'react';
import { SettingsStackRoutes } from '../../navigation/routes';
import { SettingsScreenProps } from '../../navigation/SettingsStack';
import { CentrifyWrapper } from '../../components/CentrifyWrapper';
import { SettingsButton } from '../../components/Buttons/SettingsButton';
import { KeyIcon } from '../../components/Icons/KeyIcon';
import { LanguageIcon } from '../../components/Icons/LanguageIcon';
import { useTranslation } from 'react-i18next';

export const Settings = ({
  navigation,
}: SettingsScreenProps<SettingsStackRoutes.SETTINGS>) => {
  const { t } = useTranslation('settings');

  return (
    <CentrifyWrapper>
      <SettingsButton
        icon={LanguageIcon}
        text={t('language')}
        onPress={() => navigation.navigate(SettingsStackRoutes.LANGUAGES)}
      />
      <SettingsButton
        icon={KeyIcon}
        text={t('change-password')}
        onPress={() => navigation.navigate(SettingsStackRoutes.OLD_PASSSWORD)}
      />
    </CentrifyWrapper>
  );
};
