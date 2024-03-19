import { Box } from '../../../primitives/box/box';
import { Skeleton } from '../../../primitives/skeleton/skeleton';

import { CONTAINER_WIDTH } from './list-item-option-media.constants';

export const ListItemOptionMediaSkeleton = () => (
  <Box
    backgroundColor="GREY_100"
    paddingVertical="xl"
    paddingHorizontal="md"
    alignItems="center"
    justifyContent="center"
    width={CONTAINER_WIDTH}
    borderRadius="lg"
  >
    <Skeleton shape="square" size="xl" />
    <Box paddingBottom="md" />
    <Skeleton percentage={100} />
  </Box>
);
