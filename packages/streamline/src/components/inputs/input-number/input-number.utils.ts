import { ColorTheme } from '../../../theme';

export const getInputCellColors = ({
  isDisabled,
  isFocused,
  isError,
}: {
  isDisabled: boolean;
  isFocused: boolean;
  isError: boolean;
}): {
  shadowColor?: ColorTheme;
  borderColor: ColorTheme;
  backgroundColor: ColorTheme;
} => {
  if (isDisabled) {
    return {
      borderColor: 'GREY_100',
      backgroundColor: 'GREY_25',
    };
  }

  if (isError) {
    return {
      borderColor: 'TERRA_500',
      backgroundColor: 'PURE_WHITE_1000',
    };
  }

  if (isFocused) {
    return {
      borderColor: 'BLUKO_500',
      backgroundColor: 'PURE_WHITE_1000',
      shadowColor: 'BLUKO_100',
    };
  }

  return {
    borderColor: 'GREY_100',
    backgroundColor: 'PURE_WHITE_1000',
  };
};
