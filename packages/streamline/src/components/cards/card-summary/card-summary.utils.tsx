import { CardSummaryColors, CardSummaryProps } from './card-summary.types';

export const getCardSummaryColors = ({
  appearance,
}: {
  appearance?: CardSummaryProps['appearance'];
}): CardSummaryColors => {
  switch (appearance) {
    case 'danger':
      return {
        containerColors: {
          backgroundColor: 'TERRA_700',
          pressBackgroundColor: 'TERRA_800',
        },
        headerColors: {
          rightIconColor: 'TERRA_400',
          headerColor: 'PURE_WHITE_1000',
          leftIconColor: 'PURE_WHITE_1000',
          valueColor: 'TERRA_200',
        },
        contentColors: {
          titleColor: 'PURE_WHITE_1000',
          descriptionColor: 'TERRA_200',
        },
      };
    case 'warning':
      return {
        containerColors: {
          backgroundColor: 'ORANGE_700',
          pressBackgroundColor: 'ORANGE_800',
        },
        headerColors: {
          rightIconColor: 'ORANGE_400',
          headerColor: 'PURE_WHITE_1000',
          leftIconColor: 'PURE_WHITE_1000',
          valueColor: 'ORANGE_200',
        },
        contentColors: {
          titleColor: 'PURE_WHITE_1000',
          descriptionColor: 'ORANGE_200',
        },
      };

    case 'neutral':
      return {
        containerColors: {
          backgroundColor: 'PURE_WHITE_1000',
          pressBackgroundColor: 'GREY_25',
        },
        headerColors: {
          rightIconColor: 'GREY_400',
          headerColor: 'GREY_1000',
          leftIconColor: 'BLUKO_500',
          valueColor: 'GREY_500',
        },
        contentColors: {
          titleColor: 'GREY_1000',
          descriptionColor: 'GREY_700',
        },
      };
    case 'primary':
    default:
      return {
        containerColors: {
          backgroundColor: 'BLUKO_700',
          pressBackgroundColor: 'BLUKO_800',
        },
        headerColors: {
          rightIconColor: 'BLUKO_400',
          headerColor: 'PURE_WHITE_1000',
          leftIconColor: 'PURE_WHITE_1000',
          valueColor: 'BLUKO_200',
        },
        contentColors: {
          titleColor: 'PURE_WHITE_1000',
          descriptionColor: 'BLUKO_200',
        },
      };
  }
};

export const hasValidContent = ({
  title,
  description,
}: Pick<CardSummaryProps, 'title' | 'description'>) =>
  Boolean(title) || Boolean(description);

export const hasValidButtonAction = (footerProps: CardSummaryProps['footer']) =>
  footerProps?.type === 'button' &&
  (Boolean(footerProps?.onPress) ||
    Boolean(footerProps?.onPressIn) ||
    Boolean(footerProps?.onPressOut));
