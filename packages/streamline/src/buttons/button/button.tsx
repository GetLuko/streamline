import React from 'react';
import isNil from 'lodash.isnil';
import { Pressable, TextStyle, ViewStyle } from 'react-native';
import { usePress } from '../../hooks/usePress';
import { AnimatedBox } from '../../primitives/animated-box/animated-box';
import { useStreamlineTheme } from '../../theme';

import { ButtonProps } from './button.types';
import { getInnerVariant, getPressableBackgroundColor } from './button.utils';
import InnerIcon from './component/inner-icon';
import InnerLabel from './component/inner-label';
import { useLoadingAnimation } from './hook/useLoadingAnimation';

export const Button = ({
  variant = 'primary',
  isLoading,
  isDisabled,
  type = 'full',
  iconName,
  isTouched,
  onPress,
  text,
}: ButtonProps) => {
  const innerVariantValue = getInnerVariant({
    isDisabled,
    variant,
  });
  const styles = useStyles(type, innerVariantValue);

  if (!isNil(iconName) && type !== 'mini') {
    console.warn('Icon is only supported for mini buttons');
  }

  const isPlaceholder = variant === 'placeholder';
  const { animatedStyle, onLayout } = useLoadingAnimation({ type, isPlaceholder });

  const [handlePress, isResolving] = usePress({ onPress });

  return (
    <Pressable
      disabled={
        isPlaceholder || isDisabled || isLoading || isTouched || isResolving
      }
      style={(pressableState) => [
        styles.pressable,
        styles.pressableBackgroundColor({
          pressed: pressableState.pressed,
          isTouched,
        }),
      ]}
      onPress={handlePress}
      onLayout={onLayout}
    >
      <AnimatedBox
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        paddingVertical="sm"
        paddingHorizontal="lg"
        style={animatedStyle}
      >
        <InnerIcon
          isLoading={isResolving || isLoading}
          variant={innerVariantValue}
          iconName={iconName}
          type={type}
        />
        <InnerLabel
          isLoading={isResolving || isLoading}
          type={type}
          variant={innerVariantValue}
          text={text}
        />
      </AnimatedBox>
    </Pressable>
  );
};

const useStyles = (
  type?: ButtonProps['type'],
  variant?: ButtonProps['variant']
): {
  pressable: ViewStyle;
  activityIndicator: TextStyle;
  pressableBackgroundColor: ReturnType<typeof getPressableBackgroundColor>;
} => {
  const { colors, borderRadii } = useStreamlineTheme();
  const pressableBackgroundColor = getPressableBackgroundColor(colors, variant);

  return {
    pressable: {
      borderRadius: borderRadii.lg,
      alignSelf: type === 'mini' ? 'flex-start' : undefined,
    },
    activityIndicator: {
      color: variant === 'secondary' ? colors.BLACK : colors.PURE_WHITE_1000,
    },
    pressableBackgroundColor,
  };
};
