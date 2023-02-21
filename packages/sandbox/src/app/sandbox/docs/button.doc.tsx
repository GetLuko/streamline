import { Box, Button } from '@getluko/streamline';

export const ButtonSandbox = () => (
  <Box paddingHorizontal="xl">
    <Box paddingVertical="xs">
      <Button appearance="primary" text="hello world" />
    </Box>
    <Box paddingVertical="xs">
      <Button appearance="primary" isDisabled text="hello world" />
    </Box>
    <Box paddingVertical="xs">
      <Button appearance="secondary" text="hello world" />
    </Box>
    <Box paddingVertical="xs">
      <Button appearance="neutral" text="hello world" />
    </Box>
    <Box paddingVertical="xs">
      <Button appearance="danger" text="hello world" />
    </Box>
    <Box paddingVertical="xs">
      <Button appearance="placeholder" text="hello world" />
    </Box>
  </Box>
);
