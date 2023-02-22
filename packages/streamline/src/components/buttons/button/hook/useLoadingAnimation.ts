import { LayoutChangeEvent } from 'react-native';
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { ButtonProps } from '../button.types';

export const useLoadingAnimation = ({
  isPlaceholder,
  size,
}: {
  size: ButtonProps['size'];
  isPlaceholder: boolean;
}) => {
  const initialWidth = useSharedValue(0);
  const initialPlaceholderWidth = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    if (size === 'full') {
      return {
        width: undefined,
      };
    }
    if (initialWidth.value === 0 || initialPlaceholderWidth.value === 0) {
      return {
        width: undefined,
      };
    }
    return {
      width: isPlaceholder
        ? withTiming(initialPlaceholderWidth.value)
        : withTiming(initialWidth.value),
    };
  });

  const onLayout = (event: LayoutChangeEvent) => {
    if (size === 'mini' && initialWidth.value === 0 && !isPlaceholder) {
      initialWidth.value = event.nativeEvent.layout.width;
    }
    if (size === 'mini' && initialPlaceholderWidth.value === 0) {
      initialPlaceholderWidth.value = event.nativeEvent.layout.width;
    }
  };

  return { animatedStyle, onLayout };
};
