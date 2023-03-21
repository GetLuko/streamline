import { Box, Spinner } from '@getluko/streamline';

export const SpinnerSandbox = () => (
  <Box flex={1} alignItems="center">
    <Spinner size="small" />
    <Spinner />
    <Spinner color="TERRA_500" />
    <Spinner size="regular" color="PURE_WHITE_1000" />
    <Spinner size="large" color="BLUKO_500" />
  </Box>
);
