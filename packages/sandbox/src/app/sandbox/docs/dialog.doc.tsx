import { Dialog, Markdown } from '@getluko/streamline';

import { DocList } from '../components/DocList';

const DIALOGS = [
  <Dialog
    title="Dialog title"
    buttons={{
      primary: { text: 'Primary', appearance: 'primary' },
      orientation: 'horizontal',
    }}
  >
    <Markdown>
      {"1 Button\nI'm a test children for the **dialog component**."}
    </Markdown>
  </Dialog>,
  <Dialog
    title="Dialog title"
    buttons={{
      primary: { text: 'Primary', appearance: 'primary' },
      secondary: { text: 'Secondary', appearance: 'secondary' },
      orientation: 'horizontal',
    }}
  >
    <Markdown>
      {
        "2 Button - Horizontal\nI'm a test children for the **dialog component**."
      }
    </Markdown>
  </Dialog>,
  <Dialog
    title="Dialog title"
    buttons={{
      primary: { text: 'Primary', appearance: 'primary' },
      secondary: { text: 'Neutral', appearance: 'neutral' },
      orientation: 'vertical',
    }}
  >
    <Markdown>
      {"2 Button - Vertical\nI'm a test children for the **dialog component**."}
    </Markdown>
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
    <Markdown>
      {"2 Button - Vertical\nI'm a test children for the **dialog component**."}
    </Markdown>
  </Dialog>,
];

export const DialogSandbox = () => {
  return <DocList docs={DIALOGS} />;
};
