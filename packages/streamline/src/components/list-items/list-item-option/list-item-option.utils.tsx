import { ColorTheme } from '../../../theme';

interface TextColors {
  titleColor: ColorTheme;
  descriptionColor: ColorTheme;
  headerColor: ColorTheme;
}

export const getTextColors = ({
  isDisabled,
  selected,
}: {
  isDisabled: boolean;
  selected: boolean;
}): TextColors => {
  if (selected) {
    return {
      titleColor: 'BLUKO_500',
      descriptionColor: 'BLUKO_500',
      headerColor: 'BLUKO_500',
    };
  }
  if (isDisabled) {
    return {
      titleColor: 'GREY_500',
      descriptionColor: 'GREY_500',
      headerColor: 'GREY_500',
    };
  }
  return {
    titleColor: 'GREY_1000',
    descriptionColor: 'GREY_700',
    headerColor: 'GREY_700',
  };
};

export const getBackgroundColor = ({
  pressed,
  selected,
  isResolving,
}: {
  pressed: boolean;
  selected: boolean;
  isResolving: boolean;
}): ColorTheme => {
  if (pressed && selected) {
    return 'BLUKO_50';
  }
  if (selected || isResolving) {
    return 'BLUKO_25';
  }
  return 'PURE_WHITE_1000';
};

export const getBorderColor = ({
  selected,
  pressed,
  isDisabled,
  isResolving,
}: {
  selected: boolean;
  isDisabled: boolean;
  pressed: boolean;
  isResolving: boolean;
}): ColorTheme => {
  if (isDisabled) {
    return 'GREY_100';
  }
  if (selected || isResolving) {
    return 'BLUKO_500';
  }
  if (pressed) {
    return selected ? 'BLUKO_600' : 'GREY_300';
  }
  return 'GREY_100';
};
