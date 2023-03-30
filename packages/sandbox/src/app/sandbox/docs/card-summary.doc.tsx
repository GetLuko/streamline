import { Box, CardSummary } from '@getluko/streamline';

export const CardSummarySandbox = () => (
  <Box paddingHorizontal="xl">
    <Box paddingVertical="xxs">
      <CardSummary
        header="Header"
        value="Value"
        iconName="Area"
        rightAction="navigate"
        title="Title"
        description="Description"
        buttonLabel="Label"
      />
    </Box>
    <Box paddingVertical="xxs">
      <CardSummary
        appearance="bluko"
        header="Header"
        value="Value"
        iconName="Area"
        rightAction="navigate"
        title="Title"
        description="Description"
        buttonLabel="Label"
      />
    </Box>
  </Box>
);
