import React from 'react';

import { Text } from '../../../../primitives/text/text';
import { ColorTheme } from '../../../../theme';
import { ListItemSelectableProps } from '../list-item-selectable.type';

export const BottomContent = ({
  description,
  color,
}: Required<Pick<ListItemSelectableProps, 'description'>> & {
  color: ColorTheme;
}) => {
  return (
    <Text color={color} variant="subBody" marginRight="md">
      {description}
    </Text>
  );
};
