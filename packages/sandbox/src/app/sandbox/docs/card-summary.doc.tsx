import { Box, CardSummary } from '@getluko/streamline';
import { usePress } from '../../../../../streamline/src/hooks/use-press.hook';

export const CardSummarySandbox = () => {
  const asyncFunc = async () => {
    await setTimeout(() => {
      //
      console.log('resolved');
    }, 2000);
  };

  return (
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
          onPress={asyncFunc}
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
          onPress={asyncFunc}
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
          isLoading
        />
      </Box>
    </Box>
  );
};
