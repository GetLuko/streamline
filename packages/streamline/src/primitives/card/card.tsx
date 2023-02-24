import React from 'react';

import { View, Text } from 'react-native';

/* eslint-disable-next-line */
export interface CardProps {}

export function Card(props: CardProps) {
  return (
    <View>
      <Text>Welcome to card!</Text>
    </View>
  );
}

export default Card;
