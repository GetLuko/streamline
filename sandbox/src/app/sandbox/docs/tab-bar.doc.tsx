import { Box, TabBar, TabProps } from '@getluko/streamline';
import { useState } from 'react';

const tabsTwo = ['Title', 'Title'];
const tabsThree = ['Title', 'Title', 'Title'];
const tabsFour = ['Title', 'Title', 'Title', 'Title'];
const tabsFive = ['Title', 'Title', 'Title', 'Title', 'Title'];
const tabsSix = ['Title', 'Title', 'Title', 'Title', 'Title', 'Title'];

const TabBarRow = ({ appearance }: Pick<TabProps, 'appearance'>) => {
  const [tabIndexTwo, setTabIndexTwo] = useState(0);
  const [tabIndexThree, setTabIndexThree] = useState(0);
  const [tabIndexFour, setTabIndexFour] = useState(0);
  const [tabIndexFive, setTabIndexFive] = useState(0);
  const [tabIndexSix, setTabIndexSix] = useState(0);

  return (
    <Box>
      <TabBar
        appearance={appearance}
        tabs={tabsTwo}
        tabIndex={tabIndexTwo}
        onTabSelected={setTabIndexTwo}
      />
      <Box paddingBottom="md" />
      <TabBar
        appearance={appearance}
        tabs={tabsThree}
        tabIndex={tabIndexThree}
        onTabSelected={setTabIndexThree}
      />
      <Box paddingBottom="md" />
      <TabBar
        appearance={appearance}
        tabs={tabsFour}
        tabIndex={tabIndexFour}
        onTabSelected={setTabIndexFour}
      />
      <Box paddingBottom="md" />
      <TabBar
        appearance={appearance}
        tabs={tabsFive}
        tabIndex={tabIndexFive}
        onTabSelected={setTabIndexFive}
      />
      <Box paddingBottom="md" />
      <TabBar
        appearance={appearance}
        tabs={tabsSix}
        tabIndex={tabIndexSix}
        onTabSelected={setTabIndexSix}
      />
    </Box>
  );
};

export const TabBarSandbox = () => {
  const TABS: JSX.Element[] = [
    <TabBarRow appearance="primary" />,
    <TabBarRow appearance="dark" />,
    <TabBarRow appearance="light" />,
  ];

  return (
    <Box flex={1}>
      {TABS.map((item, i) => (
        <Box key={i} marginBottom="sm">
          {item}
        </Box>
      ))}
    </Box>
  );
};
