import React, { useEffect, useRef, useState } from 'react';
import {
  TextInput,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { useStyles } from '../../helpers/hooks/useStyles';
import { JarIcon } from '../../components/Icons/JarIcon';
import { DEVICE_WIDTH } from '../../constants/device';
import { createStyles } from './styles';
import { Button } from '../../components/Buttons/Button';
import { useTranslation } from 'react-i18next';

export const JAR_WIDTH = DEVICE_WIDTH - 128;

interface JarProps {
  route: any;
}

export const Jar = ({ route }: JarProps) => {
  const { t } = useTranslation('jar');
  const styles = useStyles(createStyles);
  const textInputRef = useRef<TextInput | null>();
  const { isNewelyAdded } = route.params;
  const [isNew, setIsNew] = useState(isNewelyAdded);
  const [editable, setEditable] = useState(isNewelyAdded);
  const [value, setValue] = useState(t('default-label') as string);

  // [React Native Love] selectTextOnFocus does not work with autoFocus
  useEffect(() => {
    if (isNew && textInputRef.current) {
      textInputRef.current.focus();
    }
  }, [isNew]);

  useEffect(() => {
    if (editable && textInputRef.current) {
      textInputRef.current.focus();
    }
  }, [editable]);

  const handleInputChange = (text: string) => {
    // It's no longer new after label changes
    setIsNew(false);
    setValue(text);
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.wrapper}>
        <View style={styles.jarWrapper}>
          <JarIcon width={JAR_WIDTH} />
          <View style={styles.labelWrapper}>
            <TouchableOpacity
              activeOpacity={1}
              onLongPress={() => setEditable(true)}
            >
              <TextInput
                selectTextOnFocus={isNew}
                ref={(ref) => (textInputRef.current = ref)}
                onBlur={() => setEditable(false)}
                editable={editable}
                multiline
                style={styles.labelInput}
                onChangeText={handleInputChange}
                value={value}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.btnWrapper}>
          <Button text={t('add-wish')} style={styles.btn} />
          <Button text={t('get-random-wish')} style={styles.btn} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
