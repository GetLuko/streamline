import React from 'react';

import { Box } from '../../../primitives/box/box';
import { Card } from '../../../primitives/card/card';
import { Skeleton } from '../../../primitives/skeleton/skeleton';
import { CardCarouselProps } from './card-carousel.types';

export const CardCarouselSkeleton = (
  props: Pick<CardCarouselProps, 'size' | 'accessibilityLabel' | 'testID'>
) => {
  const { accessibilityLabel, testID, size } = props;

  return (
    <Card
      backgroundColor="GREY_100"
      testID={`CardCarousel_skeleton_${testID}`}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
      accessibilityState={{
        busy: true,
      }}
      height={size === 'SM' ? 152 : 192}
      width={size === 'SM' ? 156 : '100%'}
      justifyContent="space-between"
    >
      <Box width={size === 'LG' ? 64 : 24}>
        <Skeleton shape="row" />
      </Box>
      <Box marginTop="md">
        <Skeleton />
      </Box>
    </Card>
  );
};
