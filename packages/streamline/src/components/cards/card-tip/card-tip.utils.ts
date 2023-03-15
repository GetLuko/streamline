import { Appearance } from '../../../theme/appearance';
import { CardTipColors } from './card-tip.types';

export const getCardTipColors = ({
  appearance,
}: {
  appearance: Appearance;
}): CardTipColors => {
  switch (appearance) {
    case 'secondary':
      return {
        backgroundColor: 'BLUKO_100',
        descriptionColor: 'BLUKO_800',
        iconColor: 'BLUKO_500',
      };
    case 'warning':
      return {
        backgroundColor: 'ORANGE_100',
        descriptionColor: 'ORANGE_800',
        iconColor: 'ORANGE_500',
      };
    case 'danger':
      return {
        backgroundColor: 'TERRA_100',
        descriptionColor: 'TERRA_800',
        iconColor: 'TERRA_500',
      };
    case 'primary':
    case 'neutral':
    default:
      return {
        backgroundColor: 'GREY_100',
        descriptionColor: 'GREY_1000',
        iconColor: 'GREY_700',
      };
  }
};
