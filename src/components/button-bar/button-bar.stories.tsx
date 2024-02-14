import type { Meta, StoryObj } from '@storybook/react';

import ButtonBar from './button-bar';

const meta = {
  component: ButtonBar,
} satisfies Meta<typeof ButtonBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    buttons: [
      {
        text: 'One',
        onPress: () => console.log('onPress One'),
        iconName: 'Area',
      },
      {
        text: 'Two',
        onPress: () => console.log('onPress Two'),
        iconName: 'Area',
      },
      {
        text: 'Three',
        onPress: () => console.log('onPress Three'),
        iconName: 'Area',
      },
      {
        text: 'Four',
        onPress: () => console.log('onPress Four'),
        iconName: 'Area',
      },
      {
        text: 'Five',
        onPress: () => console.log('onPress Five'),
        iconName: 'Area',
      },
    ],
  },
};
