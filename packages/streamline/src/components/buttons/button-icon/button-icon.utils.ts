import { Size } from '../../../primitives/icon/icon.types';
import { ColorTheme } from '../../../theme/';
import { Appearance } from '../../../theme/appearance';

type GetButtonIconColors = ({
  appearance,
  container,
  isDisabled,
}: {
  appearance: Appearance;
  container: boolean;
  isDisabled: boolean;
}) => {
  color: ColorTheme;
  backgroundColor?: ColorTheme;
};

export const getButtonIconColors: GetButtonIconColors = ({
  appearance,
  container,
  isDisabled,
}) => {
  const realAppearance = isDisabled ? 'disabled' : appearance;
  if (container) {
    switch (realAppearance) {
      case 'primary':
        return {
          color: 'PURE_WHITE_1000',
          backgroundColor: 'BLUKO_500',
        };
      case 'secondary':
        return {
          color: 'GREY_500',
          backgroundColor: 'GREY_100',
        };
      case 'danger':
        return {
          color: 'PURE_WHITE_1000',
          backgroundColor: 'TERRA_500',
        };
      case 'neutral':
        return {
          color: 'PURE_WHITE_1000',
          backgroundColor: 'GREY_600',
        };
      case 'disabled':
        return {
          color: 'PURE_WHITE_1000',
          backgroundColor: 'GREY_400',
        };
      case 'placeholder':
        return {
          color: 'PURE_WHITE_1000',
          backgroundColor: 'GREY_400',
        };
    }
  }
  switch (realAppearance) {
    case 'primary':
      return {
        color: 'BLUKO_500',
      };
    case 'secondary':
      return {
        color: 'GREY_400',
      };
    case 'danger':
      return {
        color: 'TERRA_500',
      };
    case 'neutral':
      return {
        color: 'PURE_WHITE_1000',
      };
    case 'disabled':
      return {
        color: 'PURE_WHITE_1000',
      };
    case 'placeholder':
      return {
        color: 'PURE_WHITE_1000',
      };
  }
};

export const getButtonIconSize = (size: Size) => {
  switch (size) {
    case 'regular':
      return { width: 36, height: 36 };
    case 'small':
      return { width: 24, height: 24 };
  }
};
