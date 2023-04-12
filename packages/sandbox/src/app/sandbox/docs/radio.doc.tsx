import { useState } from 'react';
import { Box, Radio } from '@getluko/streamline';

export const RadioSandbox = () => {
  const [checked, setChecked] = useState(false);
  const [dangerChecked, setDangerChecked] = useState(false);
  return (
    <Box margin={'xs'}>
      <Box margin={'xs'}>
        <Radio value={checked} onChange={(v) => setChecked(v)} />
      </Box>
      <Box margin={'xs'}>
        <Radio
          appearance="danger"
          value={dangerChecked}
          onChange={(v) => setDangerChecked(v)}
        />
      </Box>
      <Box margin={'xs'}>
        <Radio value={true} disabled />
      </Box>
      <Box margin={'xs'}>
        <Radio value={false} disabled />
      </Box>
      <Box margin={'xs'}>
        <Radio appearance="danger" value={false} disabled />
      </Box>
      <Box margin={'xs'}>
        <Radio appearance="danger" value={true} disabled />
      </Box>
    </Box>
  );
};
