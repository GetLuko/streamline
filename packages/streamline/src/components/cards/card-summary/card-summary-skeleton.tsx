import React from 'react';
import { Box } from '../../../primitives/box/box';
import { Card } from '../../../primitives/card/card';
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
      <Box
        height={24}
        width={24}
        backgroundColor={'GREY_200'}
        borderRadius={'md'}
      />
      <Box paddingTop={'md'} />
      <Box
        height={24}
        width={'100%'}
        backgroundColor={'GREY_200'}
        borderRadius={'md'}
      />
    </Card>
  );
};
