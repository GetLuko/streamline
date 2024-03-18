import { renderWithProvider } from '../../../../testing/render-with-provider';
import { InputSliderRange } from '../input-slider-range';

describe('InputSliderRange', () => {
  it('renders correctly', () => {
    const onChangeStart = jest.fn();
    const onChangeEnd = jest.fn();
    const { getByText } = renderWithProvider(
      <InputSliderRange
        connector="to"
        maximum={400}
        measurement="m²"
        minimum={0}
        onChangeStart={onChangeStart}
        onChangeEnd={onChangeEnd}
        step={20}
        startValue={100}
        endValue={160}
      />
    );

    expect(getByText('100')).toBeTruthy();
    expect(getByText('to')).toBeTruthy();
    expect(getByText('160')).toBeTruthy();
    expect(getByText('m²')).toBeTruthy();
    expect(getByText('0')).toBeTruthy();
    expect(getByText('400')).toBeTruthy();
  });
});
