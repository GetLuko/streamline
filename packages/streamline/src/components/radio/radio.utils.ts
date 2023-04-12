import { Appearance } from '../../theme/appearance';
import { RadioColors } from './radio.types';

export const getRadioColors = ({
  appearance,
  disabled,
}: {
  appearance: Appearance;
  disabled: boolean;
}): RadioColors => {
  switch (appearance) {
    case 'primary':
      return {
        backgroundColor: disabled ? 'GREY_50' : 'PURE_WHITE_1000',
        dotColor: disabled ? 'GREY_50' : 'PURE_WHITE_1000',
        shadowColor: 'BLUKO_100',
        borderColor: disabled ? 'GREY_200' : 'GREY_300',
        activeColor: disabled ? 'BLUKO_200' : 'BLUKO_500',
      };
    case 'danger':
      return {
        backgroundColor: disabled ? 'GREY_50' : 'PURE_WHITE_1000',
        dotColor: disabled ? 'GREY_50' : 'PURE_WHITE_1000',
        shadowColor: 'TERRA_100',
        borderColor: disabled ? 'TERRA_200' : 'TERRA_500',
        activeColor: disabled ? 'TERRA_300' : 'TERRA_500',
      };
    default:
      return {
        backgroundColor: disabled ? 'GREY_50' : 'PURE_WHITE_1000',
        dotColor: disabled ? 'GREY_50' : 'PURE_WHITE_1000',
        shadowColor: 'BLUKO_100',
        borderColor: disabled ? 'GREY_200' : 'GREY_300',
        activeColor: disabled ? 'BLUKO_200' : 'BLUKO_500',
      };
  }
};
