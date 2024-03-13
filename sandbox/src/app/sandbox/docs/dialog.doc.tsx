import {
  Box,
  Dialog,
  ListItemGroup,
  Markdown,
  StarRating,
} from '@getluko/streamline';
import { useState } from 'react';

import { DocList } from '../components/DocList';

export const DialogSandbox = () => {
  const [star, setStar] = useState(0);

  const onStarPress = (rating: number) => {
    console.log('onPress pressed', rating);
    setStar(rating);
  };

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
    <Dialog title="How did that go?">
      <Box paddingHorizontal="md">
        <Markdown>
          {'Your feedback helps us improve our service for everyone.'}
        </Markdown>
        <Box paddingHorizontal="md" paddingTop="md">
          <StarRating currentRating={star} onRatingChange={onStarPress} />
        </Box>
      </Box>
    </Dialog>,
    <Dialog title="How did that go?" icon="Check">
      <Box paddingHorizontal="md">
        <Markdown>
          {'Your feedback helps us improve our service for everyone.'}
        </Markdown>
        <Box paddingHorizontal="md" paddingTop="md">
          <StarRating currentRating={star} onRatingChange={onStarPress} />
        </Box>
      </Box>
    </Dialog>,
  ];

  return <DocList docs={DIALOGS} />;
};
