import React from 'react';

import { Text } from '../../../../primitives/text/text';
import { ListItemValueProps } from '../list-item-value.types';

export const TopContent = ({
  header,
}: Required<Pick<ListItemValueProps, 'header'>>) => {
  return (
    <Text color="GREY_700" variant="subBody" marginRight="md">
      {header}
    </Text>
  );
};
