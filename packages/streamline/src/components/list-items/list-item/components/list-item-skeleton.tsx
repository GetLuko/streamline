import React from 'react';

import { Box } from '../../../../primitives/box/box';
import { Skeleton } from '../../../../primitives/skeleton/skeleton';

export const ListItemSkeleton = () => (
  <Box backgroundColor="GREY_100" padding="md" flexDirection="row">
    <Skeleton shape="square" />
    <Box marginLeft="md">
      <Skeleton />
    </Box>
  </Box>
);
