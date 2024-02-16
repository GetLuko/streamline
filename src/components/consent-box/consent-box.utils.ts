import { Appearance, ColorTheme } from '../../theme';

export const getConsentBoxColors = ({
  appearance,
  isDisabled,
  value,
}: {
  appearance: Appearance;
  isDisabled: boolean;
  value: boolean;
}): {
  backgroundColor: ColorTheme;
  textColor: ColorTheme;
} => {
  const isDanger = appearance === 'danger';

  if (isDisabled) {
    if (value) {
      return {
        backgroundColor: isDanger ? 'TERRA_75' : 'BLUKO_75',
        textColor: isDanger ? 'TERRA_300' : 'BLUKO_300',
      };
    }
    return {
      backgroundColor: isDanger ? 'TERRA_75' : 'GREY_75',
      textColor: isDanger ? 'TERRA_300' : 'GREY_500',
    };
  }

  if (value) {
    return {
      backgroundColor: isDanger ? 'TERRA_100' : 'BLUKO_100',
      textColor: isDanger ? 'TERRA_800' : 'BLUKO_800',
    };
  }

  return {
    backgroundColor: isDanger ? 'TERRA_100' : 'GREY_100',
    textColor: isDanger ? 'TERRA_800' : 'GREY_1000',
  };
};
