import React from 'react';
import { View } from 'react-native';
import Animated from 'react-native-reanimated';
import { PaginationItem } from './PaginationItem';
import { styles } from './styles';

export type ProgressValue = Animated.SharedValue<number>;

interface PaginationProps {
  progressValue: ProgressValue;
  data: any[];
}

const Pagination = ({ progressValue, data }: PaginationProps) => {
  return (
    <View style={styles.pagination}>
      {data.map((_, index) => {
        return (
          <PaginationItem
            progressValue={progressValue}
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
