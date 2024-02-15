import React from 'react';

import { Box } from '../../../../primitives/box/box';
import { Card } from '../../../../primitives/card/card';
import { Skeleton } from '../../../../primitives/skeleton/skeleton';

export const CardCalloutSkeleton = ({
  numberOfLines = 1,
}: {
  numberOfLines?: number;
}) => (
  <Card backgroundColor="GREY_100">
    <Skeleton shape="square" />
    {[...Array(numberOfLines)].map((_, index) => (
      <Box key={index} marginTop="md">
        <Skeleton />
      </Box>
    ))}
  </Card>
);
