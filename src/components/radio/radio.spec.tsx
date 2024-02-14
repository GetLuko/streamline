import { fireEvent } from '@testing-library/react-native';

import { Radio } from './radio';
import { renderWithProvider } from '../../testing/render-with-provider';

describe('Radio', () => {
  it('should render successfully', () => {
    const { UNSAFE_root } = renderWithProvider(<Radio value={true} />);
    expect(UNSAFE_root).toBeTruthy();
  });

  it('should trigger mockOnChange', () => {
    const mockOnChange = jest.fn();
    const { getByTestId } = renderWithProvider(
      <Radio value={true} onChange={mockOnChange} testID="radio" />,
    );
    const radio = getByTestId('radio');
    fireEvent.press(radio);
    expect(mockOnChange).toHaveBeenNthCalledWith(1, false);
  });

  it('should not trigger mockOnChange', () => {
    const mockOnChange = jest.fn();
    const { getByTestId } = renderWithProvider(
      <Radio value={true} onChange={mockOnChange} testID="radio" isDisabled />,
    );
    const radio = getByTestId('radio');
    fireEvent.press(radio);
    expect(mockOnChange).toHaveBeenCalledTimes(0);
  });
});
