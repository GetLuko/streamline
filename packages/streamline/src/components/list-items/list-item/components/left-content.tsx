import React from 'react';

import { Box } from '../../../../primitives/box/box';
import { Icon } from '../../../../primitives/icon/icon';
import { ListItemProps } from '../list-item.types';

export const LeftContent = ({ iconName }: Pick<ListItemProps, 'iconName'>) => {
  if (!iconName) {
    return null;
  }

  return (
    <Box marginRight="md">
      <Icon color="BLUKO_500" iconName={iconName} size="large" />
    </Box>
  );
};
