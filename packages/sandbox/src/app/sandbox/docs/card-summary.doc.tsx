import { Box, CardSummary, Text } from '@getluko/streamline';
import { useState } from 'react';

import { sleep } from '../sandbox.utils';

export const CardSummarySandbox = () => {
  const [descriptionText, setDescriptionText] = useState<
    'Default' | 'Touch' | 'Loading'
  >('Default');

  const handlePressIn = () => {
    setDescriptionText('Touch');
  };

  const asyncFunc = async () => {
    setDescriptionText('Loading');
    await sleep(2000);
    setDescriptionText('Default');
  };

  return (
    <Box paddingHorizontal="xl" backgroundColor="GREY_50">
      <Box paddingVertical="xxs">
        <CardSummary
          appearance="primary"
          header="Header"
          subHeader="Subheader"
          value="Value"
          iconName="Area"
          rightAction="navigate"
          title="Primary"
          description={descriptionText}
          footer={{
            text: 'Primary Default',
            type: 'button',
          }}
          onPress={asyncFunc}
          onPressIn={handlePressIn}
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
          footer={{
            text: 'Danger',
            type: 'tag',
            iconName: 'Area',
            appearance: 'danger',
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
          footer={{
            text: 'Warning Default',
            type: 'button',
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
          footer={{
            text: 'Danger Default',
            type: 'button',
          }}
          onPress={asyncFunc}
          onPressIn={handlePressIn}
        />
      </Box>
      <Box paddingVertical="xxs">
        <CardSummary isSkeleton />
      </Box>
      <Box paddingTop="md" />
      <Text variant="titleSmall">{'CTA has an onPress action'}</Text>
      <Box paddingVertical="xxs">
        <CardSummary
          appearance="primary"
          header="Header"
          value="Value"
          iconName="Area"
          rightAction="navigate"
          title="Primary"
          description={descriptionText}
          footer={{
            text: 'Primary Default',
            onPress: () => sleep(1000),
            type: 'button',
          }}
          onPress={asyncFunc}
          onPressIn={handlePressIn}
          isLoading={descriptionText === 'Loading'}
        />
      </Box>
    </Box>
  );
};
