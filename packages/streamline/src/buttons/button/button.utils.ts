import { PressableStateCallbackType } from 'react-native';
import { Theme } from '../../theme';


import { ButtonProps, ButtonVariant } from './button.types';

export const getPressableBackgroundColor =
  (colors: Theme['colors'], variant: ButtonProps['variant']) =>
  ({
    pressed,
    isTouched,
  }: {
    isTouched?: boolean;
    pressed: PressableStateCallbackType['pressed'];
  }) => {
    let backgroundColor: string;

    if (pressed || isTouched) {
      switch (variant) {
        case 'secondary':
          backgroundColor = colors.BLUKO_150;
          break;
        case 'danger':
          backgroundColor = colors.TERRA_400;
          break;
        case 'neutral':
          backgroundColor = colors.GREY_150;
          break;
        case 'primary':
        default:
          backgroundColor = colors.BLUKO_400;
      }
    } else {
      switch (variant) {
        case 'placeholder':
        case 'neutral':
        case 'disabled':
          backgroundColor = colors.GREY_100;
          break;
        case 'secondary':
          backgroundColor = colors.BLUKO_100;
          break;
        case 'danger':
          backgroundColor = colors.TERRA_500;
          break;
        case 'primary':
        default:
          backgroundColor = colors.BLUKO_500;
      }
    }

    return { backgroundColor };
  };

export const getInnerVariant = ({
  isDisabled,
  variant,
}: {
  isDisabled: boolean | undefined;
  variant: ButtonVariant;
}) => {
  if (isDisabled) {
    return 'disabled';
  }

  return variant;
};

export const getTextColor = (variant: ButtonProps['variant']) => {
  switch (variant) {
    case 'neutral':
      return 'GREY_1000';
    case 'secondary':
      return 'BLUKO_600';
    case 'disabled':
      return 'GREY_400';
    case 'danger':
    case 'primary':
    default:
      return 'PURE_WHITE_1000';
  }
};
