import {
  Extrapolation,
  SharedValue,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
} from 'react-native-reanimated';

import { getShadowsStyle, useStreamlineTheme } from '../../../theme';

import { CURSOR_SIZE } from './input-slider.constants';

const SHADOW_STYLE = getShadowsStyle('moderate');

export const useCursorStyle = ({
  isDisabled,
  position,
  pressed,
  sliderWidth,
}: {
  isDisabled?: boolean;
  position: SharedValue<number>;
  pressed: SharedValue<number>;
  sliderWidth: number;
}) => {
  const { colors } = useStreamlineTheme();

  return useAnimatedStyle(() => {
    const scale = interpolate(pressed.value, [0, 1], [1, 1.5]);
    const backgroundColor = !isDisabled
      ? interpolateColor(
          pressed.value,
          [0, 1],
          [colors.BLUKO_500, colors.BLUKO_600]
        )
      : colors.GREY_500;
    const left = interpolate(
      position.value,
      [0, sliderWidth],
      [-CURSOR_SIZE / 2, sliderWidth - CURSOR_SIZE / 2],
      Extrapolation.CLAMP
    );

    return {
      backgroundColor,
      transform: [{ scale }],
      left,
      ...SHADOW_STYLE,
    };
  });
};
