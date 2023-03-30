import React from 'react';
import { Pressable } from 'react-native';
import {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { useStreamlineTheme } from '../../theme';
import { getShadowsStyle } from '../../theme/shadows';
import { AnimatedBox } from '../animated-box/animated-box';
import { Box } from '../box/box';

import { CardProps } from './card.types';

export const Card = ({
  onLongPress,
  onPress,
  onPressIn,
  onPressOut,
  children,
  testID,
  accessible,
  backgroundColor,
  disabled,
  shadows,
  withPadding = true,
  animated = true,
  ...rest
}: CardProps) => {
  const pressInAnimatedValue = useSharedValue(0);

  const { animation } = useStreamlineTheme();

  const handlePressIn = () => {
    pressInAnimatedValue.value = 1;
    onPressIn?.();
  };

  const handlePressOut = () => {
    pressInAnimatedValue.value = 0;
    onPressOut?.();
  };

  const animatedStyle = useAnimatedStyle(() => {
    const scale = withTiming(
      interpolate(
        pressInAnimatedValue.value,
        [0, 1],
        [animation.onPressScale.start, animation.onPressScale.end]
      ),
      { duration: animation.onPressScale.duration }
    );
    return {
      transform: [{ scale }],
    };
  });

  return (
    <AnimatedBox
      entering={animated ? animation.appearEntering : undefined}
      exiting={animated ? animation.appearExiting : undefined}
    >
      <Pressable
        disabled={!(onPress || onLongPress) || disabled}
        onLongPress={onLongPress}
        onPress={onPress}
        onPressIn={onPress || onLongPress ? handlePressIn : undefined}
        onPressOut={onPress || onLongPress ? handlePressOut : undefined}
        testID={testID}
        accessible={accessible}
      >
        <Box width={rest.width} height={rest.height}>
          <AnimatedBox style={[animatedStyle]}>
            <Box
              borderRadius="lg"
              paddingHorizontal={withPadding ? 'md' : undefined}
              paddingVertical={withPadding ? 'md' : undefined}
              flexGrow={1}
              flexShrink={1}
              backgroundColor={backgroundColor}
              {...(shadows ? getShadowsStyle(shadows) : {})}
              {...rest}
            >
              {React.Children.map(children, (child) =>
                React.isValidElement(child) ? React.cloneElement(child) : child
              )}
            </Box>
          </AnimatedBox>
        </Box>
      </Pressable>
    </AnimatedBox>
  );
};
