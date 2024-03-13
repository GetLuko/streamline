import { fireEvent } from '@testing-library/react-native';

import { renderWithProvider } from '../../../../testing/render-with-provider';
import { InputCode } from '../input-code';

describe('InputCode', () => {
  it('should render successfully', () => {
    const { UNSAFE_root } = renderWithProvider(
      <InputCode onChange={jest.fn()} length={4} />
    );
    expect(UNSAFE_root).toBeTruthy();
  });

  it('should call onChange with the correct code when inputting values', () => {
    const onChangeMock = jest.fn();
    const { getByTestId } = renderWithProvider(
      <InputCode onChange={onChangeMock} length={4} testID="input-code" />
    );

    fireEvent.changeText(getByTestId('input-code-text-field'), '1234');

    expect(onChangeMock).toHaveBeenCalledWith('1234');
  });
});
