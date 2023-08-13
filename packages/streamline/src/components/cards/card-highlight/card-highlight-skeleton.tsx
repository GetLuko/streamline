import React from 'react';

import { Box } from '../../../primitives/box/box';
import { Card } from '../../../primitives/card/card';
import { Skeleton } from '../../../primitives/skeleton/skeleton';
import { CardHighlightProps } from './card-highlight.types';

export const CardHighlightSkeleton = (
  props: Pick<CardHighlightProps, 'title'>
) => {
  const { title } = props;
  return (
    <Card
      backgroundColor="GREY_100"
      accessibilityRole="button"
      accessibilityLabel={title}
      accessibilityState={{
        busy: true,
      }}
      height={192}
      justifyContent="space-between"
    >
      <Box width={64}>
        <Skeleton size="md" />
      </Box>
      <Skeleton size="lg" />
    </Card>
  );
};
