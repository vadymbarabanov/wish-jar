import React from 'react';
import { View, Text } from 'react-native';
import { Button } from '../components/Buttons/Button';
import { SettingsStackRoutes } from '../navigation/routes';
import { SettingsScreenProps } from '../navigation/SettingsStack';

export const Settings = ({ navigation }: SettingsScreenProps) => {
  return (
    <View>
      <Text>Settings</Text>
      <Button
        text="New Password"
        onPress={() => navigation.navigate(SettingsStackRoutes.NEW_PASSSWORD)}
      />
    </View>
  );
};
