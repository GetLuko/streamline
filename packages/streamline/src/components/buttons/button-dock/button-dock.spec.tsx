import React from 'react';
import { fireEvent } from '@testing-library/react-native';
import { ButtonDock } from './button-dock';
import { renderWithProvider } from '../../../testing/render-with-provider';
import { ButtonDockProps } from './button-dock.type';

const props: ButtonDockProps = {
  primaryButton: {
    onPress: jest.fn(),
    text: 'Primary Button',
    appearance: 'primary',
  },
  secondaryButton: {
    onPress: jest.fn(),
    text: 'Secondary Button',
    appearance: 'neutral',
  },
};

describe('ButtonDock', () => {
  it('renders correctly', () => {
    const { queryByText } = renderWithProvider(<ButtonDock {...props} />);
    const primaryButton = queryByText('Primary Button');
    const secondaryButton = queryByText('Secondary Button');
    expect(primaryButton).toBeDefined();
    expect(secondaryButton).toBeDefined();
  });

  it('calls onPress function when primary button is pressed', () => {
    const { getByText } = renderWithProvider(
      <ButtonDock primaryButton={props.primaryButton} />
    );
    const primaryButton = getByText('Primary Button');
    fireEvent.press(primaryButton);
    expect(props.primaryButton.onPress).toHaveBeenCalled();
  });

  it('calls onPress function when secondary button is pressed', () => {
    const { getByText } = renderWithProvider(<ButtonDock {...props} />);
    const secondaryButton = getByText('Secondary Button');
    fireEvent.press(secondaryButton);
    expect(props.secondaryButton?.onPress).toHaveBeenCalledTimes(1);
  });

  it('does not render secondary button when it is not passed as a prop', () => {
    const { queryByText } = renderWithProvider(
      <ButtonDock primaryButton={props.primaryButton} />
    );
    const secondaryButton = queryByText('Secondary Button');
    expect(secondaryButton).toBeNull();
  });
});
