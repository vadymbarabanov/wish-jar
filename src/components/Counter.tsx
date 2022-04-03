import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { observer } from 'mobx-react-lite';
import { counter } from '../mobx/Counter';
import { Variant } from '../types/Styles';
import { showSuccessToast } from '../helpers/toast';
import { useTheme } from '../helpers/hooks/useTheme';
import { Input } from './Inputs/Input';
import { PasswordInput } from './Inputs/PasswordInput';
import { Button } from './Buttons/Button';
import { RadioButton } from './Buttons/RadioButton';
import { IconButton } from './Buttons/IconButton';
import { Checkbox } from './Buttons/Checkbox';
import { CloseIcon } from './Icons/CloseIcon';
import { AddIcon } from './Icons/AddIcon';
import { RemoveIcon } from './Icons/RemoveIcon';
import { EditIcon } from './Icons/EditIcon';
import { CheckIcon } from './Icons/CheckIcon';
import loaderState from '../mobx/LoaderState';
import { SaveJarsModal } from './Modals/SaveJarsModal';
import { MainStackRoutes } from '../navigation/routes';

const Counter = ({ navigation }: { navigation: any }) => {
  const { toggleTheme } = useTheme();

  const [checkbox, setCheckbox] = useState<number[]>([]);
  const [radio, setRadio] = useState<number>();
  const [visible, setVisible] = useState(false);

  const { count, increase, decrease } = counter;

  const handleCheckbox = (value: number) => {
    if (checkbox.includes(value)) {
      return setCheckbox(checkbox.filter((item) => item !== value));
    }

    setCheckbox([...checkbox, value]);
    showSuccessToast();
  };

  const onGoLoadingPress = () => {
    loaderState.setLoading(true);
    setTimeout(() => loaderState.setLoading(false), 2000);
  };

  return (
    <ScrollView>
      <Button
        text="Open"
        variant={Variant.SECONDARY}
        onPress={() => setVisible(true)}
      />
      <SaveJarsModal
        onSignInPress={() => navigation.navigate(MainStackRoutes.AUTH)}
        visible={visible}
        setVisible={setVisible}
      />

      <Button
        text="Go loading"
        variant={Variant.SECONDARY}
        onPress={onGoLoadingPress}
      />

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
        containerStyles={styles.customWrapper}
        icon={<AddIcon color="red" />}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  customWrapper: { backgroundColor: 'yellow', borderColor: 'blue' },
});

export default observer(Counter);
