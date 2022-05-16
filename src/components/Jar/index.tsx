import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { DEVICE_WIDTH } from '../../constants/device';
import { useStyles } from '../../helpers/hooks/useStyles';
import { AddIcon } from '../Icons/AddIcon';
import { JarIcon } from '../Icons/JarIcon';
import { createStyles } from './styles';

export const JAR_WIDTH = DEVICE_WIDTH * 0.5 - 48;
export const ADD_ICON_WIDTH = JAR_WIDTH * 0.5;

type JarProps = {
  label?: string;
  isAdd?: boolean;
  goToJarScreen: () => void;
};

export const Jar = ({ label, isAdd, goToJarScreen }: JarProps) => {
  const styles = useStyles(createStyles);

  return (
    <Pressable onPress={goToJarScreen} style={styles.wrapper}>
      <JarIcon width={JAR_WIDTH} />
      {isAdd ? (
        <View style={styles.iconWrapper}>
          <AddIcon color="black" width={ADD_ICON_WIDTH} />
        </View>
      ) : (
        <View style={styles.labelWrapper}>
          <Text style={styles.labelText}>{label}</Text>
        </View>
      )}
    </Pressable>
  );
};
