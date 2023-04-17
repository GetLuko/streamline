import React from 'react';
import isNil from 'lodash.isnil';
import { Pressable } from 'react-native-ama';
import { TextStyle, ViewStyle } from 'react-native';
import { usePress } from '../../../hooks/use-press.hook';
import { AnimatedBox } from '../../../primitives/animated-box/animated-box';
import { useStreamlineTheme } from '../../../theme';

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
}: ButtonProps) => {
  const styles = useStyles(size, appearance);
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
      <AnimatedBox
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        /* xs: creates accessibility issue */
        paddingVertical={isMini ? 'xs' : 'sm'}
        paddingHorizontal={isMini ? 'sm' : 'lg'}
        style={animatedStyle}
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
  appearance?: ButtonProps['appearance']
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
      alignSelf: size === 'mini' ? 'flex-start' : undefined,
    },
    activityIndicator: {
      color: appearance === 'secondary' ? colors.BLACK : colors.PURE_WHITE_1000,
    },
    pressableBackgroundColor,
  };
};
