import { Box, Text, getShadowsStyle } from '@getluko/streamline';

const cardSize = 128;

const CardDemo = ({ label, ...rest }: { label: string }) => {
  return (
    <Box
      backgroundColor="PURE_WHITE_1000"
      width={cardSize}
      height={cardSize}
      marginBottom="xxxl"
      borderRadius="xl"
      alignItems="center"
      justifyContent="center"
      {...rest}
    >
      <Text variant="bodyBold">{label}</Text>
    </Box>
  );
};

export const ShadowSandbox = () => {
  return (
    <Box justifyContent="center" alignContent="center" alignItems="center">
      <CardDemo label="Soft" {...getShadowsStyle('soft')} />
      <CardDemo label="Moderate" {...getShadowsStyle('moderate')} />
      <CardDemo label="Strong" {...getShadowsStyle('strong')} />
    </Box>
  );
};
