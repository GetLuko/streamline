import React from 'react';

import { TouchableOpacity } from 'react-native-ama';

import { Icon } from '../../../primitives/icon/icon';
import { ButtonIconProps } from './button-icon.types';
import { getButtonIconColors, getButtonIconSize } from './button-icon.utils';
import { usePress } from '../../../hooks/use-press.hook';
import { AnimatedBox } from '../../../primitives/animated-box/animated-box';
import Spinner from '../../spinner/spinner';

export function ButtonIcon({
  testID,
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
  const isBusy = isLoading || isResolving || isDisabled;

  return (
    <TouchableOpacity
      testID={testID}
      accessibilityLabel={accessibilityLabel}
      accessibilityRole="button"
      onPress={handlePress}
      busy={isBusy}
      disabled={isBusy}
    >
      <AnimatedBox
        alignItems="center"
        justifyContent="center"
        backgroundColor={withContainer ? colors?.backgroundColor : undefined}
        borderRadius={withContainer ? 'round' : undefined}
        {...buttonSize}
      >
        {isLoading || isResolving ? (
          <Spinner size={size} color={colors?.color} />
        ) : (
          <Icon iconName={iconName} size={size} color={colors?.color} />
        )}
      </AnimatedBox>
    </TouchableOpacity>
  );
}

export default ButtonIcon;
