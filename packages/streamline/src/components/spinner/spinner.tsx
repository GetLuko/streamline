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

import { Icon } from '../../primitives/icon/icon';
import { Size } from '../../primitives/icon/icon.types';
import { ColorTheme } from '../../theme';

export interface SpinnerProps {
  size?: Size;
  color?: ColorTheme;
}

export function Spinner({ size = 'regular', color = 'BLACK' }: SpinnerProps) {
  const { disableAnimation } = useContext(AnimationContext);

  const rotation = useSharedValue(0);

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
      <Icon size={size} color={color} iconName="Loader" />
    </Animated.View>
  );
}

export default Spinner;
