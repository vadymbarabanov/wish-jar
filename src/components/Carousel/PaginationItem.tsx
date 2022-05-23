import React, { FC } from 'react';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { ProgressValue } from './Pagination';
import { styles } from './styles';

export const CIRCLE_WIDTH = 10;

export const PaginationItem: FC<{
  index: number;
  length: number;
  progressValue: ProgressValue;
}> = ({ progressValue, index, length }) => {
  const animStyle = useAnimatedStyle(() => {
    const inputRange =
      index === 0 && progressValue.value > length - 1
        ? [length - 1, length, length + 1]
        : [index - 1, index, index + 1];
    const outputRange = [CIRCLE_WIDTH, 2.5 * CIRCLE_WIDTH, CIRCLE_WIDTH];

    return {
      width: interpolate(
        progressValue?.value,
        inputRange,
        outputRange,
        Extrapolate.CLAMP
      ),
    };
  }, [progressValue, index, length]);

  return <Animated.View style={[styles.paginationItem, animStyle]} />;
};
