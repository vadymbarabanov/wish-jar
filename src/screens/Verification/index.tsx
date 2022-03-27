import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import navigationState from '../../mobx/NavigationState';
import { CentrifyWrapper } from '../../components/CentrifyWrapper';
import { Title } from '../../components/Title';
import { Button } from '../../components/Buttons/Button';
import { CodeInput } from '../../components/Inputs/CodeInput';

export const Verification = () => {
  const [value, setValue] = useState('');
  const { t } = useTranslation('verification');

  return (
    <CentrifyWrapper>
      <Title text={t('title')} />
      <CodeInput value={value} onChangeText={setValue} />
      <Button
        text={t('button-text')}
        onPress={navigationState.verificationCallback!}
      />
    </CentrifyWrapper>
  );
};
