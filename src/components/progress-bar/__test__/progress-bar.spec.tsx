import { renderWithProvider } from '../../../testing/render-with-provider';
import ProgressBar from '../progress-bar';

describe('ProgressBar', () => {
  it('should render successfully - size lg', () => {
    const { root } = renderWithProvider(
      <ProgressBar progress={50} size="lg" />
    );
    expect(root).toBeTruthy();
  });

  it('should render successfully - size sm', () => {
    const { root } = renderWithProvider(
      <ProgressBar progress={100} size="sm" />
    );
    expect(root).toBeTruthy();
  });
});
