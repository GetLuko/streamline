import { useEffect } from 'react';
import { Pressable } from 'react-native-ama';
import {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { AnimatedBox } from '../../../primitives/animated-box/animated-box';
import { Box } from '../../../primitives/box/box';
import { Text } from '../../../primitives/text/text';

import { TabProps } from './tab.types';
import { getTitleConfig } from './tab.utils';

export const Tab = ({ appearance, isSelected, onPress, title }: TabProps) => {
  const pressed = useSharedValue(0);
  const innerIsSelected = useSharedValue(isSelected ? 1 : 0);

  const titleConfig = getTitleConfig({ appearance });

  useEffect(() => {
    innerIsSelected.value = withTiming(isSelected ? 1 : 0);
  }, [isSelected]);

  const textStyle = useAnimatedStyle(() => {
    const scale = interpolate(pressed.value, [0, 1], [1, 0.9]);

    return {
      transform: [{ scale }],
    };
  });

  const selectedBorderStyle = useAnimatedStyle(() => {
    const width = interpolate(innerIsSelected.value, [0, 1], [0, 100]);

    return {
      width: `${width}%`,
    };
  });

  const onPressIn = () => {
    pressed.value = withTiming(1);
  };

  const onPressOut = () => {
    pressed.value = withTiming(0);
  };

  return (
    <Pressable
      accessibilityRole="tab"
      accessibilityLabel={title}
      onPressIn={onPressIn}
      onPress={onPress}
      onPressOut={onPressOut}
      selected={isSelected}
    >
      <Box paddingBottom="md" flex={1}>
        <AnimatedBox style={textStyle}>
          <Text
            color={
              isSelected ? titleConfig.selectedColor : titleConfig.defaultColor
            }
            opacity={isSelected ? 1 : titleConfig.defaultOpacity}
            variant="bodyBold"
          >
            {title}
          </Text>
        </AnimatedBox>
        <AnimatedBox
          backgroundColor={titleConfig.selectedColor}
          style={selectedBorderStyle}
          height={2}
          position="absolute"
          bottom={0}
          alignSelf="center"
        />
      </Box>
    </Pressable>
  );
};
