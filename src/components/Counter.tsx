import React, { useState } from 'react';
import { ScrollView, Text } from 'react-native';
import { observer } from 'mobx-react-lite';
import { counter } from '../mobx/Counter';
import { Variant } from '../types/Styles';
import { useTheme } from './ThemeProvider';
import { Button } from './Buttons/Button';
import { Input } from './Inputs/Input';
import { PasswordInput } from './Inputs/PasswordInput';
import { IconButton } from './Buttons/IconButton';
import { CloseIcon } from './Icons/CloseIcon';
import { AddIcon } from './Icons/AddIcon';
import { RemoveIcon } from './Icons/RemoveIcon';
import { EditIcon } from './Icons/EditIcon';
import { Checkbox } from './Buttons/Checkbox';
import { CheckIcon } from './Icons/CheckIcon';

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
    <ScrollView>
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
      <IconButton icon={<CloseIcon color="red" />} />
      <IconButton icon={<CheckIcon color="red" />} />
      <IconButton icon={<RemoveIcon color="red" />} />
      <IconButton icon={<EditIcon color="red" />} />
      <IconButton
        outlined
        containerStyles={{ backgroundColor: 'yellow', borderColor: 'blue' }}
        icon={<AddIcon color="red" />}
      />
    </ScrollView>
  );
};

export default observer(Counter);
