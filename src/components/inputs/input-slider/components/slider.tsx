import { useCallback, useEffect, useState } from 'react';
import { LayoutChangeEvent } from 'react-native';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import {
  Extrapolation,
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { AnimatedBox } from '../../../../primitives/animated-box/animated-box';
import { Box } from '../../../../primitives/box/box';
import {
  CURSOR_OFFSET,
  CURSOR_SIZE,
  SLIDER_HEIGHT,
} from '../input-slider.constants';
import { useCursorStyle } from '../input-slider.hooks';
import { InputSliderProps } from '../input-slider.types';
import { positionToValue, valueToPosition } from '../input-slider.utils';

type Props = Omit<InputSliderProps, 'measurement'>;

const Slider = ({
  isDisabled,
  maximum,
  minimum,
  onChange,
  step,
  value,
}: Props) => {
  const pressed = useSharedValue(0);
  const position = useSharedValue(0);
  const initialPosition = useSharedValue(position.value);
  const [sliderWidth, setSliderWidth] = useState(0);

  const onMove = () => {
    const newValue = positionToValue({
      maximum,
      maximumPosition: sliderWidth,
      minimum,
      minimumPosition: 0,
      position: position.value,
      step,
    });
    if (newValue !== value) {
      onChange(newValue);
    }
  };

  const onMoveEnd = () => {
    const endValue = positionToValue({
      maximum,
      maximumPosition: sliderWidth,
      minimum,
      minimumPosition: 0,
      position: position.value,
      step,
    });
    position.value = withTiming(
      valueToPosition({
        maximum,
        maximumPosition: sliderWidth,
        minimum,
        minimumPosition: 0,
        value: endValue,
      })
    );
  };

  const pan = Gesture.Pan()
    .onBegin(() => {
      if (isDisabled) {
        return;
      }
      pressed.value = withTiming(1);
      initialPosition.value = position.value;
    })
    .onChange((event) => {
      if (isDisabled) {
        return;
      }
      position.value = initialPosition.value + event.translationX;
      runOnJS(onMove)();
    })
    .onFinalize(() => {
      if (isDisabled) {
        return;
      }
      pressed.value = withTiming(0);
      runOnJS(onMoveEnd)();
    });

  pan.config = { testId: 'cursor' };

  const activeSliderStyle = useAnimatedStyle(() => {
    return {
      width: interpolate(
        position.value,
        [0, sliderWidth],
        [0, sliderWidth],
        Extrapolation.CLAMP
      ),
    };
  });

  const cursorStyle = useCursorStyle({
    isDisabled,
    position,
    pressed,
    sliderWidth,
  });

  useEffect(() => {
    position.value = withTiming(
      valueToPosition({
        maximum,
        maximumPosition: sliderWidth,
        minimum,
        minimumPosition: 0,
        value,
      })
    );
  }, [sliderWidth]);

  const onLayout = useCallback((event: LayoutChangeEvent) => {
    setSliderWidth(event.nativeEvent.layout.width);
  }, []);

  const sliderBackgroundColor = isDisabled ? 'GREY_150' : 'GREY_50';
  const activeSliderBackgroundColor = isDisabled ? 'GREY_500' : 'BLUKO_500';

  return (
    <GestureHandlerRootView>
      <Box paddingVertical="md" alignItems="center" justifyContent="center">
        <Box
          backgroundColor={sliderBackgroundColor}
          width="100%"
          height={SLIDER_HEIGHT}
          borderRadius="round"
          onLayout={onLayout}
        />
        <AnimatedBox
          backgroundColor={activeSliderBackgroundColor}
          height={SLIDER_HEIGHT}
          borderRadius="round"
          position="absolute"
          marginTop="md"
          left={0}
          style={activeSliderStyle}
        />
        <GestureDetector gesture={pan}>
          <AnimatedBox
            width={CURSOR_SIZE}
            height={CURSOR_SIZE}
            borderRadius="round"
            position="absolute"
            top={CURSOR_OFFSET}
            style={cursorStyle}
          />
        </GestureDetector>
      </Box>
    </GestureHandlerRootView>
  );
};

export default Slider;
