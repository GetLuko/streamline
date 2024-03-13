import React from 'react';

import { Box } from '../../../primitives/box/box';
import { Card } from '../../../primitives/card/card';
import { Skeleton } from '../../../primitives/skeleton/skeleton';

import { LARGE_CARD_HEIGHT, SMALL_CARD_SIZE } from './card-carousel.constants';
import { CardCarouselProps } from './card-carousel.types';

export const CardCarouselSkeleton = (
  props: Pick<CardCarouselProps, 'size' | 'accessibilityLabel' | 'testID'>
) => {
  const { accessibilityLabel, testID, size } = props;

  const isSmall = size === 'small';
  const cardHeight = isSmall ? SMALL_CARD_SIZE : LARGE_CARD_HEIGHT;
  const cardWidth = isSmall ? SMALL_CARD_SIZE : '100%';

  return (
    <Card
      backgroundColor="GREY_100"
      testID={testID && `${testID}-skeleton`}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
      accessibilityState={{
        busy: true,
      }}
      height={cardHeight}
      width={cardWidth}
      justifyContent="space-between"
    >
      <Box width={isSmall ? 24 : 64}>
        <Skeleton shape="row" />
      </Box>
      <Box marginTop="md">
        <Skeleton />
      </Box>
    </Card>
  );
};
