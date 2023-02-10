import { Box } from '../box/box';
import React from 'react';

import { ICON_SIZE } from './icon.constants';
import { IconsName, Size } from './icon.types';
import {
  isCorrectRegularIconName,
  isCorrectSmallIconName,
  sanitizeIconName,
} from './icon.utils';
import * as RegularIcons from './generated/regular';
import * as SmallIcons from './generated/small';

type Props = {
  color?: string;
  size: Size;
  iconName?: IconsName;
};

export const IconSvg = ({ iconName, size, color }: Props) => {
  const totalIconSize = ICON_SIZE[size];
  const sanitizedIconName = sanitizeIconName(iconName);

  if (size === 'small' && isCorrectSmallIconName(sanitizedIconName)) {
    return React.createElement(SmallIcons[sanitizedIconName], {
      color,
      width: totalIconSize,
      height: totalIconSize,
    });
  }

  if (isCorrectRegularIconName(sanitizedIconName)) {
    return React.createElement(RegularIcons[sanitizedIconName], {
      color,
      width: totalIconSize,
      height: totalIconSize,
    });
  }
  console.log(`Icon not found ${iconName}, sanitized as ${sanitizedIconName} for ${size} size`);

  return React.createElement(Box, {
    width: totalIconSize,
    height: totalIconSize,
  });
};
