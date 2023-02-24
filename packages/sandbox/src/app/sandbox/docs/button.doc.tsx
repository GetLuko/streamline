import { Box, Button } from '@getluko/streamline';

export const ButtonSandbox = () => (
  <Box paddingHorizontal="xl">
    <Box paddingVertical="xxs">
      <Button accessibilityLabel="label" appearance="primary" text="Primary" />
    </Box>
    <Box paddingVertical="xxs">
      <Button
        accessibilityLabel="label"
        appearance="primary"
        isDisabled
        text="Disabled"
      />
    </Box>
    <Box paddingVertical="xxs">
      <Button
        accessibilityLabel="label"
        appearance="secondary"
        text="Secondary"
      />
    </Box>
    <Box paddingVertical="xxs">
      <Button accessibilityLabel="label" appearance="neutral" text="Neutral" />
    </Box>
    <Box paddingVertical="xxs">
      <Button accessibilityLabel="label" appearance="danger" text="Danger" />
    </Box>
    <Box paddingVertical="xxs">
      <Button
        accessibilityLabel="label"
        appearance="placeholder"
        text="Placeholder"
      />
    </Box>
    <Box paddingVertical="xxs">
      <Button accessibilityLabel="label" isLoading appearance="primary" />
    </Box>
    <Box paddingVertical="xxs">
      <Button accessibilityLabel="label" isLoading appearance="secondary" />
    </Box>
    <Box paddingVertical="xxs">
      <Button accessibilityLabel="label" isLoading appearance="neutral" />
    </Box>
    <Box paddingVertical="xxs">
      <Button accessibilityLabel="label" isLoading appearance="danger" />
    </Box>
  </Box>
);
