import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import Counter from '../components/Counter';
import { useTheme } from '../helpers/hooks/useTheme';

export const Home = ({ navigation }: any) => {
  const { theme } = useTheme();

  const wrapperStyle = {
    flex: 1,
    padding: 16,
    backgroundColor: theme.primary,
  };
  return (
    <SafeAreaView style={wrapperStyle}>
      <StatusBar barStyle="light-content" backgroundColor={theme.primary} />
      <Counter navigation={navigation} />
    </SafeAreaView>
  );
};
