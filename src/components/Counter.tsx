import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { counter } from '../mobx/Counter';
import { Variant } from '../types/styles';
import { Button } from './Button';
import { useTheme } from './ThemeProvider';

const Counter = () => {
  const [u, setu] = useState(0);
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

      <TouchableOpacity onPress={() => setu(Math.random())}>
        <Text>{u}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default observer(Counter);
