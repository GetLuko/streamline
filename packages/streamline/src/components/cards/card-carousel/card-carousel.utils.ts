import { Appearance } from '../../../theme/appearance';
import { CardCarouselColors } from './card-carousel.types';
export const getCardCarouselColors = ({
  appearance,
}: {
  appearance?: Appearance;
}): CardCarouselColors => {
  switch (appearance) {
    case 'success':
      return {
        backgroundColor: 'MINT_700',
        pressedColor: 'MINT_800',
      };
    case 'secondary':
      return {
        backgroundColor: 'TEAL_700',
        pressedColor: 'TEAL_800',
      };
    case 'warning':
      return {
        backgroundColor: 'ORANGE_700',
        pressedColor: 'ORANGE_800',
      };
    case 'danger':
      return {
        backgroundColor: 'TERRA_700',
        pressedColor: 'TERRA_800',
      };
    default:
      return {
        backgroundColor: 'BLUKO_700',
        pressedColor: 'BLUKO_800',
      };
  }
};
