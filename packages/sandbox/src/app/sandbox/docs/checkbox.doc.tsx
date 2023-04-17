import { useState } from 'react';
import { Box, Checkbox } from '@getluko/streamline';

export const CheckboxSandbox = () => {
  const [checked, setChecked] = useState(false);
  const [dangerChecked, setDangerChecked] = useState(false);
  return (
    <Box margin={'xs'}>
      <Box margin={'xs'}>
        <Checkbox value={checked} onChange={(v) => setChecked(v)} />
      </Box>
      <Box margin={'xs'}>
        <Checkbox
          appearance="danger"
          value={dangerChecked}
          onChange={(v) => setDangerChecked(v)}
        />
      </Box>
      <Box margin={'xs'}>
        <Checkbox value={true} disabled />
      </Box>
      <Box margin={'xs'}>
        <Checkbox value={false} disabled />
      </Box>
      <Box margin={'xs'}>
        <Checkbox appearance="danger" value={false} disabled />
      </Box>
      <Box margin={'xs'}>
        <Checkbox appearance="danger" value={true} disabled />
      </Box>
    </Box>
  );
};