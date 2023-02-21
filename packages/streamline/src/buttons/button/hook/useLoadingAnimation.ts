import { LayoutChangeEvent } from 'react-native';
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { ButtonProps } from '../button.types';

export const useLoadingAnimation = ({
  isPlaceholder,
  type,
}: {
  type: ButtonProps['type'];
  isPlaceholder: boolean;
}) => {
  const initialWidth = useSharedValue(0);
  const initialPlaceholderWidth = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    if (type === 'full') {
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
    if (type === 'mini' && initialWidth.value === 0 && !isPlaceholder) {
      initialWidth.value = event.nativeEvent.layout.width;
    }
    if (type === 'mini' && initialPlaceholderWidth.value === 0) {
      initialPlaceholderWidth.value = event.nativeEvent.layout.width;
    }
  };

  return { animatedStyle, onLayout };
};
