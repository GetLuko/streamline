import { useCallback, useEffect, useMemo, useState } from 'react';
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
} from '../../input-slider/input-slider.constants';
import { useCursorStyle } from '../../input-slider/input-slider.hooks';
import {
  positionToValue,
  valueToPosition,
} from '../../input-slider/input-slider.utils';
import { InputSliderRangeProps } from '../input-slider-range.types';

type Props = Omit<InputSliderRangeProps, 'connector' | 'measurement'>;

const RangeSlider = ({
  endValue,
  isDisabled,
  maximum,
  minimum,
  onChangeEnd,
  onChangeStart,
  startValue,
  step,
}: Props) => {
  const startPressed = useSharedValue(0);
  const startPosition = useSharedValue(0);
  const initialStartPosition = useSharedValue(startPosition.value);

  const endPressed = useSharedValue(0);
  const endPosition = useSharedValue(0);
  const initialEndPosition = useSharedValue(startPosition.value);

  const [sliderWidth, setSliderWidth] = useState(0);
  const range = useMemo(() => maximum - minimum, [maximum, minimum]);

  const maximumStart = useMemo(() => endValue - step, [endValue, step]);
  const maximumStartPosition = useMemo(
    () => ((maximumStart - minimum) / range) * sliderWidth,
    [maximumStart, minimum, range, sliderWidth]
  );

  const minimumEnd = useMemo(() => startValue + step, [startValue, step]);
  const minimumEndPosition = useMemo(
    () => ((minimumEnd - minimum) / range) * sliderWidth,
    [minimumEnd, minimum, range, sliderWidth]
  );

  const onStartMove = () => {
    const newValue = positionToValue({
      maximum: maximumStart,
      maximumPosition: maximumStartPosition,
      minimum,
      minimumPosition: 0,
      position: startPosition.value,
      step,
    });
    if (newValue !== startValue) {
      onChangeStart(newValue);
    }
  };

  const onEndMove = () => {
    const newValue = positionToValue({
      maximum,
      maximumPosition: sliderWidth,
      minimum: minimumEnd,
      minimumPosition: minimumEndPosition,
      position: endPosition.value,
      step,
    });
    if (newValue !== endValue) {
      onChangeEnd(newValue);
    }
  };

  const onStartFinalize = () => {
    const finalValue = positionToValue({
      maximum: maximumStart,
      maximumPosition: maximumStartPosition,
      minimum,
      minimumPosition: 0,
      position: startPosition.value,
      step,
    });
    startPosition.value = withTiming(
      valueToPosition({
        maximum: maximumStart,
        maximumPosition: maximumStartPosition,
        minimum,
        minimumPosition: 0,
        value: finalValue,
      })
    );
  };

  const onEndFinalize = () => {
    const finalValue = positionToValue({
      maximum,
      maximumPosition: sliderWidth,
      minimum: minimumEnd,
      minimumPosition: minimumEndPosition,
      position: endPosition.value,
      step,
    });
    endPosition.value = withTiming(
      valueToPosition({
        maximum,
        maximumPosition: sliderWidth,
        minimum,
        minimumPosition: 0,
        value: finalValue,
      })
    );
  };

  const panStart = Gesture.Pan()
    .onBegin(() => {
      if (isDisabled) {
        return;
      }

      startPressed.value = withTiming(1);
      initialStartPosition.value = startPosition.value;
    })
    .onChange((event) => {
      if (isDisabled) {
        return;
      }

      startPosition.value = Math.min(
        maximumStartPosition,
        initialStartPosition.value + event.translationX
      );

      runOnJS(onStartMove)();
    })
    .onFinalize(() => {
      if (isDisabled) {
        return;
      }

      startPressed.value = withTiming(0);
      runOnJS(onStartFinalize)();
    });

  const panEnd = Gesture.Pan()
    .onBegin(() => {
      if (isDisabled) {
        return;
      }

      endPressed.value = withTiming(1);
      initialEndPosition.value = endPosition.value;
    })
    .onChange((event) => {
      if (isDisabled) {
        return;
      }

      endPosition.value = Math.max(
        minimumEndPosition,
        initialEndPosition.value + event.translationX
      );

      runOnJS(onEndMove)();
    })
    .onFinalize(() => {
      if (isDisabled) {
        return;
      }

      endPressed.value = withTiming(0);
      runOnJS(onEndFinalize)();
    });

  const activeSliderStyle = useAnimatedStyle(() => {
    return {
      width: interpolate(
        endPosition.value - startPosition.value,
        [0, sliderWidth],
        [0, sliderWidth],
        Extrapolation.CLAMP
      ),
      transform: [{ translateX: startPosition.value }],
    };
  });

  const startCursorStyle = useCursorStyle({
    isDisabled,
    position: startPosition,
    pressed: startPressed,
    sliderWidth,
  });

  const endCursorStyle = useCursorStyle({
    isDisabled,
    position: endPosition,
    pressed: endPressed,
    sliderWidth,
  });

  useEffect(() => {
    startPosition.value = withTiming(
      valueToPosition({
        maximum,
        maximumPosition: sliderWidth,
        minimum,
        minimumPosition: 0,
        value: startValue,
      })
    );
    endPosition.value = withTiming(
      valueToPosition({
        maximum,
        maximumPosition: sliderWidth,
        minimum,
        minimumPosition: 0,
        value: endValue,
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
        <GestureDetector gesture={panStart}>
          <AnimatedBox
            width={CURSOR_SIZE}
            height={CURSOR_SIZE}
            borderRadius="round"
            position="absolute"
            top={CURSOR_OFFSET}
            style={startCursorStyle}
          />
        </GestureDetector>
        <GestureDetector gesture={panEnd}>
          <AnimatedBox
            width={CURSOR_SIZE}
            height={CURSOR_SIZE}
            borderRadius="round"
            position="absolute"
            top={CURSOR_OFFSET}
            style={endCursorStyle}
          />
        </GestureDetector>
      </Box>
    </GestureHandlerRootView>
  );
};

export default RangeSlider;
