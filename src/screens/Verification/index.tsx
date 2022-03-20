import React, { useState } from 'react';
import { Button } from '../../components/Buttons/Button';
import { CodeInput } from '../../components/Inputs/CodeInput';
import { Title } from '../../components/Title';
import { CentrifyWrapper } from '../../components/CentrifyWrapper';

export const Verification = () => {
  const [value, setValue] = useState('');

  return (
    <CentrifyWrapper>
      <Title text="Enter verification code" />
      <CodeInput value={value} onChangeText={setValue} />
      <Button text="Submit" />
    </CentrifyWrapper>
  );
};
