import React from 'react';
import { fireEvent } from '@testing-library/react-native';
import NavigationTitle, { NavigationTitleProps } from './navigation-title';
import { renderWithProvider } from '../../../testing/render-with-provider';

describe('NavigationTitle', () => {
  const defaultProps: NavigationTitleProps = {
    title: 'Title',
  };

  it('renders correctly with default props', () => {
    const { getByText } = renderWithProvider(
      <NavigationTitle {...defaultProps} />
    );
    expect(getByText('Title')).toBeDefined();
  });

  it('renders correctly with header prop', () => {
    const { getByText } = renderWithProvider(
      <NavigationTitle {...defaultProps} header="Header" />
    );
    expect(getByText('Title')).toBeDefined();
    expect(getByText('Header')).toBeDefined();
  });

  it('renders correctly with value prop', () => {
    const { getByText } = renderWithProvider(
      <NavigationTitle {...defaultProps} value="Value" />
    );
    expect(getByText('Title')).toBeDefined();
    expect(getByText('Value')).toBeDefined();
  });

  it('renders correctly with icon prop', () => {
    const { getByLabelText } = renderWithProvider(
      <NavigationTitle
        {...defaultProps}
        icon="Area"
        buttonIconAccessibilityLabel="test"
      />
    );
    expect(getByLabelText('test')).toBeDefined();
  });

  it('renders correctly with all elements', () => {
    const { getByLabelText, getByText } = renderWithProvider(
      <NavigationTitle
        {...defaultProps}
        header="Header"
        value="Value"
        icon="Area"
        buttonIconAccessibilityLabel="test"
      />
    );
    expect(getByText('Header')).toBeDefined();
    expect(getByText('Title')).toBeDefined();
    expect(getByText('Value')).toBeDefined();
    expect(getByLabelText('test')).toBeDefined();
  });

  it('calls onIconPress when icon is pressed', () => {
    const mockOnIconPress = jest.fn();
    const { getByLabelText } = renderWithProvider(
      <NavigationTitle
        {...defaultProps}
        icon="Area"
        buttonIconAccessibilityLabel="test"
        onIconPress={mockOnIconPress}
      />
    );
    fireEvent.press(getByLabelText('test'));
    expect(mockOnIconPress).toHaveBeenCalledTimes(1);
  });

  it('renders correctly with long text in header, title, and value', () => {
    const longTextHeader =
      'Very very very very very looooong text in the header';
    const longTextTitle = 'Very very very very very looooong text in the title';
    const longTextValue =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et sapien eu purus blandit tincidunt a vitae magna. In hac habitasse platea dictumst. Sed aliquet est eu lacus tempor, ut semper sapien auctor.';

    const { getByText } = renderWithProvider(
      <NavigationTitle
        appearance="light"
        position="center"
        title={longTextTitle}
        header={longTextHeader}
        value={longTextValue}
      />
    );

    const headerElement = getByText(longTextHeader);
    const titleElement = getByText(longTextTitle);
    const valueElement = getByText(longTextValue);

    expect(headerElement).toBeDefined();
    expect(titleElement).toBeDefined();
    expect(valueElement).toBeDefined();
  });
});
