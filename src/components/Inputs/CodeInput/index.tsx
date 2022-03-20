import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import { useStyles } from '../../../helpers/hooks/useStyles';
import { createStyles } from './styles';

const CELL_COUNT = 4;

interface CodeInputProps {
  label?: string;
  value: string;
  onChangeText: (text: string) => void;
}

export const CodeInput = ({ label, value, onChangeText }: CodeInputProps) => {
  const styles = useStyles(createStyles);
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue: onChangeText,
  });

  return (
    <SafeAreaView style={styles.root}>
      <Text style={styles.title}>{label}</Text>
      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={onChangeText}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({ index, symbol, isFocused }) => (
          <View
            onLayout={getCellOnLayoutHandler(index)}
            key={index}
            style={[styles.cellRoot, isFocused && styles.focusCell]}
          >
            <Text style={styles.cellText}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};
