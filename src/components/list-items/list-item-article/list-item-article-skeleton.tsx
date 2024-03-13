import React from 'react';

import { Box } from '../../../primitives/box/box';
import { Skeleton } from '../../../primitives/skeleton/skeleton';

import { LIST_ITEM_ARTICLE_HEIGHT } from './constants';

export const ListItemArticleSkeleton = () => (
  <Box
    borderRadius="lg"
    padding="md"
    flexDirection="row"
    alignItems="center"
    height={LIST_ITEM_ARTICLE_HEIGHT}
  >
    <Skeleton shape="square" size="xl" />
    <Box flex={1} paddingLeft="md">
      <Skeleton />
    </Box>
  </Box>
);
