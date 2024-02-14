import { fireEvent } from '@testing-library/react-native';

import Dialog from './dialog';
import { DialogProps } from './dialog.types';
import { renderWithProvider } from '../../testing/render-with-provider';

const mockPrimaryOnPress = jest.fn();
const mockSecondaryOnPress = jest.fn();

const MOCK_PROPS: DialogProps = {
  title: 'Title',
  buttons: {
    primary: {
      text: 'Primary Button',
      onPress: mockPrimaryOnPress,
      appearance: 'primary',
    },
    secondary: {
      text: 'Secondary Button',
      onPress: mockSecondaryOnPress,
      appearance: 'secondary',
    },
    orientation: 'horizontal',
  },
};

describe('Dialog', () => {
  it('renders the dialog title', () => {
    const { getByText } = renderWithProvider(<Dialog {...MOCK_PROPS} />);
    const title = getByText('Title');
    expect(title).toBeTruthy();
  });

  it('renders the primary and secondary buttons', () => {
    const { getByText } = renderWithProvider(<Dialog {...MOCK_PROPS} />);
    const primaryButton = getByText('Primary Button');
    const secondaryButton = getByText('Secondary Button');
    expect(primaryButton).toBeTruthy();
    expect(secondaryButton).toBeTruthy();
  });

  it('calls the onPress function when primary button is clicked', () => {
    const { getByText } = renderWithProvider(<Dialog {...MOCK_PROPS} />);
    const primaryButton = getByText('Primary Button');
    fireEvent.press(primaryButton);
    expect(mockPrimaryOnPress).toHaveBeenCalled();
  });

  it('calls the onPress function when secondary button is clicked', () => {
    const { getByText } = renderWithProvider(<Dialog {...MOCK_PROPS} />);
    const primaryButton = getByText('Secondary Button');
    fireEvent.press(primaryButton);
    expect(mockSecondaryOnPress).toHaveBeenCalled();
  });
});
