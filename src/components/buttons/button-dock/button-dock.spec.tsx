import { fireEvent } from '@testing-library/react-native';
import React from 'react';

import { ButtonDock } from './button-dock';
import { ButtonDockProps } from './button-dock.type';
import { renderWithProvider } from '../../../testing/render-with-provider';

const props: ButtonDockProps = {
  primary: {
    onPress: jest.fn(),
    text: 'Primary Button',
    appearance: 'primary',
  },
  secondary: {
    onPress: jest.fn(),
    text: 'Secondary Button',
    appearance: 'neutral',
  },
};

describe('ButtonDock', () => {
  it('renders correctly', () => {
    const { queryByText } = renderWithProvider(<ButtonDock {...props} />);
    const primary = queryByText('Primary Button');
    const secondary = queryByText('Secondary Button');
    expect(primary).toBeDefined();
    expect(secondary).toBeDefined();
  });

  it('calls onPress function when primary button is pressed', () => {
    const { getByText } = renderWithProvider(
      <ButtonDock primary={props.primary} />
    );
    const primary = getByText('Primary Button');
    fireEvent.press(primary);
    expect(props.primary.onPress).toHaveBeenCalled();
  });

  it('calls onPress function when secondary button is pressed', () => {
    const { getByText } = renderWithProvider(<ButtonDock {...props} />);
    const secondary = getByText('Secondary Button');
    fireEvent.press(secondary);
    expect(props.secondary?.onPress).toHaveBeenCalledTimes(1);
  });

  it('does not render secondary button when it is not passed as a prop', () => {
    const { queryByText } = renderWithProvider(
      <ButtonDock primary={props.primary} />
    );
    const secondary = queryByText('Secondary Button');
    expect(secondary).toBeNull();
  });
});
