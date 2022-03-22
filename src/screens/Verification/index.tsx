import React, { useState } from 'react';
import { Button } from '../../components/Buttons/Button';
import { CodeInput } from '../../components/Inputs/CodeInput';
import { Title } from '../../components/Title';
import { CentrifyWrapper } from '../../components/CentrifyWrapper';
import { useTranslation } from 'react-i18next';

export const Verification = () => {
  const [value, setValue] = useState('');
  const { t } = useTranslation('verification');

  return (
    <CentrifyWrapper>
      <Title text={t('title')} />
      <CodeInput value={value} onChangeText={setValue} />
      <Button text={t('button-text')} />
    </CentrifyWrapper>
  );
};
