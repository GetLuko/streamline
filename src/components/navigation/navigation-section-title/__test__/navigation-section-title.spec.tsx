import { fireEvent } from '@testing-library/react-native';

import { renderWithProvider } from '../../../../testing/render-with-provider';
import { NavigationSectionTitle } from '../navigation-section-title';
import { NavigationSectionTitleProps } from '../navigation-section-title.types';

describe('NavigationSectionTitle', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  const actionProps: NavigationSectionTitleProps['rightComponent'] = {
    type: 'action',
    onPress: jest.fn(),
    title: 'See All',
    testID: 'action-button',
  };

  const switchProps: NavigationSectionTitleProps['rightComponent'] = {
    type: 'switch',
    action: jest.fn(),
    value: true,
    testID: 'switch-button',
  };

  it('renders correctly with default props', () => {
    const { getByText } = renderWithProvider(
      <NavigationSectionTitle title="Title" />
    );
    expect(getByText('Title')).toBeDefined();
  });

  it('renders correctly the switch button', () => {
    const { getByText, getByTestId } = renderWithProvider(
      <NavigationSectionTitle title="Title" rightComponent={switchProps} />
    );
    expect(getByText('Title')).toBeDefined();
    expect(getByTestId('switch-button')).toBeDefined();
  });

  it('renders correctly the action button', () => {
    const { getByText, getByTestId } = renderWithProvider(
      <NavigationSectionTitle title="Title" rightComponent={actionProps} />
    );
    expect(getByText('Title')).toBeDefined();
    expect(getByTestId('action-button')).toBeDefined();
  });

  it('call the onPress fn when pressing action button', () => {
    const { getByTestId } = renderWithProvider(
      <NavigationSectionTitle title="Title" rightComponent={actionProps} />
    );
    fireEvent.press(getByTestId('action-button'));
    expect(actionProps.onPress).toHaveBeenCalled();
  });

  it('call the action fn when pressing switch button', () => {
    const { getByTestId } = renderWithProvider(
      <NavigationSectionTitle title="Title" rightComponent={switchProps} />
    );
    fireEvent(getByTestId('switch-button'), 'valueChange', true);
    expect(switchProps.action).toHaveBeenCalled();
  });
});
