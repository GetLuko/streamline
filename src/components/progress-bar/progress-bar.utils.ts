import { ColorTheme } from '../../theme';
import { Appearance } from '../../theme/appearance';

export const getProgressBarColor = (appearance: Appearance): ColorTheme => {
  switch (appearance) {
    case 'primary':
      return 'BLUKO_500';
    case 'light':
      return 'PURE_WHITE_1000';
    case 'dark':
      return 'GREY_1000';
    default:
      return 'BLUKO_500';
  }
};

export const getProgressBarBackgroundColor = (
  appearance: Appearance
): {
  backgroundColor: ColorTheme;
  backgroundOpacity: number;
} => {
  switch (appearance) {
    case 'primary':
      return { backgroundColor: 'GREY_100', backgroundOpacity: 1 };
    case 'light':
      return { backgroundColor: `PURE_WHITE_1000`, backgroundOpacity: 0.1 };
    case 'dark':
      return { backgroundColor: `GREY_1000`, backgroundOpacity: 0.1 };
    default:
      return { backgroundColor: `GREY_100`, backgroundOpacity: 1 };
  }
};
