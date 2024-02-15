import React from 'react';
import { ImageSourcePropType, PressableProps } from 'react-native';

export type ListItemArticleProps = {
  description?: string;
  header?: string;
  imageAccessibilityLabel?: string;
  imageSource: ImageSourcePropType;
  isDisabled?: boolean;
  isLoading?: boolean;
  isPress?: boolean;
  isSkeleton?: boolean;
  key?: React.Key;
  showDivider?: boolean;
  title: string;
  pressableProps?: Omit<
    PressableProps,
    | 'children'
    | 'onLongPress'
    | 'onPress'
    | 'onPressIn'
    | 'onPressOut'
    | 'testID'
  >;
} & Pick<
  PressableProps,
  | 'accessibilityLabel'
  | 'onLongPress'
  | 'onPress'
  | 'onPressIn'
  | 'onPressOut'
  | 'testID'
>;
