import { GenericSize } from '../../../primitives/icon/icon.types';
import { ColorTheme } from '../../../theme/';
import { Appearance } from '../../../theme/appearance';

type ButtonColors = {
  backgroundColor?: ColorTheme;
  backgroundOpacity?: number;
  backgroundPressedColor?: ColorTheme;
  backgroundPressedOpacity?: number;
  color: ColorTheme;
  opacity?: number;
  pressedColor?: ColorTheme;
  pressedOpacity?: number;
};

type GetButtonIconColors = ({
  appearance,
  container,
  isDisabled,
}: {
  appearance: Appearance;
  container: boolean;
  isDisabled: boolean;
}) => ButtonColors;

export const getButtonIconColors: GetButtonIconColors = ({
  appearance,
  container,
  isDisabled,
}) => {
  if (isDisabled) {
    switch (appearance) {
      case 'dark':
        return {
          backgroundColor: container ? 'GREY_1000' : undefined,
          backgroundOpacity: 0.05,
          color: 'GREY_1000',
          opacity: 0.1,
        };
      case 'light':
        return {
          backgroundColor: container ? 'PURE_WHITE_1000' : undefined,
          backgroundOpacity: 0.05,
          color: 'PURE_WHITE_1000',
          opacity: 0.1,
        };
      default:
        return {
          backgroundColor: container ? 'GREY_100' : undefined,
          color: 'GREY_400',
        };
    }
  }

  if (container) {
    switch (appearance) {
      case 'primary':
        return {
          backgroundColor: 'BLUKO_500',
          backgroundPressedColor: 'BLUKO_600',
          color: 'PURE_WHITE_1000',
        };
      case 'warning':
        return {
          backgroundColor: 'ORANGE_500',
          backgroundPressedColor: 'ORANGE_600',
          color: 'PURE_WHITE_1000',
        };
      case 'danger':
        return {
          backgroundColor: 'TERRA_500',
          backgroundPressedColor: 'TERRA_600',
          color: 'PURE_WHITE_1000',
        };
      case 'dark':
        return {
          backgroundColor: 'GREY_1000',
          backgroundOpacity: 0.05,
          backgroundPressedOpacity: 0.1,
          color: 'GREY_1000',
          opacity: 0.4,
        };
      case 'light':
        return {
          backgroundColor: 'PURE_WHITE_1000',
          backgroundOpacity: 0.05,
          backgroundPressedOpacity: 0.1,
          color: 'PURE_WHITE_1000',
          opacity: 0.6,
        };
      case 'neutral':
      default:
        return {
          backgroundColor: 'GREY_100',
          backgroundPressedColor: 'GREY_150',
          color: 'GREY_700',
        };
    }
  }

  switch (appearance) {
    case 'primary':
      return {
        color: 'BLUKO_500',
        pressedColor: 'BLUKO_600',
      };
    case 'warning':
      return {
        color: 'ORANGE_500',
        pressedColor: 'ORANGE_600',
      };
    case 'danger':
      return {
        color: 'TERRA_500',
        pressedColor: 'TERRA_600',
      };
    case 'dark':
      return {
        color: 'GREY_1000',
        opacity: 0.6,
        pressedOpacity: 0.8,
      };
    case 'light':
      return {
        color: 'PURE_WHITE_1000',
        opacity: 0.6,
        pressedOpacity: 0.8,
      };
    case 'neutral':
    default:
      return {
        color: 'GREY_500',
        pressedColor: 'GREY_600',
      };
  }
};

type ButtonActiveColors = {
  backgroundColor?: ColorTheme;
  backgroundOpacity?: number;
  iconColor: ColorTheme;
  iconOpacity?: number;
};

export const getButtonActiveColors = ({
  colors,
  pressed,
}: {
  colors: ButtonColors;
  pressed: boolean;
}): ButtonActiveColors => {
  if (pressed) {
    return {
      backgroundColor: colors.backgroundPressedColor ?? colors.backgroundColor,
      backgroundOpacity:
        colors.backgroundPressedOpacity ?? colors.backgroundOpacity,
      iconColor: colors.pressedColor ?? colors.color,
      iconOpacity: colors.pressedOpacity ?? colors.opacity,
    };
  }
  return {
    backgroundColor: colors.backgroundColor,
    backgroundOpacity: colors.backgroundOpacity,
    iconColor: colors.color,
    iconOpacity: colors.opacity,
  };
};

export const getButtonIconSize = (size: GenericSize) => {
  switch (size) {
    case 'large':
      return { width: 40, height: 40 };
    case 'regular':
      return { width: 24, height: 24 };
  }
};
