import { fireEvent } from '@testing-library/react-native';
import React from 'react';

import CardHighlight from './card-highlight';
import { CardHighlightProps } from './card-highlight.types';
import { renderWithProvider } from '../../../testing/render-with-provider';

describe('CardHighlight', () => {
  const mockOnPress = jest.fn();

  const props: CardHighlightProps = {
    title: 'Title',
    description: 'Description',
    tag: { iconName: 'Area', text: 'Light' },
    onPress: mockOnPress,
    media: {
      uri: 'https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png',
    },
    testID: 'card-highlight',
  };
  it('should render successfully', () => {
    const { UNSAFE_root } = renderWithProvider(<CardHighlight {...props} />);
    expect(UNSAFE_root).toBeTruthy();
  });

  it('should call onPress when pressed', () => {
    const { getByTestId } = renderWithProvider(<CardHighlight {...props} />);
    const card = getByTestId('card-highlight');
    fireEvent.press(card);
    expect(mockOnPress).toHaveBeenCalled();
  });

  it('should render a skeleton when isSkeleton is true', () => {
    const { getByTestId } = renderWithProvider(
      <CardHighlight {...props} isSkeleton />,
    );
    const card = getByTestId('card-highlight-skeleton');
    expect(card).toBeTruthy();
  });
});