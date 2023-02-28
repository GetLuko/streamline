import { Box, Button } from '@getluko/streamline';

export const ButtonMiniSandbox = () => (
  <Box paddingHorizontal="xl">
    <Box paddingVertical="xxs">
      <Button iconName="Bear" size="mini" appearance="primary" text="Primary" />
    </Box>
    <Box paddingVertical="xxs">
      <Button
        iconName="Bear"
        size="mini"
        appearance="primary"
        isDisabled
        text="Disabled"
      />
    </Box>
    <Box paddingVertical="xxs">
      <Button
        iconName="Bear"
        size="mini"
        appearance="secondary"
        text="Secondary"
      />
    </Box>
    <Box paddingVertical="xxs">
      <Button iconName="Bear" size="mini" appearance="neutral" text="Neutral" />
    </Box>
    <Box paddingVertical="xxs">
      <Button iconName="Bear" size="mini" appearance="danger" text="Danger" />
    </Box>
    <Box paddingVertical="xxs">
      <Button
        iconName="Bear"
        size="mini"
        appearance="placeholder"
        text="Placeholder"
      />
    </Box>
    <Box paddingVertical="xxs">
      <Button text="Primary" size="mini" isLoading appearance="primary" />
    </Box>
    <Box paddingVertical="xxs">
      <Button text="secondary" size="mini" isLoading appearance="secondary" />
    </Box>
    <Box paddingVertical="xxs">
      <Button text="neutral" size="mini" isLoading appearance="neutral" />
    </Box>
    <Box paddingVertical="xxs">
      <Button text="danger" size="mini" isLoading appearance="danger" />
    </Box>
  </Box>
);
