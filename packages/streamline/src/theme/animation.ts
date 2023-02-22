import { Keyframe } from "react-native-reanimated";

export const opacityDuration = 350;
export const appearDuration = 250;

export const appearEntering = new Keyframe({
  from: {
    opacity: 0,
    transform: [{ scale: 0.9 }],
  },
  to: {
    opacity: 1,
    transform: [{ scale: 1 }],
  },
}).duration(appearDuration);

export const appearExiting = new Keyframe({
  from: {
    opacity: 1,
    transform: [{ scale: 1 }],
  },
  to: {
    opacity: 0,
    transform: [{ scale: 0.9 }],
  },
}).duration(appearDuration);

export const onPressScale = {
  start: 1,
  end: 0.95,
  duration: 250,
};
