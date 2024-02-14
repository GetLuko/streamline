import ProgressBar from './progress-bar';
import { renderWithProvider } from '../../testing/render-with-provider';

describe('ProgressBar', () => {
  it('should render successfully - size lg', () => {
    const { UNSAFE_root } = renderWithProvider(
      <ProgressBar progress={50} size="lg" />,
    );
    expect(UNSAFE_root).toBeTruthy();
  });

  it('should render successfully - size sm', () => {
    const { UNSAFE_root } = renderWithProvider(
      <ProgressBar progress={100} size="sm" />,
    );
    expect(UNSAFE_root).toBeTruthy();
  });
});
