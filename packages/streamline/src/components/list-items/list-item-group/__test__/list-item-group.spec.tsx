import React from 'react';
import { fireEvent, waitFor } from '@testing-library/react-native';

import { renderWithProvider } from '../../../../testing/render-with-provider';

import { ListItemProps } from '../../list-item/list-item.types';
import { ListItemGroup } from '../list-item-group';

const ITEMS: ListItemProps[] = [
  {
    title: 'Item 1',
    onPress: jest.fn(),
  },
  {
    title: 'Item 2',
  },
];

describe('ListItemGroup', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render successfully', () => {
    const { container } = renderWithProvider(
      <ListItemGroup description="description" items={ITEMS} title="title" />
    );
    expect(container).toBeTruthy();
  });

  it('should render items successfully', () => {
    const { container, getByText } = renderWithProvider(
      <ListItemGroup description="description" items={ITEMS} title="title" />
    );
    expect(container).toBeTruthy();
    expect(getByText(ITEMS[0].title)).toBeTruthy();
    expect(getByText(ITEMS[1].title)).toBeTruthy();
  });

  it('should call onPress when item pressed', async () => {
    // Given
    const { getByText } = renderWithProvider(
      <ListItemGroup description="description" items={ITEMS} title="title" />
    );

    // When
    fireEvent.press(getByText(ITEMS[0].title));

    // Then
    await waitFor(() => expect(ITEMS[0].onPress).toHaveBeenCalledTimes(1));
  });
});
