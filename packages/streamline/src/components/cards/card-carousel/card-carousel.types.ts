import { CardHeaderProps } from '../../../primitives/card/card-header/card-header.types';
import { CardProps } from '../../../primitives/card/card.types';
import { IconsName } from '../../../primitives/icon/icon.types';
import { ColorTheme } from '../../../theme';

export type CardCarouselProps = Pick<
  CardProps,
  'accessibilityLabel' | 'testID' | 'onPress' | 'onPressIn' | 'onPressOut'
> &
  Omit<CardHeaderProps, 'colors' | 'title'> & {
    /**
     * Card's height
     */
    size?: 'SM' | 'LG';
    /**
     * Icon of the card
     */
    iconName?: IconsName;
    /**
     * Indicate the loading state of the card
     */
    isLoading?: boolean;
    /**
     * Background color
     */
    backgroundColor?: ColorTheme;
    /**
     * Card's title
     */
    title?: string;
    /**
     * Card's description
     */
    description?: string;
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
