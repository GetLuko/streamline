import { ImageSourcePropType } from 'react-native';

import { CardHeaderProps } from '../../../primitives/card/card-header/card-header.types';
import { CardProps } from '../../../primitives/card/card.types';
import { IconsName, Size } from '../../../primitives/icon/icon.types';

type DefaultProps = Pick<
  CardProps,
  'accessibilityLabel' | 'testID' | 'onPress' | 'onPressIn' | 'onPressOut'
> &
  Omit<CardHeaderProps, 'colors' | 'title' | 'iconName'> & {
    onClose?: () => void;
    /**
     * Handle the close button press event
     */
    size: Extract<Size, 'small' | 'large'>;
    /**
     * Indicate the loading state of the card
     */
    isLoading?: boolean;
    /**
     * Card's title
     */
    title?: string;
    /**
     * Card's description
     */
    description?: string;
    /**
     * Card's media background
     */
    media?: ImageSourcePropType;
    /**
     * Test ID
     */
    testID?: string;
    /**
     * Accessibility Label
     */
    accessibilityLabel?: string;
    /**
     * Indicate if the card is in a skeleton state.
     */
    isSkeleton?: boolean;
  };

type SmallCardCarouselProps = DefaultProps & {
  size: 'small';
  iconName?: IconsName;
};

type LargeCardCarouselProps = DefaultProps & {
  size: 'large';
  tag?: {
    text: string;
    iconName: IconsName;
  };
};

export type CardCarouselProps = LargeCardCarouselProps | SmallCardCarouselProps;
