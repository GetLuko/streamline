import { Box, Card } from '@getluko/streamline';

export const CardSandbox = () => (
  <Box paddingHorizontal="xl">
    <Box paddingVertical="xl">
      <Card backgroundColor="PURE_WHITE_1000" shadows="moderate">
        <Box padding="xl" />
      </Card>
    </Box>
    <Box paddingVertical="xl">
      <Card
        backgroundColor="BLUKO_500"
        animated
        onPress={() => console.log('tt')}
      >
        <Box padding="xl" />
      </Card>
    </Box>
  </Box>
);
