import { ImageSourcePropType } from 'react-native';

import { CardHeaderProps } from '../../../primitives/card/card-header/card-header.types';
import { CardProps } from '../../../primitives/card/card.types';
import { IconsName, Size } from '../../../primitives/icon/icon.types';
import { ColorTheme } from '../../../theme';
import { Appearance } from '../../../theme/appearance';

export type DefaultProps = Pick<
  CardProps,
  'accessibilityLabel' | 'testID' | 'onPress' | 'onPressIn' | 'onPressOut'
> &
  Omit<CardHeaderProps, 'colors' | 'title' | 'iconName'> & {
    /**
     * Card's title
     */
    title: string;

    /**
     * Card's size
     */
    size: Extract<Size, 'small' | 'large'>;

    /**
     * The variant of the button. Can be one of `primary`, `secondary`, `danger`, `neutral`.
     */
    appearance?: Appearance;

    /**
     * Handle the close button press event
     */
    dismissAction?: DismissAction;

    /**
     * Indicate the loading state of the card
     */
    isLoading?: boolean;

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

    /**
     * Indicate if the card is a preview. (if true, the card will have a black overlay)
     */
    isPreview?: boolean;
  };

export type DismissAction = {
  accessibilityLabel: string;
  onDismiss: () => unknown;
};

export type SmallCardCarouselProps = DefaultProps & {
  size: 'small';
  iconName?: IconsName;
};

export type LargeCardCarouselProps = DefaultProps & {
  size: 'large';
  tag?: {
    text: string;
    iconName: IconsName;
  };
};

export type CardCarouselProps = LargeCardCarouselProps | SmallCardCarouselProps;

export type CardCarouselColors = {
  backgroundColor: ColorTheme;
  pressedColor: ColorTheme;
};
