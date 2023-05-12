import React from 'react';
import { GestureResponderEvent, Pressable } from 'react-native';
import {
  interpolate,
  interpolateColor,
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
  pressedBackgroundColor,
  disabled,
  shadows,
  withPadding = true,
  animated = true,
  style,
  ...rest
}: CardProps) => {
  const pressInAnimatedValue = useSharedValue(0);

  const { animation, colors } = useStreamlineTheme();

  const handlePressIn = (e: GestureResponderEvent) => {
    pressInAnimatedValue.value = 1;
    onPressIn?.(e);
  };

  const handlePressOut = (e: GestureResponderEvent) => {
    pressInAnimatedValue.value = 0;
    onPressOut?.(e);
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

    const hasColorInterpolation =
      backgroundColor != null && pressedBackgroundColor != null;

    const innerBackgroundColor = hasColorInterpolation
      ? withTiming(
          interpolateColor(
            pressInAnimatedValue.value,
            [0, 1],
            [colors[backgroundColor], colors[pressedBackgroundColor]]
          )
        )
      : backgroundColor
      ? colors[backgroundColor]
      : undefined;

    return {
      transform: [{ scale }],
      backgroundColor: innerBackgroundColor,
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
          <AnimatedBox
            borderRadius="lg"
            paddingHorizontal={withPadding ? 'md' : undefined}
            paddingVertical={withPadding ? 'md' : undefined}
            flexGrow={1}
            flexShrink={1}
            style={[style, animatedStyle]}
            {...(shadows ? getShadowsStyle(shadows) : {})}
            {...rest}
          >
            {React.Children.map(children, (child) =>
              React.isValidElement(child) ? React.cloneElement(child) : child
            )}
          </AnimatedBox>
        </Box>
      </Pressable>
    </AnimatedBox>
  );
};
