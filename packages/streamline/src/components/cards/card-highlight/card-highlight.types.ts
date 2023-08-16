import { ImageSourcePropType } from 'react-native';

import { CardHeaderProps } from '../../../primitives/card/card-header/card-header.types';
import { CardProps } from '../../../primitives/card/card.types';
import { Appearance } from '../../../theme';
import { IconsName } from '../../../types';

export type CardHighlightProps = Pick<
  CardProps,
  'accessibilityLabel' | 'testID' | 'onPress' | 'onPressIn' | 'onPressOut'
> &
  Omit<CardHeaderProps, 'colors' | 'title'> & {
    appearance?: Appearance;
    isSkeleton?: boolean;
    isLoading?: boolean;
    description?: string;
    tag?: {
      text: string;
      iconName: IconsName;
    };
    title: string;
    media: ImageSourcePropType;
  };
