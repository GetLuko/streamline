import { Box } from '@getluko/streamline';

type Props = {
  docs: JSX.Element[];
} & Pick<React.ComponentProps<typeof Box>, 'margin'>;

export const DocList = ({ docs, margin = 'xs' }: Props) => (
  <Box flex={1} margin={margin}>
    {docs.map((item, i) => (
      <Box key={i} marginBottom="sm">
        {item}
      </Box>
    ))}
  </Box>
);
