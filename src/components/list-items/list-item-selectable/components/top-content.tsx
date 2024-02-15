import React from 'react';

import { Text } from '../../../../primitives/text/text';
import { ColorTheme } from '../../../../theme';
import { ListItemSelectableProps } from '../list-item-selectable.type';

export const TopContent = ({
  header,
  color,
}: Required<Pick<ListItemSelectableProps, 'header'>> & {
  color: ColorTheme;
}) => {
  return (
    <Text color={color} variant="subBody" marginRight="md">
      {header}
    </Text>
  );
};
