import { Box, fonts, Text, TextVariant } from '@getluko/streamline';

const typoContent =
  'ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvwxyz1234567890@#$%^&*_+=-/|~`!?.,:;"\'(){}[]<>€£¥§©®™°∞Ωμ∑π√№';
const fontsKeys = Object.keys(fonts).sort() as TextVariant[];

export const TypoSandbox = () => (
  <Box margin="md">
    {fontsKeys.map((key) => (
      <Box key={key}>
        <Text
          variant="body"
          color="BLUKO_1000"
          marginVertical="sm"
          style={{ backgroundColor: '#FFF4DE' }}
        >
          {'----- '}
          {key} {'-----'}
        </Text>
        <Text variant={key} style={{ backgroundColor: '#EAE9E3' }}>
          {typoContent}
        </Text>
      </Box>
    ))}
  </Box>
);
