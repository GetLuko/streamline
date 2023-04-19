import { Appearance } from '../../../theme/appearance';
import { Box } from '../../../primitives/box/box';
import { FC } from 'react';
import ProgressBar from '../../progress-bar/progress-bar';

export interface NavigationBarProgressProps {
  totalNumberOfSteps: number;
  currentStep: number;
  currentStepProgress: number;
  appareance?: Appearance;
}

export const NavigationBarProgress: FC<NavigationBarProgressProps> = ({
  totalNumberOfSteps,
  currentStep,
  currentStepProgress,
  appareance = 'primary',
}) => {
  return (
    <Box flexDirection={'row'} flex={1} paddingHorizontal={'xxl'}>
      {[...Array(totalNumberOfSteps)].map((_, i) => {
        let progress = 0;
        if (i < currentStep - 1) {
          progress = 100;
        } else if (i === currentStep - 1) {
          progress = currentStepProgress;
        }

        return (
          <Box
            flex={1}
            key={`progress-bar-section-${i}`}
            {...(i !== totalNumberOfSteps - 1 && { marginRight: 'xs' })}
          >
            <ProgressBar progress={progress} appearance={appareance} />
          </Box>
        );
      })}
    </Box>
  );
};

export default NavigationBarProgress;
