import React from 'react';

import * as RegularIcons from './generated/regular';
import * as SmallIcons from './generated/small';
import { ICON_SIZE, SPINNER_SIZE } from './icon.constants';
import { IconsName, Size } from './icon.types';
import {
  isCorrectRegularIconName,
  isCorrectSmallIconName,
  sanitizeIconName,
} from './icon.utils';
import { Box } from '../box/box';

type Props = {
  color?: string;
  size: Size;
  iconName?: IconsName;
  isSpinner?: boolean;
};

export const IconSvg = ({
  iconName,
  size,
  color,
  isSpinner = false,
}: Props) => {
  const totalIconSize = isSpinner ? SPINNER_SIZE[size] : ICON_SIZE[size];
  const sanitizedIconName = sanitizeIconName(iconName);

  if (
    (size === 'small' || size === 'regular') &&
    isCorrectSmallIconName(sanitizedIconName)
  ) {
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
  console.log(
    `Icon not found ${iconName}, sanitized as ${sanitizedIconName} for ${size} size`
  );

  return React.createElement(Box, {
    width: totalIconSize,
    height: totalIconSize,
  });
};
