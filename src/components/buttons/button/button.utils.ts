import { PressableStateCallbackType } from 'react-native';

import { ButtonProps } from './button.types';
import { Theme } from '../../../theme';

export const getPressableBackgroundColor =
  (colors: Theme['colors'], variant: ButtonProps['appearance']) =>
  ({
    pressed,
    isTouched,
    isSkeleton,
    isDisabled,
  }: {
    isTouched?: boolean;
    isSkeleton?: boolean;
    isDisabled?: boolean;
    pressed: PressableStateCallbackType['pressed'];
  }) => {
    let backgroundColor: string;

    if (isSkeleton || isDisabled) {
      return { backgroundColor: colors.GREY_100 };
    }

    if (pressed || isTouched) {
      switch (variant) {
        case 'secondary':
          backgroundColor = colors.BLUKO_150;
          break;
        case 'warning':
          backgroundColor = colors.ORANGE_600;
          break;
        case 'danger':
          backgroundColor = colors.TERRA_600;
          break;
        case 'neutral':
          backgroundColor = colors.GREY_150;
          break;
        case 'primary':
        default:
          backgroundColor = colors.BLUKO_600;
      }
    } else {
      switch (variant) {
        case 'neutral':
          backgroundColor = colors.GREY_100;
          break;
        case 'secondary':
          backgroundColor = colors.BLUKO_100;
          break;
        case 'warning':
          backgroundColor = colors.ORANGE_500;
          break;
        case 'danger':
          backgroundColor = colors.TERRA_500;
          break;
        case 'primary':
        default:
          backgroundColor = colors.BLUKO_500;
      }
    }

    if (isSkeleton) {
      backgroundColor = colors.GREY_100;
    }

    return { backgroundColor };
  };

const DEFAULT_TEXT_COLOR = 'PURE_WHITE_1000';
export const getTextColor = ({
  appearance,
  isSkeleton,
  isDisabled,
}: {
  appearance: ButtonProps['appearance'];
  isSkeleton?: boolean;
  isDisabled?: boolean;
}) => {
  if (isSkeleton) {
    return DEFAULT_TEXT_COLOR;
  }
  if (isDisabled) {
    return 'GREY_400';
  }
  switch (appearance) {
    case 'neutral':
      return 'GREY_1000';
    case 'secondary':
      return 'BLUKO_600';
    case 'danger':
    case 'primary':
    default:
      return DEFAULT_TEXT_COLOR;
  }
};
