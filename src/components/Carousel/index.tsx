import * as React from 'react';
import { Text, View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { useSharedValue } from 'react-native-reanimated';
import { DEVICE_WIDTH } from '../../constants/device';
import Pagination from './Pagination';

const colors = [
  '#26292E',
  '#899F9C',
  '#B3C680',
  '#5C6265',
  '#F5D399',
  '#F1F1F1',
];

const Index = () => {
  const progressValue = useSharedValue<number>(0);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        paddingBottom: 30,
      }}
    >
      <Carousel
        loop={false}
        width={DEVICE_WIDTH}
        style={{ flex: 1 }}
        onProgressChange={(_, absoluteProgress) =>
          (progressValue.value = absoluteProgress)
        }
        data={colors}
        renderItem={({ index }: any) => <Text>{index}</Text>}
      />
      {!!progressValue && (
        <Pagination progressValue={progressValue} data={colors} />
      )}
    </View>
  );
};

export default Index;
