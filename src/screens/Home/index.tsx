import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, View } from 'react-native';
import { Jar } from '../../components/Jar';
import { useStyles } from '../../helpers/hooks/useStyles';
import { useTheme } from '../../helpers/hooks/useTheme';
import { chunk } from '../../helpers/utils/chunk';
import { MainStackRoutes } from '../../navigation/routes';
import { createStyles } from './styles';

export const Home = ({ navigation }: any) => {
  const { theme } = useTheme();
  const styles = useStyles(createStyles);

  const fake = [
    { label: 'Jar' },
    { label: 'Some jar' },
    { label: 'Something' },
    { label: 'Se jar' },
    { label: 'Super long jar name' },
    { label: 'Supervizerworld jar world' },
    { isAdd: true },
  ];

  const goToJarScreen = (isNew: boolean) => {
    navigation.navigate(MainStackRoutes.JAR, {
      isNewelyAdded: isNew,
    });
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <StatusBar barStyle="light-content" backgroundColor={theme.primary} />
      <ScrollView
        fadingEdgeLength={150}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.shelfContainer}
        overScrollMode="never"
      >
        {chunk(fake, 2).map((shelf: any) => (
          <View
            style={[
              styles.shelfWrapper,
              shelf.length === 1 && styles.singleJar,
            ]}
          >
            {shelf.map((jar: any) => (
              <Jar
                goToJarScreen={() => goToJarScreen(jar.isAdd)}
                label={jar.label}
                isAdd={jar.isAdd}
              />
            ))}
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};
