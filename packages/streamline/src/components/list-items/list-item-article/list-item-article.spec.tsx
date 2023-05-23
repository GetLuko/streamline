import { fireEvent, waitFor } from '@testing-library/react-native';
import React from 'react';

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
  it('should be rendered correctly', async () => {
    // When
    const { getByText, getByLabelText } = renderWithProvider(
      <ListItemArticle
        imageSource={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
        header="Header"
        title="Title"
        description="Description"
      />
    );

    // Then
    await expect(getByText('Header')).toBeDefined();
    await expect(getByText('Title')).toBeDefined();
    await expect(getByText('Description')).toBeDefined();
    await expect(
      getByLabelText(`Header\nTitle\nDescription\nimage`)
    ).toBeDefined();
  });
});
