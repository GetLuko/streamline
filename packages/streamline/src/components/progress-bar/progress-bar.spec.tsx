import { renderWithProvider } from '../../testing/render-with-provider';
import ProgressBar from './progress-bar';

describe('ProgressBar', () => {
  it('should render successfully - size lg', () => {
    const { container } = renderWithProvider(
      <ProgressBar progress={50} size="lg" />
    );
    expect(container).toBeTruthy();
  });

  it('should render successfully - size sm', () => {
    const { container } = renderWithProvider(
      <ProgressBar progress={100} size="sm" />
    );
    expect(container).toBeTruthy();
  });
});
