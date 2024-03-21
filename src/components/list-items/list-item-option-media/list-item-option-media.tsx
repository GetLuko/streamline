import { useEffect } from 'react';
import { Pressable } from 'react-native-ama';
import {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { usePress } from '../../../hooks/use-press.hook';
import { AnimatedBox } from '../../../primitives/animated-box/animated-box';
import { useStreamlineTheme } from '../../../theme';

import { BottomContent } from './components/bottom-content';
import { TopContent } from './components/top-content';
import { ListItemOptionMediaSkeleton } from './list-item-option-media-skeleton';
import {
  CONTAINER_WIDTH,
  HIGHLIGHT_BORDER_WIDTH,
  HIGHLIGHT_WIDTH,
} from './list-item-option-media.constants';
import { ListItemOptionMediaProps } from './list-item-option-media.types';

export const ListItemOptionMedia = ({
  accessibilityLabel,
  iconName,
  isDisabled,
  isSelected,
  isSkeleton,
  onLongPress,
  onPress,
  title,
}: ListItemOptionMediaProps) => {
  const [handlePress, isResolving] = usePress({ onPress });
  const { colors } = useStreamlineTheme();

  const isPressed = useSharedValue(0);
  const isHighlighted = useSharedValue(isSelected ? 1 : 0);

  useEffect(() => {
    isHighlighted.value = withTiming(isSelected ? 1 : 0);
  }, [isSelected]);

  const highlightStyle = useAnimatedStyle(() => {
    return {
      opacity: isHighlighted.value,
    };
  });

  const containerStyle = useAnimatedStyle(() => {
    const defaultBackgroundColor = interpolateColor(
      isHighlighted.value,
      [0, 1],
      [colors.PURE_WHITE_1000, colors.BLUKO_25]
    );
    const pressedBackgroundColor = interpolateColor(
      isHighlighted.value,
      [0, 1],
      [colors.PURE_WHITE_1000, colors.BLUKO_50]
    );
    const backgroundColor = interpolateColor(
      isPressed.value,
      [0, 1],
      [defaultBackgroundColor, pressedBackgroundColor]
    );

    const defaultBorderColor = interpolateColor(
      isHighlighted.value,
      [0, 1],
      [colors.GREY_100, colors.BLUKO_500]
    );
    const pressedBorderColor = interpolateColor(
      isHighlighted.value,
      [0, 1],
      [colors.GREY_300, colors.BLUKO_600]
    );
    const borderColor = interpolateColor(
      isPressed.value,
      [0, 1],
      [defaultBorderColor, pressedBorderColor]
    );

    return {
      backgroundColor,
      borderColor,
    };
  });

  if (isSkeleton) {
    return <ListItemOptionMediaSkeleton />;
  }

  const onPressIn = () => {
    isPressed.value = withTiming(1);
  };

  const onPressOut = () => {
    isPressed.value = withTiming(0);
  };

  return (
    <Pressable
      accessibilityRole="radio"
      accessibilityLabel={accessibilityLabel ?? title}
      disabled={isDisabled}
      onPress={handlePress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      onLongPress={onLongPress}
      selected={isSelected}
    >
      <>
        <AnimatedBox
          position="absolute"
          top={-HIGHLIGHT_BORDER_WIDTH}
          left={-HIGHLIGHT_BORDER_WIDTH}
          right={-HIGHLIGHT_BORDER_WIDTH}
          bottom={-HIGHLIGHT_BORDER_WIDTH}
          backgroundColor="BLUKO_100"
          style={highlightStyle}
          borderRadius="lg"
          width={HIGHLIGHT_WIDTH}
        />
        <AnimatedBox
          alignItems="center"
          paddingHorizontal="md"
          paddingVertical="xl"
          borderRadius="lg"
          borderWidth={2}
          style={containerStyle}
          width={CONTAINER_WIDTH}
        >
          <TopContent
            iconName={iconName}
            isDisabled={isDisabled}
            isLoading={isResolving}
            isSelected={isSelected}
          />
          <BottomContent
            title={title}
            isDisabled={isDisabled}
            isSelected={isSelected}
          />
        </AnimatedBox>
      </>
    </Pressable>
  );
};
