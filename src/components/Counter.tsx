import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { observer } from 'mobx-react-lite';
import { counter } from '../mobx/Counter';
import { Variant } from '../types/Styles';
import { useTheme } from './ThemeProvider';
import { Button } from './Buttons/Button';
import { Input } from './Inputs/Input';
import { PasswordInput } from './Inputs/PasswordInput';
import { Checkbox } from './Buttons/Checkbox';

const Counter = () => {
  const { toggleTheme } = useTheme();
  const [checkbox, setCheckbox] = useState<number[]>([]);

  const { count, increase, decrease } = counter;

  const handleCheckbox = (value: number) => {
    if (checkbox.includes(value)) {
      return setCheckbox(checkbox.filter((item) => item !== value));
    }

    setCheckbox([...checkbox, value]);
  };

  return (
    <View>
      <Checkbox
        label="Checkbox 1"
        active={checkbox.includes(1)}
        onPress={() => handleCheckbox(1)}
      />
      <Checkbox
        label="Checkbox 2"
        active={checkbox.includes(2)}
        onPress={() => handleCheckbox(2)}
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
