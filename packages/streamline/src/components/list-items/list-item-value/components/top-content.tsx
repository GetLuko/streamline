import React from 'react';

import { Text } from '../../../../primitives/text/text';
import { ListItemValueProps } from '../list-item-value.types';

export const TopContent = ({
  header,
  isDisabled,
}: Required<Pick<ListItemValueProps, 'header'>> &
  Pick<ListItemValueProps, 'isDisabled'>) => {
  return (
    <Text
      color={isDisabled ? 'GREY_500' : 'GREY_700'}
      variant="subBody"
      marginRight="md"
    >
      {header}
    </Text>
  );
};
