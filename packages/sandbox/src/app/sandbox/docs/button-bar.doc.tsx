import { Box, ButtonBar, ButtonProps } from '@getluko/streamline';
import React from 'react';

const buttonsArray: ButtonProps[] = [
  {
    text: 'One',
    onPress: () => console.log('onPress One'),
    iconName: 'Area',
    size: 'mini',
  },
  {
    text: 'Two',
    onPress: () => console.log('onPress Two'),
    iconName: 'Area',
    size: 'mini',
  },
  {
    text: 'Three',
    onPress: () => console.log('onPress Three'),
    iconName: 'Area',
    size: 'mini',
  },
  {
    text: 'Four',
    onPress: () => console.log('onPress Four'),
    iconName: 'Area',
    size: 'mini',
  },
  {
    text: 'Five',
    onPress: () => console.log('onPress Five'),
    iconName: 'Area',
    size: 'mini',
  },
];

export const ButtonBarSandbox = () => {
  return (
    <Box>
      <ButtonBar buttons={buttonsArray.slice(0, 1)} />
      <ButtonBar buttons={buttonsArray.slice(0, 2)} />
      <ButtonBar buttons={buttonsArray.slice(0, 3)} />
      <ButtonBar buttons={buttonsArray.slice(0, 4)} />
      <ButtonBar buttons={buttonsArray.slice(0, 5)} />
      <ButtonBar buttons={buttonsArray.slice(0, 5)} isSkeleton />
      <ButtonBar buttons={[]} />
    </Box>
  );
};
