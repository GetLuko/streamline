import { Appearance } from '../../../theme/appearance';
import { CardSummaryColors, CardSummaryProps } from './card-summary.types';

export const getCardSummaryColors = ({
  appearance,
}: {
  appearance?: Appearance;
}): CardSummaryColors => {
  switch (appearance) {
    case 'bluko':
      return {
        containerColors: {
          backgroundColor: 'BLUKO_700',
        },
        headerColors: {
          rightIconColor: 'BLUKO_400',
          headerColor: 'PURE_WHITE_1000',
          leftIconColor: 'PURE_WHITE_1000',
          valueColor: 'BLUKO_300',
        },
        contentColors: {
          titleColor: 'PURE_WHITE_1000',
          descriptionColor: 'BLUKO_200',
        },
      };
    case 'neutral':
    default:
      return {
        containerColors: {
          backgroundColor: 'GREY_100',
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
  }
};

export const hasValidContent = ({
  title,
  description,
}: Pick<CardSummaryProps, 'title' | 'description'>) =>
  Boolean(title) || Boolean(description);

export const hasValidButton = (buttonLabel: CardSummaryProps['buttonLabel']) =>
  Boolean(buttonLabel);
