import { ColorTheme } from '../../../theme';

import { TabProps } from './tab.types';

interface TitleConfig {
  defaultColor: ColorTheme;
  defaultOpacity: number;
  selectedColor: ColorTheme;
}

interface BorderConfig {
  backgroundColor: ColorTheme;
  opacity: number;
}

export const getTitleConfig = ({
  appearance,
}: Pick<TabProps, 'appearance'>): TitleConfig => {
  switch (appearance) {
    case 'dark': {
      return {
        defaultColor: 'GREY_1000',
        defaultOpacity: 0.6,
        selectedColor: 'GREY_1000',
      };
    }
    case 'light': {
      return {
        defaultColor: 'PURE_WHITE_1000',
        defaultOpacity: 0.6,
        selectedColor: 'PURE_WHITE_1000',
      };
    }
    case 'primary':
    default: {
      return {
        defaultColor: 'GREY_700',
        defaultOpacity: 1,
        selectedColor: 'BLUKO_500',
      };
    }
  }
};

export const getBorderConfig = ({
  appearance,
}: Pick<TabProps, 'appearance'>): BorderConfig => {
  switch (appearance) {
    case 'dark': {
      return {
        backgroundColor: 'GREY_1000',
        opacity: 0.1,
      };
    }
    case 'light': {
      return {
        backgroundColor: 'PURE_WHITE_1000',
        opacity: 0.1,
      };
    }
    case 'primary':
    default: {
      return {
        backgroundColor: 'GREY_100',
        opacity: 1,
      };
    }
  }
};
