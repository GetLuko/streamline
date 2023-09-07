import React from 'react';

import { Text } from '../../../../primitives/text/text';
import { ColorTheme } from '../../../../theme';
import { ListItemValueProps } from '../list-item-value.types';

export const BottomContent = ({
  description,
  color,
}: Required<Pick<ListItemValueProps, 'description'>> & {
  color: ColorTheme;
}) => {
  return (
    <Text color={color} variant="subBody" marginRight="md">
      {description}
    </Text>
  );
};
