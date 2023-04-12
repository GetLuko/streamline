import { fireEvent } from '@testing-library/react-native';
import { renderWithProvider } from '../../testing/render-with-provider';
import { Radio } from './radio';

describe('Radio', () => {
  it('should render successfully', () => {
    const { container } = renderWithProvider(<Radio value={true} />);
    expect(container).toBeTruthy();
  });

  it('should trigger mockOnChange', () => {
    const mockOnChange = jest.fn();
    const { getByTestId } = renderWithProvider(
      <Radio value={true} onChange={mockOnChange} testID="Radio" />
    );
    const radio = getByTestId('Radio');
    fireEvent.press(radio);
    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });

  it('should not trigger mockOnChange', () => {
    const mockOnChange = jest.fn();
    const { getByTestId } = renderWithProvider(
      <Radio value={true} onChange={mockOnChange} testID="Radio" disabled />
    );
    const radio = getByTestId('Radio');
    fireEvent.press(radio);
    expect(mockOnChange).toHaveBeenCalledTimes(0);
  });
});
