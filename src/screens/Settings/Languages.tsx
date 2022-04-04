import React, { useState } from 'react';
import i18n from 'i18next';
import { RadioButton } from '../../components/Buttons/RadioButton';
import { CentrifyWrapper } from '../../components/CentrifyWrapper';
import { LanguagesList } from '../../helpers/i18next/init';
import globalStyles from '../../styles/global';
import { observer } from 'mobx-react-lite';
import loaderState from '../../mobx/LoaderState';

const Languages = () => {
  const { loading, setLoading } = loaderState;
  const [activeRadio, setActiveRadio] = useState<LanguagesList>(
    i18n.language as LanguagesList
  );

  const onRadioPress = (lang: LanguagesList) => {
    setLoading(true);
    i18n.changeLanguage(lang, () => {
      setLoading(false);
      setActiveRadio(lang);
    });
  };

  return (
    <CentrifyWrapper>
      <RadioButton
        style={globalStyles.marginVertical}
        label="Українська"
        disabled={loading}
        active={activeRadio === LanguagesList.UA}
        onPress={() => {
          onRadioPress(LanguagesList.UA);
        }}
      />
      <RadioButton
        style={globalStyles.marginVertical}
        label="English"
        disabled={loading}
        active={activeRadio === LanguagesList.EN}
        onPress={() => {
          onRadioPress(LanguagesList.EN);
        }}
      />
    </CentrifyWrapper>
  );
};

export default observer(Languages);
