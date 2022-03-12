import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { observer } from 'mobx-react-lite';
import { counter } from '../mobx/Counter';
import { Variant } from '../types/Styles';
import { useTheme } from './ThemeProvider';
import { Button } from './Buttons/Button';
import { Input } from './Inputs/Input';
import { PasswordInput } from './Inputs/PasswordInput';
import { RadioButton } from './Buttons/RadioButton';

const Counter = () => {
  const { toggleTheme } = useTheme();
  const [radio, setRadio] = useState<number>();

  const { count, increase, decrease } = counter;

  return (
    <View>
      <RadioButton
        label="Radio 1"
        active={radio === 1}
        onPress={() => setRadio(1)}
      />
      <RadioButton
        label="Radio 2"
        active={radio === 2}
        onPress={() => setRadio(2)}
      />

      <Text>I love Vadim Barabanov {count}</Text>
      <Button text="PRIMARY" variant={Variant.PRIMARY} />
      <Button text="SECONDARY" variant={Variant.SECONDARY} />
      <Button text="WARNING" variant={Variant.WARNING} />
      <Button text="ERROR" variant={Variant.ERROR} />
      <Button text="INFO" variant={Variant.INFO} />
      <Button text="+" onPress={increase} />
      <Button text="-" onPress={decrease} />
      <Button text="Toggle Theme" onPress={toggleTheme} />

      <Input label="Email" />
      <PasswordInput />
    </View>
  );
};

export default observer(Counter);
