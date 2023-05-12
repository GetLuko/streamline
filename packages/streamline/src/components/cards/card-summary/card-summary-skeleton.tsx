import React from 'react';

import { Box } from '../../../primitives/box/box';
import { Card } from '../../../primitives/card/card';
import { Skeleton } from '../../../primitives/skeleton/skeleton';
import { CardSummaryProps } from './card-summary.types';

export const CardSummarySkeleton = (
  props: Pick<CardSummaryProps, 'title' | 'accessibilityLabel' | 'testID'>
) => {
  const { accessibilityLabel, title, testID } = props;
  return (
    <Card
      backgroundColor="GREY_100"
      testID={testID}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel || title}
      accessibilityState={{
        busy: true,
      }}
    >
      <Skeleton shape="square" />
      <Box marginTop="md">
        <Skeleton />
      </Box>
    </Card>
  );
};
