import { Box, Button } from '@getluko/streamline';

export const ButtonSandbox = () => (
  <Box paddingHorizontal="xl">
    <Box paddingVertical="xxs">
      <Button appearance="primary" text="Primary" />
    </Box>
    <Box paddingVertical="xxs">
      <Button appearance="primary" isDisabled text="Disabled" />
    </Box>
    <Box paddingVertical="xxs">
      <Button appearance="secondary" text="Secondary" />
    </Box>
    <Box paddingVertical="xxs">
      <Button appearance="neutral" text="Neutral" />
    </Box>
    <Box paddingVertical="xxs">
      <Button appearance="danger" text="Danger" />
    </Box>
    <Box paddingVertical="xxs">
      <Button appearance="placeholder" text="Placeholder" />
    </Box>
    <Box paddingVertical="xxs">
      <Button text="primary" isLoading appearance="primary" />
    </Box>
    <Box paddingVertical="xxs">
      <Button text="secondary" isLoading appearance="secondary" />
    </Box>
    <Box paddingVertical="xxs">
      <Button text="neutral" isLoading appearance="neutral" />
    </Box>
    <Box paddingVertical="xxs">
      <Button text="danger" isLoading appearance="danger" />
    </Box>
  </Box>
);
