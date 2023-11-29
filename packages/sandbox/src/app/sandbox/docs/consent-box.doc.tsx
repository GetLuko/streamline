import { Box, ConsentBox } from '@getluko/streamline';
import React, { useState } from 'react';

export const ConsentBoxSandbox = () => {
  const [checked, setChecked] = useState(false);
  const [dangerChecked, setDangerChecked] = useState(false);
  return (
    <Box margin="xs">
      <Box margin="xs">
        <ConsentBox
          value={checked}
          onChange={(v) => setChecked(v)}
          text="Accept [terms and conditions](https://www.luko.eu)"
        />
      </Box>
      <Box margin="xs">
        <ConsentBox
          appearance="danger"
          value={dangerChecked}
          onChange={(v) => setDangerChecked(v)}
          text="Danger"
        />
      </Box>
      <Box margin="xs">
        <ConsentBox
          appearance="primary"
          isDisabled
          value={checked}
          onChange={(v) => setDangerChecked(v)}
          text="Primary disabled"
        />
      </Box>
      <Box margin="xs">
        <ConsentBox
          appearance="danger"
          isDisabled
          value={dangerChecked}
          onChange={(v) => setDangerChecked(v)}
          text="Danger disabled"
        />
      </Box>
      <Box margin="xs">
        <ConsentBox
          value={checked}
          onChange={(v) => setChecked(v)}
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget ultricies ultrices, nunc nisl aliquam nisl, nec aliquam nisl nisl nec nisl."
        />
      </Box>
    </Box>
  );
};
