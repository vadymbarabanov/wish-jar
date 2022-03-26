import React, { useState } from 'react';
import i18n from 'i18next';
import { RadioButton } from '../../components/Buttons/RadioButton';
import { CentrifyWrapper } from '../../components/CentrifyWrapper';
import { LanguagesList } from '../../helpers/i18next/init';
import globalStyles from '../../styles/global';
import { ScrollView } from 'react-native-gesture-handler';

export const Languages = () => {
  const [activeRadio, setActiveRadio] = useState<LanguagesList>(
    i18n.language as LanguagesList
  );

  const onRadioPress = (lang: LanguagesList) => {
    setActiveRadio(lang);
    i18n.changeLanguage(lang);
  };

  return (
    <ScrollView>
      <CentrifyWrapper>
        <RadioButton
          wrapperStyle={globalStyles.marginVertical}
          label="Українська"
          active={activeRadio === LanguagesList.UA}
          onPress={() => {
            onRadioPress(LanguagesList.UA);
          }}
        />
        <RadioButton
          wrapperStyle={globalStyles.marginVertical}
          label="English"
          active={activeRadio === LanguagesList.EN}
          onPress={() => {
            onRadioPress(LanguagesList.EN);
          }}
        />
        <RadioButton
          wrapperStyle={globalStyles.marginVertical}
          label="Русский"
          onPress={() => console.log('Русский корабль, иди нахуй!')}
        />
      </CentrifyWrapper>
    </ScrollView>
  );
};
