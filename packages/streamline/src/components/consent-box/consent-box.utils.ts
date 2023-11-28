import { Appearance, ColorTheme } from '../../theme';

export const getConsentBoxBackgroundColor = ({
  appearance,
  isDisabled,
  value,
}: {
  appearance: Appearance;
  isDisabled: boolean;
  value: boolean;
}): ColorTheme => {
  if (!value) {
    return appearance === 'danger' ? 'TERRA_100' : 'GREY_100';
  }

  if (appearance === 'danger') {
    return isDisabled ? 'TERRA_75' : 'TERRA_100';
  }

  return isDisabled ? 'BLUKO_75' : 'BLUKO_100';
};
