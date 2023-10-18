import { useState } from 'react';
import { LayoutChangeEvent, Pressable } from 'react-native';

import { AnimatedBox } from '../../../primitives/animated-box/animated-box';
import { Box } from '../../../primitives/box/box';
import { Text } from '../../../primitives/text/text';
import { ColorTheme, useStreamlineTheme } from '../../../theme';
import ButtonIcon from '../../buttons/button-icon/button-icon';
import { ButtonIconProps } from '../../buttons/button-icon/button-icon.types';
import { getNavigationTrailTextColor } from './navigation-bar-trail.utils';

const MIN_WIDTH = 40;
const MIN_HEIGHT = 48;

export interface NavigationBarTrailProps {
  title?: string;
  left?: {
    type: 'close' | 'back';
    onPress: () => void;
    testID?: string;
  };
  right?: ButtonIconProps;
  action?: {
    title: string;
    onPress: () => void;
    testID?: string;
  };
  backgroundColor?: ColorTheme;
  appearance?: 'light' | 'dark' | 'primary';
  textOpacityStyle?: { opacity: 0 | 1 };
}

export const NavigationBarTrail = ({
  title,
  left,
  right,
  action,
  backgroundColor,
  appearance = 'primary',
  textOpacityStyle,
}: NavigationBarTrailProps) => {
  const { titleColor, actionColor } = getNavigationTrailTextColor({
    appearance,
  });

  const { spacing } = useStreamlineTheme();

  const minWidth = left || right ? MIN_WIDTH + spacing.xs : spacing.md;

  const [rightWidth, setRightWidth] = useState(minWidth);

  const handleOnRightLayout = (event: LayoutChangeEvent) => {
    const { width } = event.nativeEvent.layout;
    const rightWidth = width ? width + spacing.xs : minWidth;
    setRightWidth(rightWidth);
  };

  return (
    <Box
      paddingHorizontal="xs"
      paddingVertical="xxs"
      backgroundColor={backgroundColor}
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      minHeight={MIN_HEIGHT}
    >
      <Box flex={1} position="absolute" left={minWidth} right={rightWidth}>
        <AnimatedBox style={textOpacityStyle}>
          <Text
            variant="bodyBold"
            color={titleColor}
            textAlign="center"
            numberOfLines={1}
          >
            {title}
          </Text>
        </AnimatedBox>
      </Box>
      {left ? (
        <ButtonIcon
          testID={left.testID}
          iconName={left.type === 'close' ? 'Cross' : 'ChevronFarLeft'}
          accessibilityLabel={left.type === 'close' ? 'Close' : 'Back'}
          onPress={left.onPress}
          size="large"
          appearance={appearance}
          shouldDisplaySpinner={false}
        />
      ) : (
        <Box />
      )}

      <Box
        flexDirection="row"
        alignItems="center"
        backgroundColor={backgroundColor}
        onLayout={handleOnRightLayout}
      >
        {action ? (
          <Pressable
            testID={action.testID}
            onPress={action?.onPress}
            hitSlop={10}
          >
            {({ pressed }) => (
              <Text
                variant="bodyBold"
                color={actionColor}
                opacity={pressed ? 0.5 : 1}
                marginHorizontal="xs"
              >
                {action?.title}
              </Text>
            )}
          </Pressable>
        ) : null}
        {right ? (
          <ButtonIcon
            iconName={right.iconName}
            accessibilityLabel={right.accessibilityLabel}
            onPress={right.onPress}
            size="large"
            appearance={appearance}
          />
        ) : null}
      </Box>
    </Box>
  );
};

export default NavigationBarTrail;
