import { fireEvent } from '@testing-library/react-native';
import React from 'react';

import CardCarousel from '../card-carousel';
import { CardCarouselProps } from '../card-carousel.types';
import { renderWithProvider } from '../../../../testing/render-with-provider';

describe('CardCarousel', () => {
  const mockProps: CardCarouselProps = {
    size: 'large',
    tag: { text: 'Area', iconName: 'Area' },
    title: 'Test Title',
    description: 'Test Description',
    media: { uri: 'https://legacy.reactjs.org/logo-og.png' },
    onPress: jest.fn(),
    onPressIn: jest.fn(),
    onPressOut: jest.fn(),
    isLoading: false,
    testID: 'card-carousel',
    accessibilityLabel: 'Card Carousel',
    isSkeleton: false,
    dismissAction: {
      accessibilityLabel: 'close',
      onDismiss: jest.fn(),
    },
  };

  it('renders properly', () => {
    const { getByText } = renderWithProvider(<CardCarousel {...mockProps} />);

    const titleElement = getByText('Test Title');
    const descriptionElement = getByText('Test Description');

    expect(titleElement).toBeDefined();
    expect(descriptionElement).toBeDefined();
  });

  it('calls onPress when clicked', () => {
    const { getByTestId } = renderWithProvider(<CardCarousel {...mockProps} />);

    const cardElement = getByTestId(`${mockProps.testID}`);
    fireEvent.press(cardElement);

    expect(mockProps.onPress).toHaveBeenCalledTimes(1);
  });

  it('shows spinner when isLoading is true', () => {
    const { getByTestId } = renderWithProvider(
      <CardCarousel {...mockProps} isLoading={true} />
    );

    const spinnerElement = getByTestId(`${mockProps.testID}-close-button`);
    expect(spinnerElement).toBeDefined();
  });

  it('shows skeleton when isSkeleton is true', () => {
    const { getByTestId } = renderWithProvider(
      <CardCarousel {...mockProps} isSkeleton={true} />
    );

    const skeletonElement = getByTestId(`${mockProps.testID}-skeleton`);
    expect(skeletonElement).toBeDefined();
  });
});
