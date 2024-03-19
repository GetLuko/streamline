import { Box, TabBar, TabBarProps, TabProps } from '@getluko/streamline';
import { useState } from 'react';

const tabsTwo = ['Title', 'Title'];
const tabsThree = ['Title', 'Title', 'Title'];
const tabsFour = ['Title', 'Title', 'Title', 'Title'];
const tabsFive = ['Title', 'Title', 'Title', 'Title', 'Title'];
const tabsSix = ['Title', 'Title', 'Title', 'Title', 'Title', 'Title'];
const tabsSixLong = [
  'Long title',
  'Long title',
  'Long title',
  'Long title',
  'Long title',
  'Long title',
];

const TabBarItem = ({
  appearance,
  tabs,
}: Pick<TabBarProps, 'appearance' | 'tabs'>) => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <Box paddingBottom="md">
      <TabBar
        appearance={appearance}
        tabs={tabs}
        tabIndex={tabIndex}
        onTabSelected={setTabIndex}
      />
    </Box>
  );
};

const TabBarRow = ({ appearance }: Pick<TabProps, 'appearance'>) => {
  return (
    <Box>
      <TabBarItem appearance={appearance} tabs={tabsTwo} />
      <TabBarItem appearance={appearance} tabs={tabsThree} />
      <TabBarItem appearance={appearance} tabs={tabsFour} />
      <TabBarItem appearance={appearance} tabs={tabsFive} />
      <TabBarItem appearance={appearance} tabs={tabsSix} />
      <TabBarItem appearance={appearance} tabs={tabsSixLong} />
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
