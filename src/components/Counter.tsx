import { inject, observer } from 'mobx-react';
import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

// import counterStore from '../mobx/Counter';

const Counter = (props) => {
  const [u, setu] = useState(0);

  const { counter, increase, decrease } = props.counter;
  console.log(props.counter.increse);

  return (
    <View>
      <Text
        style={{
          fontSize: 20,
          textAlign: 'center',
          fontWeight: 'bold',
          color: 'red',
        }}
      >
        I love Vadim Barabanov {counter}
      </Text>
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

export default inject('counter')(observer(Counter));
