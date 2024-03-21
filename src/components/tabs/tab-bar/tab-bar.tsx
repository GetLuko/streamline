import Animated from 'react-native-reanimated';

import { AnimatedBox } from '../../../primitives/animated-box/animated-box';
import { Box } from '../../../primitives/box/box';
import { Tab } from '../tab/tab';
import { getBorderConfig } from '../tab/tab.utils';

import { TabBarProps } from './tab-bar.types';

export const TabBar = ({
  appearance,
  onTabSelected,
  tabs,
  tabIndex,
}: TabBarProps) => {
  const borderConfig = getBorderConfig({ appearance });

  return (
    <Box paddingTop="xs">
      <AnimatedBox
        backgroundColor={borderConfig.backgroundColor}
        height={1}
        position="absolute"
        bottom={0}
        right={0}
        left={0}
        opacity={borderConfig.opacity}
        alignSelf="center"
      />
      <Animated.ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        alwaysBounceHorizontal={false}
      >
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
