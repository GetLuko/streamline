import { Platform } from 'react-native';

import { Colors } from '../../theme';

export const getColorMapping = (colors: Colors) =>
  Platform.select({
    android: {
      enabled: {
        activeTrack: colors.BLUKO_400,
        activeThumb: colors.BLUKO_500,
        inactiveTrack: colors.GREY_400,
        inactiveThumb: colors.PURE_WHITE_1000,
      },
      disabled: {
        activeTrack: colors.BLUKO_100,
        activeThumb: colors.BLUKO_200,
        inactiveTrack: colors.GREY_200,
        inactiveThumb: colors.GREY_100,
      },
    },
    ios: {
      enabled: {
        activeTrack: colors.BLUKO_500,
        activeThumb: colors.PURE_WHITE_1000,
        inactiveTrack: colors.GREY_300,
        inactiveThumb: colors.PURE_WHITE_1000,
      },
      disabled: {
        activeTrack: colors.BLUKO_200,
        activeThumb: colors.PURE_WHITE_1000,
        inactiveTrack: colors.GREY_200,
        inactiveThumb: colors.PURE_WHITE_1000,
      },
    },
  });
