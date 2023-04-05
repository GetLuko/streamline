import { CardHeaderProps } from '../../../primitives/card/card-header/card-header.types';
import { CardProps } from '../../../primitives/card/card.types';
import { ColorTheme } from '../../../theme';
import { Appearance } from '../../../theme/appearance';
import { ButtonProps } from '../../buttons/button/button.types';

export type CardSummaryProps = Pick<
  CardProps,
  'accessibilityLabel' | 'testID' | 'onPress' | 'onPressIn' | 'onPressOut'
> &
  Omit<CardHeaderProps, 'colors'> & {
    /**
     * Card appearance.
     */
    appearance?: Extract<
      Appearance,
      'neutral' | 'primary' | 'warning' | 'danger'
    >;
    /**
     * Card title.
     */
    title?: string;
    /**
     * Card description.
     */
    description?: string;
    /**
     * Indicates if the card is in a busy state.
     */
    isBusy?: boolean;
    /**
     * Indicates if the card is in a skeleton state.
     */
    isSkeleton?: boolean;
    /**
     * Button props. If not provided, the button will not be displayed.
     * All button props are available except appearance and pointerEvents.
     */
    buttonProps?: Omit<ButtonProps, 'appearance' | 'pointerEvents'>;
  };

type HeaderColors = {
  rightIconColor: ColorTheme;
  headerColor: ColorTheme;
  leftIconColor: ColorTheme;
  valueColor: ColorTheme;
};

type ContentColors = {
  titleColor: ColorTheme;
  descriptionColor: ColorTheme;
};

type ContainerColors = {
  backgroundColor: ColorTheme;
  pressBackgroundColor: ColorTheme;
};

export type CardSummaryColors = {
  headerColors: HeaderColors;
  contentColors: ContentColors;
  containerColors: ContainerColors;
};
