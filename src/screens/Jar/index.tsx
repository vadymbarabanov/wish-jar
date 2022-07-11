import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
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
import { MainScreenProps } from '../../navigation/MainStack';
import { MainStackRoutes } from '../../navigation/routes';
import { BackButton } from '../../components/Buttons/IconButton/BackButton';
import { ConfirmModal } from '../../components/Modals/ConfirmModal';
import { useTranslation } from 'react-i18next';

export const JAR_WIDTH = DEVICE_WIDTH - 128;
const DEFAULT_LABEL = 'My wishes';

export const Jar = ({
  route,
  navigation,
}: MainScreenProps<MainStackRoutes.JAR>) => {
  const { t } = useTranslation('jar');
  const styles = useStyles(createStyles);
  const textInputRef = useRef<TextInput | null>();
  const { isNewlyAdded } = route.params;
  const [isNew, setIsNew] = useState(isNewlyAdded);
  const [editable, setEditable] = useState(isNewlyAdded);
  const [value, setValue] = useState(DEFAULT_LABEL);
  const [saveModalVisisble, setSaveModalVisisble] = useState(false);

  const handleInputChange = (text: string) => {
    // It's no longer new after label changes
    setIsNew(false);
    setValue(text);
  };

  const onBackPress = () => {
    if (isNew) {
      setSaveModalVisisble(true);
      return;
    }

    navigation.goBack();
  };

  const dismissModal = () => {
    setSaveModalVisisble(false);
    navigation.goBack();
  };

  const handleSubmit = () => {
    console.log('jar was saved');
    dismissModal();
  };

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

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => <BackButton onPress={onBackPress} />,
    });
  }, [navigation]);

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
          <Button text="Додати бажання" style={styles.btn} />
          <Button text="Дістати бажання" style={styles.btn} />
        </View>

        <ConfirmModal
          visible={saveModalVisisble}
          text={t('save-modal-title')}
          onSubmit={handleSubmit}
          onDismiss={dismissModal}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};
