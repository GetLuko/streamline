import { LayoutChangeEvent } from 'react-native';
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { ButtonProps } from '../button.types';

export const useLoadingAnimation = ({
  isSkeleton,
  size,
}: {
  size: ButtonProps['size'];
  isSkeleton: boolean;
}) => {
  const initialWidth = useSharedValue(0);
  const initialSkeletonWidth = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    if (size === 'full') {
      return {
        width: undefined,
      };
    }
    if (initialWidth.value === 0 || initialSkeletonWidth.value === 0) {
      return {
        width: undefined,
      };
    }
    return {
      width: isSkeleton
        ? withTiming(initialSkeletonWidth.value)
        : withTiming(initialWidth.value),
    };
  });

  const onLayout = (event: LayoutChangeEvent) => {
    if (size === 'mini' && initialWidth.value === 0 && !isSkeleton) {
      initialWidth.value = event.nativeEvent.layout.width;
    }
    if (size === 'mini' && initialSkeletonWidth.value === 0) {
      initialSkeletonWidth.value = event.nativeEvent.layout.width;
    }
  };

  return { animatedStyle, onLayout };
};
