import { Keyframe } from 'react-native-reanimated';

export const getOpacityDuration = (disableAnimation: boolean) =>
  disableAnimation ? 0 : 350;
export const getAppearDuration = (disableAnimation: boolean) =>
  disableAnimation ? 0 : 250;

export const getAppearEntering = (disableAnimation: boolean) =>
  !disableAnimation
    ? new Keyframe({
        from: {
          opacity: 0,
          transform: [{ scale: 0.9 }],
        },
        to: {
          opacity: 1,
          transform: [{ scale: 1 }],
        },
      }).duration(getAppearDuration(disableAnimation))
    : undefined;

export const getAppearExiting = (disableAnimation: boolean) =>
  !disableAnimation
    ? new Keyframe({
        from: {
          opacity: 1,
          transform: [{ scale: 1 }],
        },
        to: {
          opacity: 0,
          transform: [{ scale: 0.9 }],
        },
      }).duration(getAppearDuration(disableAnimation))
    : undefined;

export const getOnPressScale = (disableAnimation: boolean) => ({
  start: disableAnimation ? 1 : 1,
  end: disableAnimation ? 0.95 : 0.95,
  duration: disableAnimation ? 250 : 250,
});

export const getAnimationValues = (disableAnimation: boolean) => ({
  appearDuration: getAppearDuration(disableAnimation),
  appearEntering: getAppearEntering(disableAnimation),
  appearExiting: getAppearExiting(disableAnimation),
  opacityDuration: getOpacityDuration(disableAnimation),
  onPressScale: getOnPressScale(disableAnimation),
});
