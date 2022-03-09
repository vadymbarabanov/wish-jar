import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { counter } from '../mobx/Counter';

const Counter = () => {
  const [u, setu] = useState(0);
  const { count, increase, decrease } = counter;

  return (
    <View>
      <Text>I love Vadim Barabanov {count}</Text>
      <TouchableOpacity onPress={increase}>
        <Text>+</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={decrease}>
        <Text>-</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setu(Math.random())}>
        <Text>{u}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default observer(Counter);
