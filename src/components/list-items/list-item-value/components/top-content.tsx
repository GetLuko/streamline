import React from 'react';

import { Text } from '../../../../primitives/text/text';
import { ColorTheme } from '../../../../theme';
import { ListItemValueProps } from '../list-item-value.types';

export const TopContent = ({
  header,
  color,
}: Required<Pick<ListItemValueProps, 'header'>> & { color: ColorTheme }) => {
  return (
    <Text color={color} variant="subBody" marginRight="md">
      {header}
    </Text>
  );
};
