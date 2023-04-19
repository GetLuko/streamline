import { ColorTheme } from '../../theme';
import { CaptionProps } from './caption.types';

export const getCaptionStyle = (
  appearance: CaptionProps['appearance']
): { color: ColorTheme } => {
  switch (appearance) {
    case 'warning':
      return {
        color: 'ORANGE_500',
      };
    case 'danger':
      return {
        color: 'TERRA_500',
      };
    case 'neutral':
    default:
      return {
        color: 'GREY_500',
      };
  }
};
