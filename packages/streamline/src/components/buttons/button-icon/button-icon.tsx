import React from 'react';

import { TouchableOpacity } from 'react-native-ama';

import { Icon } from '../../../primitives/icon/icon';
import { ButtonIconProps } from './button-icon.types';
import { getButtonIconColors, getButtonIconSize } from './button-icon.utils';
import { usePress } from '../../../hooks/use-press.hook';
import { AnimatedBox } from '../../../primitives/animated-box/animated-box';
import Spinner from '../../spinner/spinner';

export function ButtonIcon({
  accessibilityLabel,
  iconName,
  onPress,
  appearance = 'primary',
  withContainer = false,
  size = 'regular',
  isLoading = false,
  isDisabled = false,
}: ButtonIconProps) {
  const [handlePress, isResolving] = usePress({ onPress });

  const colors = getButtonIconColors({
    appearance,
    container: withContainer,
    isDisabled,
  });
  const buttonSize = getButtonIconSize(size);
  const spinnerSize = size === 'large' ? 'regular' : 'small';
  const isBusy = isLoading || isResolving || isDisabled;

  return (
    <TouchableOpacity
      accessibilityLabel={accessibilityLabel}
      accessibilityRole="button"
      onPress={handlePress}
      busy={isBusy}
      disabled={isBusy}
      activeOpacity={0.7}
    >
      <AnimatedBox alignItems="center" justifyContent="center" {...buttonSize}>
        <AnimatedBox
          position="absolute"
          top={0}
          right={0}
          bottom={0}
          left={0}
          backgroundColor={withContainer ? colors?.backgroundColor : undefined}
          borderRadius={withContainer ? 'round' : undefined}
          opacity={colors.backgroundOpacity}
        />
        {isLoading || isResolving ? (
          <Spinner
            size={spinnerSize}
            color={colors?.color}
            opacity={colors.opacity}
          />
        ) : (
          <Icon
            iconName={iconName}
            size={size}
            color={colors?.color}
            opacity={colors.opacity}
          />
        )}
      </AnimatedBox>
    </TouchableOpacity>
  );
}

export default ButtonIcon;
