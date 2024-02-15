import { Box, Radio } from '@getluko/streamline';
import { useState } from 'react';

export const RadioSandbox = () => {
  const [checked, setChecked] = useState(false);
  const [dangerChecked, setDangerChecked] = useState(false);
  return (
    <Box margin="xs">
      <Box margin="xs">
        <Radio value={checked} onChange={(v) => setChecked(v)} />
      </Box>
      <Box margin="xs">
        <Radio
          appearance="danger"
          value={dangerChecked}
          onChange={(v) => setDangerChecked(v)}
        />
      </Box>
      <Box margin="xs">
        <Radio value={true} isDisabled />
      </Box>
      <Box margin="xs">
        <Radio value={false} isDisabled />
      </Box>
      <Box margin="xs">
        <Radio appearance="danger" value={false} isDisabled />
      </Box>
      <Box margin="xs">
        <Radio appearance="danger" value={true} isDisabled />
      </Box>
    </Box>
  );
};
