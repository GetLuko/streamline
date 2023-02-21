import React from 'react';
import isNil from 'lodash.isnil';
import { Pressable, TextStyle, ViewStyle } from 'react-native';
import { usePress } from '../../hooks/usePress';
import { AnimatedBox } from '../../primitives/animated-box/animated-box';
import { useStreamlineTheme } from '../../theme';

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
  type = 'full',
  iconName,
  isTouched,
  onPress,
  text,
}: ButtonProps) => {
  const inneAppearanceValue = getInnerAppearance({
    isDisabled,
    appearance,
  });
  const styles = useStyles(type, inneAppearanceValue);

  if (!isNil(iconName) && type !== 'mini') {
    console.warn('Icon is only supported for mini buttons');
  }

  const isPlaceholder = appearance === 'placeholder';
  const { animatedStyle, onLayout } = useLoadingAnimation({
    type,
    isPlaceholder,
  });

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
          appearance={inneAppearanceValue}
          iconName={iconName}
          type={type}
        />
        <InnerLabel
          isLoading={isResolving || isLoading}
          type={type}
          appearance={inneAppearanceValue}
          text={text}
        />
      </AnimatedBox>
    </Pressable>
  );
};

const useStyles = (
  type?: ButtonProps['type'],
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
      alignSelf: type === 'mini' ? 'flex-start' : undefined,
    },
    activityIndicator: {
      color: appearance === 'secondary' ? colors.BLACK : colors.PURE_WHITE_1000,
    },
    pressableBackgroundColor,
  };
};
