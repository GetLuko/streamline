import { Appearance } from '../../theme/appearance';
import { RadioColors } from './radio.types';

export const getRadioColors = ({
  appearance,
  isDisabled,
}: {
  appearance: Appearance;
  isDisabled: boolean;
}): RadioColors => {
  switch (appearance) {
    case 'primary':
      return {
        backgroundColor: isDisabled ? 'GREY_50' : 'PURE_WHITE_1000',
        dotColor: isDisabled ? 'GREY_50' : 'PURE_WHITE_1000',
        shadowColor: 'BLUKO_100',
        borderColor: isDisabled ? 'GREY_200' : 'GREY_300',
        activeColor: isDisabled ? 'BLUKO_200' : 'BLUKO_500',
      };
    case 'danger':
      return {
        backgroundColor: isDisabled ? 'GREY_50' : 'PURE_WHITE_1000',
        dotColor: isDisabled ? 'GREY_50' : 'PURE_WHITE_1000',
        shadowColor: 'TERRA_100',
        borderColor: isDisabled ? 'TERRA_200' : 'TERRA_500',
        activeColor: isDisabled ? 'TERRA_300' : 'TERRA_500',
      };
    default:
      return {
        backgroundColor: isDisabled ? 'GREY_50' : 'PURE_WHITE_1000',
        dotColor: isDisabled ? 'GREY_50' : 'PURE_WHITE_1000',
        shadowColor: 'BLUKO_100',
        borderColor: isDisabled ? 'GREY_200' : 'GREY_300',
        activeColor: isDisabled ? 'BLUKO_200' : 'BLUKO_500',
      };
  }
};
