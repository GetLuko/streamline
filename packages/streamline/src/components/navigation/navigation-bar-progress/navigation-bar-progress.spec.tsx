import { renderWithProvider } from '../../../testing/render-with-provider';
import NavigationBarProgress from './navigation-bar-progress';

describe('NavigationBarProgress', () => {
  it('renders correctly with default props', () => {
    const { container } = renderWithProvider(
      <NavigationBarProgress
        totalNumberOfSteps={4}
        currentStep={2}
        currentStepProgress={50}
      />
    );
    expect(container).toBeTruthy();
  });
});
