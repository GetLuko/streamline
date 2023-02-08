import React from 'react';
import {
  ActivityIndicator,
  StyleProp,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

import { IconSvg } from './svgs/IconSvg';
import { ICON_SIZE } from './icon.constants';
import { IconsName, Size } from './icon.types';
import { ColorTheme, useStreamlineTheme } from '../../theme';
import { HIT_SLOP } from '../../theme/spacings';
import Wrapper from '../wrapper/wrapper';
import { Box } from '../box/box';

export type IconProps = {
  iconName: IconsName;
  size?: Size;
  isLoading?: boolean;
  onPress?: () => void;
  onPressIn?: () => void;
  onPressOut?: () => void;
  containerStyle?: StyleProp<ViewStyle>;
  testID?: string;
  color?: ColorTheme;
};

const getHitSlop = (size?: Size) => ({
  top: HIT_SLOP[size === 'small' ? 'regular' : 'small'],
  bottom: HIT_SLOP[size === 'small' ? 'regular' : 'small'],
  left: HIT_SLOP[size === 'small' ? 'regular' : 'small'],
  right: HIT_SLOP[size === 'small' ? 'regular' : 'small'],
});

export const Icon = React.memo(
  ({
    containerStyle,
    iconName,
    isLoading = false,
    onPress,
    onPressIn,
    onPressOut,
    size = 'regular',
    testID,
    color,
  }: IconProps) => {
    const theme = useStreamlineTheme();
    const totalIconSize = ICON_SIZE[size];
    const hexaColor = color ? theme.colors?.[color] : undefined;
    return (
      <Wrapper
        condition={onPress && !isLoading}
        wrapper={(children) => (
          <TouchableOpacity
            onPress={onPress}
            onPressIn={onPressIn}
            onPressOut={onPressOut}
            hitSlop={getHitSlop(size)}
          >
            {children}
          </TouchableOpacity>
        )}
      >
        <Box
          width={totalIconSize}
          height={totalIconSize}
          justifyContent="center"
          alignItems="center"
          style={[containerStyle]}
          testID={testID}
        >
          {isLoading ? (
            <ActivityIndicator size="small" color={hexaColor} />
          ) : (
            <IconSvg iconName={iconName} size={size} color={hexaColor} />
          )}
        </Box>
      </Wrapper>
    );
  }
);
