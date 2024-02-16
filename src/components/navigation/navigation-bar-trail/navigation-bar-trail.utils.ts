import { ColorTheme } from '../../../theme';

export const getNavigationTrailTextColor = ({
  appearance,
}: {
  appearance: 'dark' | 'light' | 'primary';
}): { titleColor: ColorTheme; actionColor: ColorTheme } => {
  switch (appearance) {
    case 'dark':
      return { titleColor: 'GREY_1000', actionColor: 'GREY_1000' };
    case 'light':
      return { titleColor: 'PURE_WHITE_1000', actionColor: 'PURE_WHITE_1000' };
    case 'primary':
      return { titleColor: 'GREY_1000', actionColor: 'BLUKO_500' };
  }
};
