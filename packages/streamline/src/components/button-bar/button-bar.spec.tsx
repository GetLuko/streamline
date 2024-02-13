import { fireEvent } from '@testing-library/react-native';
import React from 'react';

import { ButtonBar } from './button-bar';
import { renderWithProvider } from '../../testing/render-with-provider';
import { ButtonProps } from '../../types';
import { Button } from '../buttons/button/button';

describe('ButtonBar', () => {
  const buttons: ButtonProps[] = [
    { text: 'Button 1', iconName: 'Area', size: 'mini', onPress: jest.fn() },
    { text: 'Button 2', iconName: 'Area', size: 'mini', onPress: jest.fn() },
  ];

  it('renders correctly with buttons', () => {
    const { getByText } = renderWithProvider(<ButtonBar buttons={buttons} />);

    buttons.forEach((button) => {
      expect(getByText(button.text)).toBeTruthy();
    });
  });

  it('fires the onPress function when a button is clicked', () => {
    const { getByText } = renderWithProvider(<ButtonBar buttons={buttons} />);
    const buttonToClick = getByText('Button 1');
    fireEvent.press(buttonToClick);

    expect(buttons[0].onPress).toHaveBeenCalled();
  });

  it('should render skeleton items when isSkeleton prop is true', () => {
    // It is safe when it is used for props test
    // https://github.com/callstack/react-native-testing-library/issues/427#issuecomment-654405308
    const { UNSAFE_getAllByType } = renderWithProvider(
      <ButtonBar buttons={[]} isSkeleton={true} testID="button-bar" />
    );

    const buttons = UNSAFE_getAllByType(Button);

    expect(buttons.length).toBe(5);

    buttons.forEach((button) => {
      expect(button.props).toHaveProperty('isSkeleton', true);
    });
  });

  it('does not scroll when isSkeleton is true', () => {
    const { getByTestId } = renderWithProvider(
      <ButtonBar buttons={[]} isSkeleton testID="button-bar" />
    );
    const scrollView = getByTestId('button-bar');

    expect(scrollView.props).toHaveProperty('scrollEnabled', false);
  });
});
