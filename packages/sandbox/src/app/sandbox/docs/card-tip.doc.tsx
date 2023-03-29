import { Box, CardTip } from '@getluko/streamline';

export const CardTipSandbox = () => (
  <Box paddingHorizontal="xl">
    <Box paddingVertical="xxs">
      <CardTip appearance="primary" description="Primary" iconName="Area" />
    </Box>
    <Box paddingVertical="xxs">
      <CardTip appearance="secondary" description="Secondary" iconName="Area" />
    </Box>
    <Box paddingVertical="xxs">
      <CardTip appearance="warning" description="Warning" iconName="Area" />
    </Box>
    <Box paddingVertical="xxs">
      <CardTip appearance="danger" description="Danger" iconName="Area" />
    </Box>
    <Box paddingVertical="xxs">
      <CardTip
        appearance="neutral"
        description="Default appearance"
        iconName="Area"
      />
    </Box>
  </Box>
);
