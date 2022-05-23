import * as React from 'react';
import { Text, View } from 'react-native';
import ReanimatedCarousel from 'react-native-reanimated-carousel';
import { useSharedValue } from 'react-native-reanimated';
import { DEVICE_WIDTH } from '../../constants/device';
import Pagination from './Pagination';
import { styles } from './styles';

const mockData = [
  '#26292E',
  '#899F9C',
  '#B3C680',
  '#5C6265',
  '#F5D399',
  '#F1F1F1',
];

export const Carousel = () => {
  const progressValue = useSharedValue<number>(0);

  return (
    <View style={styles.outerWrapper}>
      <ReanimatedCarousel
        loop={false}
        width={DEVICE_WIDTH}
        style={styles.innerWrapper}
        onProgressChange={(_: any, absoluteProgress: number) => {
          progressValue.value = absoluteProgress;
        }}
        data={mockData}
        renderItem={({ index }: { index: number }) => <Text>{index}</Text>}
      />
      <Pagination progressValue={progressValue} data={mockData} />
    </View>
  );
};
