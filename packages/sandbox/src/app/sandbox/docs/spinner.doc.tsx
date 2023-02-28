import { Box, Spinner } from '@getluko/streamline';

export const SpinnerSandbox = () => (
  <Box flex={1} alignItems="flex-start">
    <Spinner />
    <Spinner color="TERRA_500" />
    <Spinner size="small" />
    <Spinner size="regular" />
    <Spinner size="large" />
  </Box>
);
