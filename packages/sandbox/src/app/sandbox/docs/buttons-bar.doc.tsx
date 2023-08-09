import { Box, ButtonsBar, ButtonProps } from '@getluko/streamline';
import React from 'react';

const buttonsArray1: ButtonProps[] = [
  { text: 'One', onPress: () => console.log('onPress One') },
];

const buttonsArray2: ButtonProps[] = [
  { text: 'One', onPress: () => console.log('onPress One') },
  { text: 'Two', onPress: () => console.log('onPress Two') },
];

const buttonsArray3: ButtonProps[] = [
  { text: 'One', onPress: () => console.log('onPress One') },
  { text: 'Two', onPress: () => console.log('onPress Two') },
  { text: 'Three', onPress: () => console.log('onPress Three') },
];

const buttonsArray4: ButtonProps[] = [
  { text: 'One', onPress: () => console.log('onPress One') },
  { text: 'Two', onPress: () => console.log('onPress Two') },
  { text: 'Three', onPress: () => console.log('onPress Three') },
  { text: 'Four', onPress: () => console.log('onPress Four') },
];

const buttonsArray5: ButtonProps[] = [
  { text: 'One', onPress: () => console.log('onPress One') },
  { text: 'Two', onPress: () => console.log('onPress Two') },
  { text: 'Three', onPress: () => console.log('onPress Three') },
  { text: 'Four', onPress: () => console.log('onPress Four') },
  { text: 'Five', onPress: () => console.log('onPress Five') },
];

const buttonsArray0: ButtonProps[] = [];

export const ButtonsBarSandbox = () => {
  return (
    <Box>
      <ButtonsBar buttons={buttonsArray1} />
      <ButtonsBar buttons={buttonsArray2} />
      <ButtonsBar buttons={buttonsArray3} />
      <ButtonsBar buttons={buttonsArray4} />
      <ButtonsBar buttons={buttonsArray5} />
      <ButtonsBar buttons={buttonsArray0} />
    </Box>
  );
};
