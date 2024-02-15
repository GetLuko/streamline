import { ColorTheme } from '../../../theme';

export const getNavigationTitleColors = (
  appareance: 'light' | 'dark'
): {
  headerColor: ColorTheme;
  titleColor: ColorTheme;
  valueColor: ColorTheme;
  valueOpacity: number;
  headerOpacity: number;
} => {
  switch (appareance) {
    case 'dark':
      return {
        headerColor: 'GREY_700',
        titleColor: 'GREY_1000',
        valueColor: 'GREY_700',
        valueOpacity: 1,
        headerOpacity: 1,
      };
    case 'light':
      return {
        headerColor: 'PURE_WHITE_1000',
        titleColor: 'PURE_WHITE_1000',
        valueColor: 'PURE_WHITE_1000',
        valueOpacity: 0.8,
        headerOpacity: 0.6,
      };
  }
};
