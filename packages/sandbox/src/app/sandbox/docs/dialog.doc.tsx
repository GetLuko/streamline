import { Box, Dialog, ListItemGroup, Markdown } from '@getluko/streamline';

import { DocList } from '../components/DocList';

const DIALOGS = [
  <Dialog
    title="Dialog title"
    buttons={{
      primary: { text: 'Primary', appearance: 'primary' },
      orientation: 'horizontal',
    }}
  >
    <Box paddingHorizontal="md">
      <Markdown>
        {"1 Button\nI'm a test children for the **dialog component**."}
      </Markdown>
    </Box>
  </Dialog>,
  <Dialog
    title="Dialog title"
    buttons={{
      primary: { text: 'Primary', appearance: 'primary' },
      secondary: { text: 'Secondary', appearance: 'secondary' },
      orientation: 'horizontal',
    }}
  >
    <Box paddingHorizontal="md">
      <Markdown>
        {
          "2 Button - Horizontal\nI'm a test children for the **dialog component**."
        }
      </Markdown>
    </Box>
  </Dialog>,
  <Dialog
    title="Dialog title"
    buttons={{
      primary: { text: 'Primary', appearance: 'primary' },
      secondary: { text: 'Neutral', appearance: 'neutral' },
      orientation: 'vertical',
    }}
  >
    <Box paddingHorizontal="md">
      <Markdown>
        {
          "2 Button - Vertical\nI'm a test children for the **dialog component**."
        }
      </Markdown>
    </Box>
  </Dialog>,
  <Dialog
    title="Dialog title"
    icon="Check"
    buttons={{
      primary: { text: 'Primary', appearance: 'primary' },
      secondary: { text: 'Neutral', appearance: 'neutral' },
      orientation: 'vertical',
    }}
  >
    <Box paddingHorizontal="md">
      <Markdown>
        {
          "2 Button - Vertical\nI'm a test children for the **dialog component**."
        }
      </Markdown>
    </Box>
  </Dialog>,
  <Dialog title="Download an insurance certificate">
    <ListItemGroup
      items={[
        { iconName: 'GroupOfPeople', title: 'For everyone' },
        { iconName: 'Person', title: 'For a specific person' },
      ]}
    />
  </Dialog>,
];

export const DialogSandbox = () => {
  return <DocList docs={DIALOGS} />;
};
