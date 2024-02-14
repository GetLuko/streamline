import { fireEvent } from '@testing-library/react-native';
import React from 'react';

import NavigationBarTrail, {
  NavigationBarTrailProps,
} from './navigation-bar-trail';
import { renderWithProvider } from '../../../testing/render-with-provider';
import { ButtonIconProps } from '../../buttons/button-icon/button-icon.types';

describe('NavigationBarTrail', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  const leftButtonProps: NavigationBarTrailProps['left'] = {
    type: 'back',
    onPress: jest.fn(),
  };

  const rightButtonProps: ButtonIconProps = {
    iconName: 'Area',
    accessibilityLabel: 'Right Icon',
    onPress: jest.fn(),
  };

  const actionButtonProps = {
    title: 'Action',
    onPress: jest.fn(),
    testID: 'action-button',
  };

  it('renders correctly with default props', () => {
    const { getByText, queryByLabelText, queryByTestId } = renderWithProvider(
      <NavigationBarTrail title="Title" />,
    );
    expect(getByText('Title')).toBeDefined();
    expect(queryByLabelText('Left Icon')).toBeNull();
    expect(queryByLabelText('Right Icon')).toBeNull();
    expect(queryByTestId('action-button')).toBeNull();
  });

  it('renders correctly with left button', () => {
    const { getByLabelText, queryByTestId } = renderWithProvider(
      <NavigationBarTrail title="Title" left={leftButtonProps} />,
    );
    expect(getByLabelText('Back')).toBeDefined();
    expect(queryByTestId('action-button')).toBeNull();
  });

  it('renders correctly with right button', () => {
    const { getByLabelText, queryByTestId } = renderWithProvider(
      <NavigationBarTrail title="Title" right={rightButtonProps} />,
    );
    expect(getByLabelText('Right Icon')).toBeDefined();
    expect(queryByTestId('action-button')).toBeNull();
  });

  it('renders correctly with action button', () => {
    const { getByTestId, queryByLabelText } = renderWithProvider(
      <NavigationBarTrail title="Title" action={actionButtonProps} />,
    );
    expect(getByTestId('action-button')).toBeDefined();
    expect(queryByLabelText('ChevronFarLeft')).toBeNull();
    expect(queryByLabelText('Right Icon')).toBeNull();
  });

  it('calls onPress when left button is pressed', () => {
    const { getByLabelText } = renderWithProvider(
      <NavigationBarTrail title="Title" left={leftButtonProps} />,
    );
    fireEvent.press(getByLabelText('Back'));
    expect(leftButtonProps.onPress).toHaveBeenCalledTimes(1);
  });

  it('calls onPress when right button is pressed', () => {
    const { getByLabelText } = renderWithProvider(
      <NavigationBarTrail title="Title" right={rightButtonProps} />,
    );
    fireEvent.press(getByLabelText('Right Icon'));
    expect(rightButtonProps.onPress).toHaveBeenCalledTimes(1);
  });

  it('calls onPress when action button is pressed', () => {
    const { getByTestId } = renderWithProvider(
      <NavigationBarTrail title="Title" action={actionButtonProps} />,
    );
    fireEvent.press(getByTestId('action-button'));
    expect(actionButtonProps.onPress).toHaveBeenCalledTimes(1);
  });
});
