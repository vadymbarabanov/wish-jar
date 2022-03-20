import React, { useState } from 'react';
import { Button } from '../../components/Buttons/Button';
import { CodeInput } from '../../components/Inputs/CodeInput';
import { Title } from '../../components/Title';
import { Wrapper } from '../../components/Wrapper';

export const Verification = () => {
  const [value, setValue] = useState('');

  return (
    <Wrapper>
      <Title text="Enter verification code" />
      <CodeInput value={value} onChangeText={setValue} />
      <Button text="Submit" />
    </Wrapper>
  );
};
