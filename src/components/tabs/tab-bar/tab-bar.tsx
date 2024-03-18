import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
} from 'react-native';
import {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

import { AnimatedBox } from '../../../primitives/animated-box/animated-box';
import { Box } from '../../../primitives/box/box';
import { useStreamlineTheme } from '../../../theme';
import { Tab } from '../tab/tab';
import { getBorderConfig } from '../tab/tab.utils';

import { TabBarProps } from './tab-bar.types';

export const TabBar = ({
  appearance,
  onTabSelected,
  tabs,
  tabIndex,
}: TabBarProps) => {
  const { spacing } = useStreamlineTheme();
  const borderConfig = getBorderConfig({ appearance });
  const scrollOffset = useSharedValue(0);

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    scrollOffset.value = event.nativeEvent.contentOffset.x;
  };

  const borderStyle = useAnimatedStyle(() => {
    return {
      left: interpolate(
        scrollOffset.value,
        [0, spacing.md],
        [spacing.md, 0],
        Extrapolation.CLAMP
      ),
    };
  });

  return (
    <Box paddingTop="xs">
      <AnimatedBox
        backgroundColor={borderConfig.backgroundColor}
        height={1}
        position="absolute"
        bottom={0}
        right={0}
        style={borderStyle}
        opacity={borderConfig.opacity}
        alignSelf="center"
      />
      <ScrollView
        horizontal
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        alwaysBounceHorizontal={false}
      >
        <Box paddingLeft="md" />
        {tabs.map((title, index) => (
          <Box key={`tab-${index}`} paddingLeft="md">
            <Tab
              appearance={appearance}
              title={title}
              onPress={() => onTabSelected(index)}
              isSelected={index === tabIndex}
            />
          </Box>
        ))}
        <Box paddingLeft="md" />
      </ScrollView>
    </Box>
  );
};
