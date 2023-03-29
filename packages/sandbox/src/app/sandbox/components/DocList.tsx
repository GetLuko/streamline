import { Box } from '@getluko/streamline';

export const DocList = ({ docs }: { docs: JSX.Element[] }) => (
  <Box flex={1} margin="xs">
    {docs.map((item, i) => (
      <Box key={i} marginBottom="sm">
        {item}
      </Box>
    ))}
  </Box>
);
