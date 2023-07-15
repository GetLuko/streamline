import React from 'react';
import { Pressable } from 'react-native';

import { usePress } from '../../../hooks/use-press.hook';
import { AnimatedBox } from '../../../primitives/animated-box/animated-box';
import { Icon } from '../../../primitives/icon/icon';
import { Skeleton } from '../../../primitives/skeleton/skeleton';
import Spinner from '../../spinner/spinner';
import { ButtonIconProps } from './button-icon.types';
import {
  getButtonActiveColors,
  getButtonIconColors,
  getButtonIconSize,
} from './button-icon.utils';

/**
 * Todo - Use pressable from react-native-ama when issue below fixed
 * https://github.com/FormidableLabs/react-native-ama/issues/92
 */
export const ButtonIcon = ({
  accessibilityLabel,
  iconName,
  onPress,
  appearance = 'primary',
  withContainer = false,
  size = 'regular',
  isLoading = false,
  isDisabled = false,
  isSkeleton = false,
  testID,
  isOpaque = false,
  shouldDisplaySpinner = true,
}: ButtonIconProps) => {
  const [handlePress, isResolving] = usePress({ onPress });

  const colors = getButtonIconColors({
    appearance,
    container: withContainer,
    isDisabled,
    isOpaque,
  });
  const buttonSize = getButtonIconSize(size);
  const spinnerSize = size === 'large' ? 'regular' : 'small';
  const isBusy = isLoading || isResolving || isDisabled;

  if (isSkeleton) {
    const skeletonSize = size === 'large' ? 'md' : 'sm';
    return (
      <AnimatedBox
        backgroundColor="GREY_100"
        borderRadius="round"
        alignItems="center"
        justifyContent="center"
        {...buttonSize}
      >
        <Skeleton shape="square" size={skeletonSize} />
      </AnimatedBox>
    );
  }

  return (
    <Pressable
      accessibilityLabel={accessibilityLabel}
      accessibilityRole="button"
      onPress={handlePress}
      accessibilityState={{
        busy: isBusy,
      }}
      disabled={isBusy}
      testID={testID}
    >
      {({ pressed }) => {
        const activeColors = getButtonActiveColors({ colors, pressed });
        return (
          <AnimatedBox
            alignItems="center"
            justifyContent="center"
            {...buttonSize}
          >
            <AnimatedBox
              position="absolute"
              top={0}
              right={0}
              bottom={0}
              left={0}
              backgroundColor={activeColors.backgroundColor}
              borderRadius="round"
              opacity={activeColors.backgroundOpacity}
            />
            {(isLoading || isResolving) && !shouldDisplaySpinner ? (
              <Spinner
                size={spinnerSize}
                color={activeColors.iconColor}
                opacity={activeColors.iconOpacity}
              />
            ) : (
              <Icon
                iconName={iconName}
                size={size}
                color={activeColors.iconColor}
                opacity={activeColors.iconOpacity}
              />
            )}
          </AnimatedBox>
        );
      }}
    </Pressable>
  );
};

export default ButtonIcon;
