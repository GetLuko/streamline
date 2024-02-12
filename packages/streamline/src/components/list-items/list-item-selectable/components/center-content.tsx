import React from 'react';

import { RightContent } from './right-content';
import { Box } from '../../../../primitives/box/box';
import { Text } from '../../../../primitives/text/text';
import { ColorTheme } from '../../../../theme';
import { ListItemSelectableProps } from '../list-item-selectable.type';

export const CenterContent = ({
  rightOption,
  title,
  value,
  color,
}: {
  color: ColorTheme;
} & Pick<
  ListItemSelectableProps,
  'onPress' | 'rightOption' | 'title' | 'value'
>) => {
  return (
    <Box flex={1} flexDirection="row" alignItems="center">
      <Box flex={1} minWidth="25%">
        <Text color={color} variant="body">
          {title}
        </Text>
      </Box>
      <RightContent rightOption={rightOption} value={value} />
    </Box>
  );
};
