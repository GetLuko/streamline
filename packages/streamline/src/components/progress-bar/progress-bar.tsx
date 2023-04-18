import React from 'react';
import { Appearance } from '../../theme/appearance';
import { Box } from '../../primitives/box/box';
import {
  getProgressBarBackgroundColor,
  getProgressBarColor,
} from './progress-bar.utils';

enum ProgressBarSize {
  'lg' = 8,
  'sm' = 4,
}

interface ProgressBarProps {
  /**
   * The progress of the progress bar from 0 to 100
   */
  progress: number;
  appearance?: Appearance;
  size?: 'sm' | 'lg';
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  appearance = 'primary',
  size = 'lg',
}) => {
  const progressBarColor = getProgressBarColor(appearance);
  const { backgroundColor, backgroundOpacity } =
    getProgressBarBackgroundColor(appearance);
  return (
    <Box height={ProgressBarSize[size]} width={'100%'}>
      <Box
        position={'absolute'}
        borderRadius={'round'}
        top={0}
        left={0}
        right={0}
        bottom={0}
        backgroundColor={backgroundColor}
        opacity={backgroundOpacity}
      />
      <Box
        height={ProgressBarSize[size]}
        width={`${progress}%`}
        backgroundColor={progressBarColor}
        borderRadius={'round'}
      />
    </Box>
  );
};

export default ProgressBar;
