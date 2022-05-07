import React from 'react';
import { View } from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';

const PaginationItem: React.FC<{
  index: number;
  length: number;
  animValue: Animated.SharedValue<number>;
}> = ({ animValue, index, length }) => {
  const width = 10;

  const animStyle = useAnimatedStyle(() => {
    let inputRange = [index - 1, index, index + 1];
    let outputRange = [width, 2.5 * width, width];

    if (index === 0 && animValue?.value > length - 1) {
      inputRange = [length - 1, length, length + 1];
    }

    return {
      width: interpolate(
        animValue?.value,
        inputRange,
        outputRange,
        Extrapolate.CLAMP
      ),
    };
  }, [animValue, index, length]);

  return (
    <Animated.View
      style={[
        {
          borderRadius: 5,
          backgroundColor: 'white',
          width,
          height: width,
        },
        animStyle,
      ]}
    />
  );
};

interface PaginationProps {
  progressValue: any;
  data: any[];
}

const Pagination = ({ progressValue, data }: PaginationProps) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 100,
        alignSelf: 'center',
      }}
    >
      {data.map((_, index) => {
        return (
          <PaginationItem
            animValue={progressValue}
            index={index}
            key={index}
            length={data.length}
          />
        );
      })}
    </View>
  );
};

export default Pagination;
