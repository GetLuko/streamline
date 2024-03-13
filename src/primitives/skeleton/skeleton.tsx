import { LinearGradient } from 'expo-linear-gradient';
import React, { useContext } from 'react';
import {
  DimensionValue,
  LayoutChangeEvent,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

import { AnimationContext } from '../../contexts/disable-animation.context';
import { useStreamlineTheme } from '../../theme';
import { AnimatedBox } from '../animated-box/animated-box';

import { SIZES } from './skeleton.constants';
import { SkeletonProps } from './skeleton.types';

const START_OPACITY = 1;
const END_OPACITY = 0.8;
const START_TRANSLATE_X = 0;
const SQUARE_DURATION = 400;
const ROW_DURATION = 600;
const SQUARE_WIDTH_RATIO = 8;
const ROW_WIDTH_RATIO = 4;
const Y = 0.5;
const START_X = 0;
const END_X = 1;

export const Skeleton = ({
  percentage = 100,
  shape = 'row',
  size = 'md',
}: SkeletonProps) => {
  const { disableAnimation } = useContext(AnimationContext);
  const { colors } = useStreamlineTheme();

  const isSquare = shape === 'square';
  const height = SIZES[size];

  const animationWidth =
    height / (isSquare ? SQUARE_WIDTH_RATIO : ROW_WIDTH_RATIO);
  const duration = isSquare ? SQUARE_DURATION : ROW_DURATION;

  const styles = useStyles();

  const translateX = useSharedValue(START_TRANSLATE_X);
  const opacity = useSharedValue(START_OPACITY);

  const onLayout = (event: LayoutChangeEvent) => {
    if (disableAnimation) {
      return;
    }

    translateX.value = event.nativeEvent.layout.width;
    opacity.value = END_OPACITY;
  };

  const animationStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withRepeat(
            withTiming(translateX.value, {
              duration,
              easing: Easing.ease,
            }),
            -1
          ),
        },
      ],
      opacity: withRepeat(
        withTiming(opacity.value, {
          duration,
          easing: Easing.ease,
        }),
        -1
      ),
    };
  });
  const width: DimensionValue = isSquare ? height : `${percentage}%`;
  const borderRadius = size === 'sm' ? 'sm' : 'md';

  return (
    <AnimatedBox
      height={height}
      width={width}
      borderRadius={borderRadius}
      overflow="hidden"
    >
      <LinearGradient
        colors={[colors.GREY_150, colors.GREY_200]}
        start={{ x: START_X, y: Y }}
        end={{ x: END_X, y: Y }}
        style={styles.container}
        onLayout={onLayout}
      />
      <AnimatedBox
        backgroundColor="GREY_150"
        width={animationWidth}
        height={height}
        style={animationStyle}
      />
    </AnimatedBox>
  );
};

const useStyles = (): { [key: string]: StyleProp<ViewStyle> } => {
  return {
    container: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    },
  };
};
