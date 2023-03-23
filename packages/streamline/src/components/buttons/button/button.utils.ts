import { PressableStateCallbackType } from 'react-native';
import { Theme } from '../../../theme';
import { Appearance } from '../../../theme/appearance';

import { ButtonProps } from './button.types';

export const getPressableBackgroundColor =
  (colors: Theme['colors'], variant: ButtonProps['appearance']) =>
  ({
    pressed,
    isTouched,
    isSkeleton,
  }: {
    isTouched?: boolean;
    isSkeleton?: boolean;
    pressed: PressableStateCallbackType['pressed'];
  }) => {
    let backgroundColor: string;

    if (isSkeleton) {
      return { backgroundColor: colors.GREY_100 };
    }

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

export const getInnerAppearance = ({
  isDisabled,
  appearance,
}: {
  isDisabled: boolean | undefined;
  appearance: Appearance;
}) => {
  if (isDisabled) {
    return 'disabled';
  }

  return appearance;
};

const DEFAULT_TEXT_COLOR = 'PURE_WHITE_1000';
export const getTextColor = ({
  appearance,
  isSkeleton,
}: {
  appearance: ButtonProps['appearance'];
  isSkeleton?: boolean;
}) => {
  if (isSkeleton) {
    return DEFAULT_TEXT_COLOR;
  }
  switch (appearance) {
    case 'neutral':
      return 'GREY_1000';
    case 'secondary':
      return 'BLUKO_600';
    case 'disabled':
      return 'GREY_400';
    case 'danger':
    case 'primary':
    default:
      return DEFAULT_TEXT_COLOR;
  }
};
