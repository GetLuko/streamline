import { Appearance, ColorTheme } from '../../../theme';

export const getCardFeedbackBackgroundColor = ({
  appearance,
}: {
  appearance: Appearance;
}): ColorTheme => {
  return appearance === 'neutral' ? 'GREY_100' : 'PURE_WHITE_1000';
};
