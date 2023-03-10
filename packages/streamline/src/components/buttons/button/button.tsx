import React from 'react';
import isNil from 'lodash.isnil';
import { Pressable } from 'react-native-ama';
import { TextStyle, ViewStyle } from 'react-native';
import { usePress } from '../../../hooks/use-press.hook';
import { AnimatedBox } from '../../../primitives/animated-box/animated-box';
import { useStreamlineTheme } from '../../../theme';

import { ButtonProps } from './button.types';
import {
  getInnerAppearance,
  getPressableBackgroundColor,
} from './button.utils';
import InnerIcon from './component/inner-icon';
import InnerLabel from './component/inner-label';
import { useLoadingAnimation } from './hook/useLoadingAnimation';

export const Button = ({
  appearance = 'primary',
  isLoading,
  isDisabled,
  size = 'full',
  iconName,
  isTouched,
  onPress,
  text,
  isPlaceholder = false,
}: ButtonProps) => {
  const innerAppearanceValue = getInnerAppearance({
    isDisabled,
    appearance,
  });
  const styles = useStyles(size, innerAppearanceValue);
  const isMini = size === 'mini';

  if (!isNil(iconName) && !isMini) {
    console.warn('Icon is only supported for mini buttons');
  }

  const { animatedStyle, onLayout } = useLoadingAnimation({
    size,
    isPlaceholder,
  });

  const [handlePress, isResolving] = usePress({ onPress });

  const buttonIsDisabled =
    isPlaceholder || isDisabled || isLoading || isTouched || isResolving;

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={text}
      disabled={buttonIsDisabled}
      busy={buttonIsDisabled}
      style={(pressableState) => [
        styles.pressable,
        styles.pressableBackgroundColor({
          pressed: pressableState.pressed,
          isTouched,
          isPlaceholder,
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
          appearance={innerAppearanceValue}
          iconName={iconName}
          size={size}
          isPlaceholder={isPlaceholder}
        />
        <InnerLabel
          isLoading={isResolving || isLoading}
          size={size}
          appearance={innerAppearanceValue}
          text={text}
          isPlaceholder={isPlaceholder}
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
