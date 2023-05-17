import React from 'react';

import { Text } from '../../../../primitives/text/text';
import { ListItemValueProps } from '../list-item-value.types';

export const BottomContent = ({
  description,
}: Required<Pick<ListItemValueProps, 'description'>>) => {
  return (
    <Text color="GREY_700" variant="subBody" marginRight="md">
      {description}
    </Text>
  );
};
