import React from 'react';
import { SettingsStackRoutes } from '../../navigation/routes';
import { SettingsScreenProps } from '../../navigation/SettingsStack';
import { CentrifyWrapper } from '../../components/CentrifyWrapper';
import { SettingsButton } from '../../components/Buttons/SettingsButton';
import { KeyIcon } from '../../components/Icons/KeyIcon';
import { LanguageIcon } from '../../components/Icons/LanguageIcon';

export const Settings = ({
  navigation,
}: SettingsScreenProps<SettingsStackRoutes.SETTINGS>) => {
  return (
    <CentrifyWrapper>
      <SettingsButton
        icon={LanguageIcon}
        text="Language"
        onPress={() => navigation.navigate(SettingsStackRoutes.LANGUAGES)}
      />
      <SettingsButton
        icon={KeyIcon}
        text="Password"
        onPress={() => navigation.navigate(SettingsStackRoutes.OLD_PASSSWORD)}
      />
    </CentrifyWrapper>
  );
};
