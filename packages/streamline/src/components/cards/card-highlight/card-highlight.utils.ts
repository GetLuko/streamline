import { Appearance, ColorTheme } from '../../../theme';

export const getCardHighlightColors = ({
  appearance,
}: {
  appearance: Appearance;
}): {
  backgroundColor: ColorTheme;
  titleColor: ColorTheme;
  descriptionColor: ColorTheme;
} => {
  switch (appearance) {
    case 'secondary':
      return {
        backgroundColor: 'MINT_700',
        titleColor: 'PURE_WHITE_1000',
        descriptionColor: 'MINT_150',
      };
    case 'warning':
      return {
        backgroundColor: 'ORANGE_700',
        titleColor: 'PURE_WHITE_1000',
        descriptionColor: 'ORANGE_150',
      };

    case 'danger':
      return {
        backgroundColor: 'TERRA_700',
        titleColor: 'PURE_WHITE_1000',
        descriptionColor: 'TERRA_150',
      };
    case 'success':
      return {
        backgroundColor: 'TEAL_700',
        titleColor: 'PURE_WHITE_1000',
        descriptionColor: 'TEAL_150',
      };
    default:
      return {
        backgroundColor: 'BLUKO_700',
        titleColor: 'PURE_WHITE_1000',
        descriptionColor: 'BLUKO_150',
      };
  }
};
