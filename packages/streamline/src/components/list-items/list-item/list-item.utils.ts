import { ColorTheme } from '../../../theme';

export const getListItemsColors = ({
  appearance,
  isDisabled,
}: {
  appearance: 'neutral' | 'danger';
  isDisabled?: boolean;
}): {
  leftContentColor: ColorTheme;
  mainTextColor: ColorTheme;
  secondaryTextColor: ColorTheme;
} => {
  const isDanger = appearance === 'danger';
  if (isDisabled) {
    const disabledColor = isDanger ? 'TERRA_300' : 'GREY_500';
    return {
      leftContentColor: disabledColor,
      mainTextColor: disabledColor,
      secondaryTextColor: disabledColor,
    };
  }
  if (isDanger) {
    return {
      leftContentColor: 'TERRA_500',
      mainTextColor: 'TERRA_500',
      secondaryTextColor: 'TERRA_500',
    };
  }
  return {
    leftContentColor: 'BLUKO_500',
    mainTextColor: 'GREY_1000',
    secondaryTextColor: 'GREY_700',
  };
};
