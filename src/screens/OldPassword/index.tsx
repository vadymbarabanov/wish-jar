import React from 'react';
import { useTranslation } from 'react-i18next';
import navigationState from '../../mobx/NavigationState';
import { SettingsScreenProps } from '../../navigation/SettingsStack';
import {
  ResetPasswordStackRoutes,
  SettingsStackRoutes,
} from '../../navigation/routes';
import globalStyles from '../../styles/global';
import { CentrifyWrapper } from '../../components/CentrifyWrapper';
import { Button } from '../../components/Buttons/Button';
import { LinkButton } from '../../components/Buttons/LinkButton';
import { PasswordInput } from '../../components/Inputs/PasswordInput';

export const OldPassword = ({
  navigation,
}: SettingsScreenProps<SettingsStackRoutes.OLD_PASSSWORD>) => {
  const { t } = useTranslation('old-password');

  const handleNextPress = () => {
    navigationState.setNewPasswordCallback(navigation.goBack);
    navigation.replace(SettingsStackRoutes.NEW_PASSSWORD);
  };

  const handleNoPasswordPress = () => {
    navigationState.setNewPasswordCallback(navigation.goBack);
    navigation.replace(SettingsStackRoutes.RESET_PASSWORD, {
      screen: ResetPasswordStackRoutes.RESET_PASSWORD,
    });
  };

  return (
    <CentrifyWrapper>
      <PasswordInput style={globalStyles.marginVertical} label={t('label')} />
      <Button
        style={globalStyles.marginVertical}
        text={t('button-text')}
        onPress={handleNextPress}
      />
      <LinkButton
        style={globalStyles.marginVertical}
        text={t('no-password')}
        onPress={handleNoPasswordPress}
      />
    </CentrifyWrapper>
  );
};
