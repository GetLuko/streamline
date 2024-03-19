import { fireEvent } from '@testing-library/react-native';

import { renderWithProvider } from '../../../testing/render-with-provider';
import { Checkbox } from '../checkbox';

describe('Checkbox', () => {
  it('should render successfully', () => {
    const { root } = renderWithProvider(<Checkbox value={true} />);
    expect(root).toBeTruthy();
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
