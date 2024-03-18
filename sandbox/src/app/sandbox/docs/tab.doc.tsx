import { Box, Tab, TabDivider, TabProps } from '@getluko/streamline';
import { useState } from 'react';

import { DocList } from '../components/DocList';

const TabsRow = ({ appearance }: Pick<TabProps, 'appearance'>) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <Box flexDirection="row">
      <Tab
        appearance={appearance}
        title="Title"
        isSelected={selectedIndex === 0}
        onPress={() => setSelectedIndex(0)}
      />
      <Box paddingRight="md" />
      <Tab
        appearance={appearance}
        title="Title"
        isSelected={selectedIndex === 1}
        onPress={() => setSelectedIndex(1)}
      />
      <Box paddingRight="md" />
      <TabDivider appearance={appearance} />
    </Box>
  );
};

export const TabSandbox = () => {
  const TABS: JSX.Element[] = [
    <TabsRow appearance="primary" />,
    <TabsRow appearance="dark" />,
    <TabsRow appearance="light" />,
  ];

  return <DocList docs={TABS} margin="md" />;
};
