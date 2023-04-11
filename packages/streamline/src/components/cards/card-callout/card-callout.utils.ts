import { Appearance } from '../../../theme/appearance';
import { CardCalloutColors } from './card-callout.types';

export const getCardCalloutColors = ({
  appearance,
}: {
  appearance: Appearance;
}): CardCalloutColors => {
  switch (appearance) {
    case 'secondary':
      return {
        backgroundColor: 'BLUKO_100',
        clickIconColor: 'BLUKO_300',
        descriptionColor: 'BLUKO_800',
        headerColor: 'BLUKO_600',
        iconColor: 'BLUKO_500',
        pressedColor: 'BLUKO_150',
      };
    case 'warning':
      return {
        backgroundColor: 'ORANGE_100',
        clickIconColor: 'ORANGE_300',
        descriptionColor: 'ORANGE_800',
        headerColor: 'ORANGE_600',
        iconColor: 'ORANGE_500',
        pressedColor: 'ORANGE_150',
      };
    case 'danger':
      return {
        backgroundColor: 'TERRA_100',
        clickIconColor: 'TERRA_300',
        descriptionColor: 'TERRA_800',
        headerColor: 'TERRA_600',
        iconColor: 'TERRA_500',
        pressedColor: 'TERRA_150',
      };
    case 'primary':
    case 'neutral':
    default:
      return {
        backgroundColor: 'GREY_100',
        clickIconColor: 'GREY_300',
        descriptionColor: 'GREY_1000',
        headerColor: 'GREY_700',
        iconColor: 'GREY_700',
        pressedColor: 'GREY_150',
      };
  }
};
