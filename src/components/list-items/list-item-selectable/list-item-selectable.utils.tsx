import { ColorTheme } from '../../../theme';

export const getListItemsSelectableColors = ({
  isSelected,
  isDisabled,
}: {
  isSelected: boolean;
  isDisabled?: boolean;
}): {
  leftContentColor: ColorTheme;
  mainTextColor: ColorTheme;
  secondaryTextColor: ColorTheme;
} => {
  if (isSelected) {
    if (isDisabled)
      return {
        leftContentColor: 'BLUKO_300',
        mainTextColor: 'BLUKO_300',
        secondaryTextColor: 'BLUKO_300',
      };
    return {
      leftContentColor: 'BLUKO_500',
      mainTextColor: 'BLUKO_500',
      secondaryTextColor: 'BLUKO_500',
    };
  }

  if (isDisabled)
    return {
      leftContentColor: 'GREY_500',
      mainTextColor: 'GREY_500',
      secondaryTextColor: 'GREY_500',
    };
  return {
    leftContentColor: 'BLUKO_500',
    mainTextColor: 'GREY_1000',
    secondaryTextColor: 'GREY_700',
  };
};
