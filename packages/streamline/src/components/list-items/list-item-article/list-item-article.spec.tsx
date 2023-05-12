import React from 'react';
import { fireEvent, waitFor } from '@testing-library/react-native';

import { renderWithProvider } from '../../../testing/render-with-provider';

import ListItemArticle from './list-item-article';

describe('ListItemArticle', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should call onPress when pressed', async () => {
    // Given
    const onPress = jest.fn();
    const { getByText } = renderWithProvider(
      <ListItemArticle
        imageSource={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
        header="Header"
        title="Title"
        description="Description"
        onPress={onPress}
      />
    );

    // When
    fireEvent.press(getByText('Header'));

    // Then
    await waitFor(() => expect(onPress).toHaveBeenCalledTimes(1));
  });
});
