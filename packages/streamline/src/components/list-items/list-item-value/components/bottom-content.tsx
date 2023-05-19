import React from 'react';

import { Text } from '../../../../primitives/text/text';
import { ListItemValueProps } from '../list-item-value.types';

export const BottomContent = ({
  description,
  isDisabled,
}: Required<Pick<ListItemValueProps, 'description'>> &
  Pick<ListItemValueProps, 'isDisabled'>) => {
  return (
    <Text
      color={isDisabled ? 'GREY_500' : 'GREY_700'}
      variant="subBody"
      marginRight="md"
    >
      {description}
    </Text>
  );
};
