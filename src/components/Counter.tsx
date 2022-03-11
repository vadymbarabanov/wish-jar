import React from 'react';
import { Text, View } from 'react-native';
import { observer } from 'mobx-react-lite';
import { counter } from '../mobx/Counter';
import { Variant } from '../types/Styles';
import { useTheme } from './ThemeProvider';
import { Button } from './Button';
import { Input } from './Inputs/Input';
import { PasswordInput } from './Inputs/PasswordInput';

const Counter = () => {
  const { toggleTheme } = useTheme();

  const { count, increase, decrease } = counter;

  return (
    <View>
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
