import React from 'react';
import { ScrollView, Text } from 'react-native';
import { observer } from 'mobx-react-lite';
import { counter } from '../mobx/Counter';
import { Variant } from '../types/Styles';
import { useTheme } from './ThemeProvider';
import { Button } from './Buttons/Button';
import { Input } from './Inputs/Input';
import { PasswordInput } from './Inputs/PasswordInput';
import { IconButton } from './Buttons/IconButton';
import { CloseIcon } from '../icons/CloseIcon';
import { AddIcon } from '../icons/AddIcon';
import { RemoveIcon } from '../icons/RemoveIcon';
import { EditIcon } from '../icons/EditIcon';

const Counter = () => {
  const { toggleTheme } = useTheme();

  const { count, increase, decrease } = counter;

  return (
    <ScrollView>
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
