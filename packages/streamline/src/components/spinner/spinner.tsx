import React, { useContext, useEffect } from 'react';
import Animated, {
  cancelAnimation,
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import { AnimationContext } from '../../contexts/disable-animation.context';

import { Box } from '../../primitives/box/box';
import { SPINNER_SIZE } from '../../primitives/icon/icon.constants';
import { Size } from '../../primitives/icon/icon.types';
import { IconSvg } from '../../primitives/icon/IconSvg';
import { ColorTheme } from '../../theme';

export interface SpinnerProps {
  color?: ColorTheme;
  testID?: string;
  size?: Size;
}

export function Spinner({
  size = 'regular',
  color = 'BLACK',
  testID,
}: SpinnerProps) {
  const { disableAnimation } = useContext(AnimationContext);

  const rotation = useSharedValue(0);

  const totalSize = SPINNER_SIZE[size];

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotateZ: `${rotation.value}deg`,
        },
      ],
    };
  }, [rotation.value]);

  useEffect(() => {
    if (disableAnimation) {
      // Disable animations for testing purposes
      return;
    }
    rotation.value = withRepeat(
      withTiming(360, {
        duration: 1000,
        easing: Easing.linear,
      }),
      0
    );
    return () => cancelAnimation(rotation);
  }, [rotation, disableAnimation]);

  return (
    <Animated.View style={animatedStyles}>
      <Box
        width={totalSize}
        height={totalSize}
        justifyContent="center"
        alignItems="center"
        testID={testID}
      >
        <IconSvg color={color} iconName="Loader" isSpinner size={size} />
      </Box>
    </Animated.View>
  );
}

export default Spinner;
