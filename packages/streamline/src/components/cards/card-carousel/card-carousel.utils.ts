import { CardProps } from '../../../primitives/card/card.types';
import { Appearance } from '../../../theme';

export const getCardCarouselBackgroundColors = ({
  appearance,
}: {
  appearance?: Appearance;
}): Pick<CardProps, 'backgroundColor' | 'pressedBackgroundColor'> => {
  switch (appearance) {
    case 'primary':
      return {
        backgroundColor: 'BLUKO_700',
        pressedBackgroundColor: 'BLUKO_800',
      };
    case 'secondary':
      return {
        backgroundColor: 'TEAL_700',
        pressedBackgroundColor: 'TEAL_800',
      };
    case 'warning':
      return {
        backgroundColor: 'ORANGE_700',
        pressedBackgroundColor: 'ORANGE_800',
      };
    case 'danger':
      return {
        backgroundColor: 'TERRA_700',
        pressedBackgroundColor: 'TERRA_800',
      };
    case 'success':
      return {
        backgroundColor: 'MINT_700',
        pressedBackgroundColor: 'MINT_800',
      };
    default:
      return {
        backgroundColor: 'PURE_WHITE_1000',
        pressedBackgroundColor: 'PURE_WHITE_1000',
      };
  }
};
