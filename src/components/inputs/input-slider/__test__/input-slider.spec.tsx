import { renderWithProvider } from '../../../../testing/render-with-provider';
import { InputSlider } from '../input-slider';

describe('InputSlider', () => {
  it('renders correctly', () => {
    const onChange = jest.fn();
    const { getByText } = renderWithProvider(
      <InputSlider
        maximum={40}
        measurement="Meters"
        minimum={16}
        onChange={onChange}
        step={2}
        value={18}
      />
    );

    expect(getByText('18')).toBeTruthy();
    expect(getByText('Meters')).toBeTruthy();
    expect(getByText('16')).toBeTruthy();
    expect(getByText('40')).toBeTruthy();
  });
});
