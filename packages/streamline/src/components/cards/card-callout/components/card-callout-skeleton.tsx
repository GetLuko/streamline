import React from 'react';

import { Card } from '../../../../primitives/card/card';
import { Line, Square } from '../../../skeleton';

export const CardCalloutSkeleton = ({
  numberOfLines = 1,
}: {
  numberOfLines?: number;
}) => (
  <Card backgroundColor="GREY_100">
    <Square />
    {[...Array(numberOfLines)].map((_, index) => (
      <Line key={index} marginTop="md" />
    ))}
  </Card>
);
