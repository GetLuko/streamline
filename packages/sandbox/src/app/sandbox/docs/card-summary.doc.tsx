import { Box, CardSummary, Text } from '@getluko/streamline';
import { useState } from 'react';

export const CardSummarySandbox = () => {
  const [descriptionText, setDescriptionText] = useState<
    'Default' | 'Touch' | 'Loading'
  >('Default');

  const handlePressIn = () => {
    console.log("I'm touched");
    setDescriptionText('Touch');
  };

  const sleep = async () =>
    setTimeout(() => {
      return true;
    }, 2000);

  const asyncFunc = async () => {
    setDescriptionText('Loading');
    await sleep();
    setDescriptionText('Default');
  };

  return (
    <Box paddingHorizontal="xl" backgroundColor={'GREY_50'}>
      <Box paddingVertical="xxs">
        <CardSummary
          appearance="primary"
          header="Header"
          value="Value"
          iconName="Area"
          rightAction="navigate"
          title="Primary"
          description={descriptionText}
          buttonProps={{
            text: 'Primary Default',
          }}
          onPress={asyncFunc}
          onPressIn={handlePressIn}
          isLoading={descriptionText === 'Loading'}
        />
      </Box>
      <Box paddingVertical="xxs">
        <CardSummary
          appearance="neutral"
          header="Header"
          value="Value"
          iconName="Area"
          rightAction="navigate"
          title="Neutral"
          description={descriptionText}
          buttonProps={{
            text: 'Secondary Default',
          }}
          onPress={asyncFunc}
          onPressIn={handlePressIn}
        />
      </Box>
      <Box paddingVertical="xxs">
        <CardSummary
          appearance="warning"
          header="Header"
          value="Value"
          iconName="Area"
          rightAction="navigate"
          title="Warning"
          description={descriptionText}
          buttonProps={{
            text: 'Warning Default',
          }}
          onPress={asyncFunc}
          onPressIn={handlePressIn}
        />
      </Box>
      <Box paddingVertical="xxs">
        <CardSummary
          appearance="danger"
          header="Header"
          value="Value"
          iconName="Area"
          rightAction="navigate"
          title="Danger"
          description={descriptionText}
          buttonProps={{
            text: 'Danger Default',
          }}
          onPress={asyncFunc}
          onPressIn={handlePressIn}
        />
      </Box>
      <Box paddingVertical="xxs">
        <CardSummary isSkeleton />
      </Box>
      <Box paddingTop={'md'} />
      <Text variant={'titleSmall'}>CTA has a onPress</Text>
      <Box paddingVertical="xxs">
        <CardSummary
          appearance="primary"
          header="Header"
          value="Value"
          iconName="Area"
          rightAction="navigate"
          title="Primary"
          description={descriptionText}
          buttonProps={{
            text: 'Primary Default',
            onPress: sleep,
          }}
          onPress={asyncFunc}
          onPressIn={handlePressIn}
          isLoading={descriptionText === 'Loading'}
        />
      </Box>
    </Box>
  );
};
