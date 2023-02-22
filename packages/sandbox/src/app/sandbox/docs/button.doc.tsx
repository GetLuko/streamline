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
      <Button isLoading appearance="primary" />
    </Box>
    <Box paddingVertical="xxs">
      <Button isLoading appearance="secondary" />
    </Box>
    <Box paddingVertical="xxs">
      <Button isLoading appearance="neutral" />
    </Box>
    <Box paddingVertical="xxs">
      <Button isLoading appearance="danger" />
    </Box>
  </Box>
);
