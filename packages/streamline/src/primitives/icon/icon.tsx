import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';

import { IconSvg } from './IconSvg';
import { ICON_SIZE } from './icon.constants';
import { IconsName, Size } from './icon.types';
import { ColorTheme, useStreamlineTheme } from '../../theme';
import { Box } from '../box/box';

export type IconProps = {
  color?: ColorTheme;
  containerStyle?: StyleProp<ViewStyle>;
  iconName: IconsName;
  size?: Size;
  testID?: string;
};

export const Icon = React.memo(
  ({
    color,
    containerStyle,
    iconName,
    size = 'regular',
    testID,
  }: IconProps) => {
    const theme = useStreamlineTheme();
    const totalIconSize = ICON_SIZE[size];
    const hexaColor = color ? theme.colors?.[color] : undefined;

    return (
      <Box
        width={totalIconSize}
        height={totalIconSize}
        justifyContent="center"
        alignItems="center"
        style={[containerStyle]}
        testID={testID}
      >
        <IconSvg iconName={iconName} size={size} color={hexaColor} />
      </Box>
    );
  }
);
