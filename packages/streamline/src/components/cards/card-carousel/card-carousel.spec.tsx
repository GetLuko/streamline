import { fireEvent } from '@testing-library/react-native';
import React from 'react';

import '@testing-library/jest-dom/extend-expect';
import { renderWithProvider } from '../../../testing/render-with-provider';
import CardCarousel from './card-carousel';
import { CardCarouselProps } from './card-carousel.types';

describe('CardCarousel', () => {
  const mockProps: CardCarouselProps = {
    size: 'LG',
    iconName: 'Area',
    title: 'Test Title',
    description: 'Test Description',
    backgroundColor: 'GREY_100',
    onPress: jest.fn(),
    onPressIn: jest.fn(),
    onPressOut: jest.fn(),
    isLoading: false,
    testID: 'card-carousel',
    accessibilityLabel: 'Card Carousel',
    isSkeleton: false,
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

    const cardElement = getByTestId('card-carousel');
    fireEvent.press(cardElement);

    expect(mockProps.onPress).toHaveBeenCalledTimes(1);
  });

  it('shows spinner when isLoading is true', () => {
    const { getByTestId } = renderWithProvider(
      <CardCarousel {...mockProps} isLoading={true} />
    );

    const spinnerElement = getByTestId('CardCarousel_spinner_card-carousel');
    expect(spinnerElement).toBeDefined();
  });

  it('shows skeleton when isSkeleton is true', () => {
    const { getByTestId } = renderWithProvider(
      <CardCarousel {...mockProps} isSkeleton={true} />
    );

    const skeletonElement = getByTestId('CardCarousel_skeleton_card-carousel');
    expect(skeletonElement).toBeDefined();
  });
});
