import { useState } from 'react';
import { Box, Checkbox } from '@getluko/streamline';

export const CheckboxSandbox = () => {
  const [checked, setChecked] = useState(false);
  const [dangerChecked, setDangerChecked] = useState(false);
  return (
    <Box margin={'md'}>
      <Checkbox value={checked} onChange={(v) => setChecked(v)} />
      <Checkbox
        appearance="danger"
        value={dangerChecked}
        onChange={(v) => setDangerChecked(v)}
      />
      <Checkbox value={true} disabled />
      <Checkbox value={false} disabled />
      <Checkbox appearance="danger" value={false} disabled />
      <Checkbox appearance="danger" value={true} disabled />
    </Box>
  );
};
