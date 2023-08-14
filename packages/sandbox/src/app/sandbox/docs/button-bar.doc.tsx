import { Box, ButtonBar, ButtonProps } from '@getluko/streamline';
import React from 'react';

const buttonsArray1: ButtonProps[] = [
  {
    text: 'One',
    onPress: () => console.log('onPress One'),
    iconName: 'Area',
    size: 'mini',
  },
];

const buttonsArray2: ButtonProps[] = [
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
];

const buttonsArray3: ButtonProps[] = [
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
];

const buttonsArray4: ButtonProps[] = [
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
];

const buttonsArray5: ButtonProps[] = [
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

const buttonsArray0: ButtonProps[] = [];

export const ButtonBarSandbox = () => {
  return (
    <Box>
      <ButtonBar buttons={buttonsArray1} />
      <ButtonBar buttons={buttonsArray2} />
      <ButtonBar buttons={buttonsArray3} />
      <ButtonBar buttons={buttonsArray4} />
      <ButtonBar buttons={buttonsArray5} />
      <ButtonBar buttons={buttonsArray0} isSkeleton />
    </Box>
  );
};
