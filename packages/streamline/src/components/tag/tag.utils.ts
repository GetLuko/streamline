import { ColorTheme } from '../../theme';
import { Appearance } from '../../theme/appearance';

export const getTagColors = ({
  appearance,
}: {
  appearance: Appearance;
}): {
  backgroundColor: ColorTheme;
  backgroundOpacity?: number;
  iconColor: ColorTheme;
  textColor: ColorTheme;
} => {
  switch (appearance) {
    case 'primary':
      return {
        backgroundColor: 'BLUKO_100',
        iconColor: 'BLUKO_500',
        textColor: 'BLUKO_700',
      };
    case 'success':
      return {
        backgroundColor: 'MINT_100',
        iconColor: 'MINT_500',
        textColor: 'MINT_700',
      };
    case 'warning':
      return {
        backgroundColor: 'ORANGE_100',
        iconColor: 'ORANGE_500',
        textColor: 'ORANGE_700',
      };
    case 'danger':
      return {
        backgroundColor: 'TERRA_100',
        iconColor: 'TERRA_500',
        textColor: 'TERRA_700',
      };
    case 'dark':
      return {
        backgroundColor: 'GREY_1000',
        backgroundOpacity: 0.4,
        iconColor: 'PURE_WHITE_1000',
        textColor: 'PURE_WHITE_1000',
      };
    case 'light':
      return {
        backgroundColor: 'PURE_WHITE_1000',
        backgroundOpacity: 0.2,
        iconColor: 'PURE_WHITE_1000',
        textColor: 'PURE_WHITE_1000',
      };
    case 'neutral':
    default:
      return {
        backgroundColor: 'GREY_100',
        iconColor: 'GREY_700',
        textColor: 'GREY_1000',
      };
  }
};
