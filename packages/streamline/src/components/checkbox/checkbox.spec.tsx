import { fireEvent } from '@testing-library/react-native';
import { renderWithProvider } from '../../testing/render-with-provider';
import { Checkbox } from './checkbox';

describe('Checkbox', () => {
  it('should render successfully', () => {
    const { container } = renderWithProvider(<Checkbox value={true} />);
    expect(container).toBeTruthy();
  });

  it('should trigger mockOnChange', () => {
    const mockOnChange = jest.fn();
    const { getByTestId } = renderWithProvider(
      <Checkbox value={true} onChange={mockOnChange} testID="Checkbox" />
    );
    const checkbox = getByTestId('Checkbox');
    fireEvent.press(checkbox);
    expect(mockOnChange).toHaveBeenNthCalledWith(1, false);
  });

  it('should not trigger mockOnChange', () => {
    const mockOnChange = jest.fn();
    const { getByTestId } = renderWithProvider(
      <Checkbox
        value={true}
        onChange={mockOnChange}
        testID="Checkbox"
        disabled
      />
    );
    const checkbox = getByTestId('Checkbox');
    fireEvent.press(checkbox);
    expect(mockOnChange).toHaveBeenCalledTimes(0);
  });
});
