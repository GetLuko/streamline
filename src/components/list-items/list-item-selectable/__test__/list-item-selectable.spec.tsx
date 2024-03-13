import { fireEvent } from '@testing-library/react-native';
import React from 'react';

import { renderWithProvider } from '../../../../testing/render-with-provider';
import { RightOption } from '../../list-item/list-item.types';
import ListItemSelectable from '../list-item-selectable';
import { ListItemSelectableProps } from '../list-item-selectable.type';

const LONG_HEADER =
  'This is an unrealistically long header that will cause the text to wrap';
const LONG_TITLE = 'This is a long title that will wrap';
const LONG_DESCRIPTION =
  'This is an unrealistically long description that will wrap to the next line';
const LONG_VALUE = 'Value that pushes the title';

const TEST_ID = 'list-item-selectable';
const RIGHT_OPTION: RightOption = {
  accessibilityLabel: 'Test',
  iconName: 'Info',
  onPress: jest.fn(),
  testID: 'right-option',
};

const mockProps: ListItemSelectableProps = {
  description: LONG_DESCRIPTION,
  header: LONG_HEADER,
  isSelected: false,
  onPress: jest.fn(),
  title: LONG_TITLE,
  value: LONG_VALUE,
  testID: TEST_ID,
};

describe('ListItemSelectable', () => {
  it('renderWithProviders correctly', () => {
    const { getByText } = renderWithProvider(
      <ListItemSelectable {...mockProps} />
    );

    expect(getByText(LONG_HEADER)).toBeDefined();
    expect(getByText(LONG_TITLE)).toBeDefined();
    expect(getByText(LONG_DESCRIPTION)).toBeDefined();
    expect(getByText(LONG_VALUE)).toBeDefined();
  });

  it('renderWithProviders correctly when selected', () => {
    const props = { ...mockProps, isSelected: true };

    const { getByText, getByTestId } = renderWithProvider(
      <ListItemSelectable {...props} />
    );

    expect(getByText(LONG_HEADER)).toBeDefined();
    expect(getByText(LONG_TITLE)).toBeDefined();
    expect(getByText(LONG_DESCRIPTION)).toBeDefined();
    expect(getByText(LONG_VALUE)).toBeDefined();

    const checkIcon = getByTestId(`${props.testID}-check-icon`);
    expect(checkIcon).toBeDefined();
  });

  it('calls onPress callback when pressed', () => {
    const { getByTestId } = renderWithProvider(
      <ListItemSelectable {...mockProps} />
    );

    const listItem = getByTestId(`${mockProps.testID}`);
    fireEvent.press(listItem);

    expect(mockProps.onPress).toHaveBeenCalledTimes(1);
  });

  it('calls OnPress when the info button is pressed', () => {
    const { getByTestId } = renderWithProvider(
      <ListItemSelectable {...mockProps} rightOption={{ ...RIGHT_OPTION }} />
    );

    const infoButton = getByTestId(`right-option-info-button`);
    fireEvent.press(infoButton);

    expect(RIGHT_OPTION.onPress).toHaveBeenCalledTimes(1);
  });
});
