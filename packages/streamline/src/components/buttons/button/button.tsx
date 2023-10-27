import isNil from 'lodash.isnil';
import React from 'react';
import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { Pressable } from 'react-native-ama';

import { usePress } from '../../../hooks/use-press.hook';
import { AnimatedBox } from '../../../primitives/animated-box/animated-box';
import { Box } from '../../../primitives/box/box';
import { useStreamlineTheme } from '../../../theme';
import { getShadowsStyle } from '../../../theme/shadows';
import { ButtonProps } from './button.types';
import { getPressableBackgroundColor } from './button.utils';
import InnerIcon from './component/inner-icon';
import InnerLabel from './component/inner-label';
import { useLoadingAnimation } from './hook/useLoadingAnimation';

export const Button = ({
  appearance = 'primary',
  iconName,
  isDisabled,
  isLoading,
  isSkeleton = false,
  isTouched,
  onPress,
  testID,
  pointerEvents,
  size = 'full',
  text,
  isBusy,
  isFloating = false,
  isPreview = false,
}: ButtonProps) => {
  const styles = useStyles(size, appearance, isFloating);
  const isMini = size === 'mini';

  if (!isNil(iconName) && !isMini) {
    console.warn('Icon is only supported for mini buttons');
  }

  const { animatedStyle, onLayout } = useLoadingAnimation({
    size,
    isSkeleton,
  });

  const [handlePress, isResolving] = usePress({ onPress });

  const buttonIsDisabled =
    isSkeleton || isDisabled || isLoading || isTouched || isResolving || isBusy;

  return (
    <Pressable
      testID={testID}
      pointerEvents={pointerEvents}
      accessibilityRole="button"
      accessibilityLabel={text}
      accessibilityState={{ busy: buttonIsDisabled }}
      disabled={buttonIsDisabled}
      busy={buttonIsDisabled}
      style={(pressableState) => [
        styles.pressable,
        styles.pressableBackgroundColor({
          pressed: pressableState.pressed,
          isTouched,
          isSkeleton,
          isDisabled,
        }),
      ]}
      onPress={handlePress}
      onLayout={onLayout}
    >
      {isPreview ? (
        <Box
          width={5}
          style={StyleSheet.absoluteFillObject}
          backgroundColor="BLACK"
        />
      ) : null}
      <AnimatedBox
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        /* xs: creates accessibility issue */
        paddingVertical={isMini ? 'xs' : 'sm'}
        paddingHorizontal={isMini ? 'sm' : 'lg'}
        style={animatedStyle}
        overflow="hidden"
      >
        <InnerIcon
          isLoading={isResolving || isLoading}
          appearance={appearance}
          iconName={iconName}
          size={size}
          isSkeleton={isSkeleton}
          isDisabled={isDisabled}
        />
        <InnerLabel
          isLoading={isResolving || isLoading}
          appearance={appearance}
          text={text}
          isSkeleton={isSkeleton}
          isDisabled={isDisabled}
          isMini={isMini}
        />
      </AnimatedBox>
    </Pressable>
  );
};

const useStyles = (
  size?: ButtonProps['size'],
  appearance?: ButtonProps['appearance'],
  isFloating?: ButtonProps['isFloating']
): {
  pressable: ViewStyle;
  activityIndicator: TextStyle;
  pressableBackgroundColor: ReturnType<typeof getPressableBackgroundColor>;
} => {
  const { colors, borderRadii } = useStreamlineTheme();
  const pressableBackgroundColor = getPressableBackgroundColor(
    colors,
    appearance
  );

  return {
    pressable: {
      borderRadius: borderRadii.lg,
      ...(isFloating ? getShadowsStyle('strong') : {}),
      overflow: 'hidden',
    },
    activityIndicator: {
      color: appearance === 'secondary' ? colors.BLACK : colors.PURE_WHITE_1000,
    },
    pressableBackgroundColor,
  };
};
