import NavigationBarProgress from './navigation-bar-progress';
import { renderWithProvider } from '../../../testing/render-with-provider';

describe('NavigationBarProgress', () => {
  it('renders correctly with default props', () => {
    const { UNSAFE_root } = renderWithProvider(
      <NavigationBarProgress
        totalNumberOfSteps={4}
        currentStep={2}
        currentStepProgress={50}
      />
    );
    expect(UNSAFE_root).toBeTruthy();
  });
});
