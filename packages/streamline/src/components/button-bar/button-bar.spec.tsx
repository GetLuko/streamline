import { fireEvent } from '@testing-library/react-native';
import React from 'react';

import { renderWithProvider } from '../../testing/render-with-provider';
import { ButtonProps } from '../../types';
import { ButtonBar } from './button-bar';

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

  // it('should render skeleton items when isSkeleton prop is true', () => {
  //   const { getByTestId } = renderWithProvider(
  //     <ButtonBar buttons={[]} isSkeleton={true} />
  //   );

  //   const skeletonItemTestIDs = [
  //     'Skeleton_0',
  //     'Skeleton_1',
  //     'Skeleton_2',
  //     'Skeleton_3',
  //     'Skeleton_4',
  //   ];

  //   skeletonItemTestIDs.forEach((testID) => {
  //     const skeletonElement = getByTestId(testID);
  //     expect(skeletonElement).toBeTruthy();
  //   });
  // });

  it('does not scroll when isSkeleton is true', () => {
    const { getByTestId } = renderWithProvider(
      <ButtonBar buttons={[]} isSkeleton testID="ButtonBar" />
    );
    const scrollView = getByTestId('ButtonBar_container');

    expect(scrollView.props).toHaveProperty('scrollEnabled', false);
  });
});
