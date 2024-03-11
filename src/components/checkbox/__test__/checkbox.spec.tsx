import { fireEvent } from '@testing-library/react-native';

import { Checkbox } from '../checkbox';
import { renderWithProvider } from '../../../testing/render-with-provider';

describe('Checkbox', () => {
  it('should render successfully', () => {
    const { UNSAFE_root } = renderWithProvider(<Checkbox value={true} />);
    expect(UNSAFE_root).toBeTruthy();
  });

  it('should trigger mockOnChange', () => {
    const mockOnChange = jest.fn();
    const { getByTestId } = renderWithProvider(
      <Checkbox value={true} onChange={mockOnChange} testID="checkbox" />
    );
    const checkbox = getByTestId('checkbox');
    fireEvent.press(checkbox);
    expect(mockOnChange).toHaveBeenNthCalledWith(1, false);
  });

  it('should not trigger mockOnChange', () => {
    const mockOnChange = jest.fn();
    const { getByTestId } = renderWithProvider(
      <Checkbox
        value={true}
        onChange={mockOnChange}
        testID="checkbox"
        isDisabled
      />
    );
    const checkbox = getByTestId('checkbox');
    fireEvent.press(checkbox);
    expect(mockOnChange).toHaveBeenCalledTimes(0);
  });
});
