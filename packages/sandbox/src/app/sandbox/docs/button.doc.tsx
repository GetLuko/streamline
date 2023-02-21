import { Box, Button } from '@getluko/streamline';

export const ButtonSandbox = () => (
  <Box paddingHorizontal="xl">
    <Box paddingVertical="sm">
      <Button variant="primary" text="hello world" />
    </Box>
    <Box paddingVertical="sm">
      <Button variant="primary" isDisabled text="hello world" />
    </Box>
    <Box paddingVertical="sm">
      <Button variant="secondary" text="hello world" />
    </Box>
    <Box paddingVertical="sm">
      <Button variant="neutral" text="hello world" />
    </Box>
    <Box paddingVertical="sm">
      <Button variant="danger" text="hello world" />
    </Box>
    <Box paddingVertical="sm">
      <Button variant="placeholder" text="hello world" />
    </Box>
  </Box>
);
