import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from 'react-native-reanimated';
import { AnimatedScrollView } from 'react-native-reanimated/lib/typescript/reanimated2/component/ScrollView';

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

  const animatedRef = useAnimatedRef<AnimatedScrollView>();
  const scrollOffset = useScrollViewOffset(animatedRef);

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
      <Animated.ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        alwaysBounceHorizontal={false}
        ref={animatedRef}
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
      </Animated.ScrollView>
    </Box>
  );
};
