import { Box, fonts, Text, TextVariant } from '@getluko/streamline';

const typoContent =
  'ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvwxyz1234567890@#$%^&*_+=-/|~`!?.,:;"\'(){}[]<>€£¥§©®™°∞Ωμ∑π√№';
const fontsKeys = Object.keys(fonts).sort() as TextVariant[];

export const TypoSandbox = () => {
  const styles = useStyles();
  return (
    <Box margin="md">
      {fontsKeys.map((key) => (
        <Box key={key}>
          <Text
            variant="body"
            color="BLUKO_1000"
            marginVertical="sm"
            style={styles.key}
          >
            {'----- '}
            {key} {'-----'}
          </Text>
          <Text variant={key} style={styles.content}>
            {typoContent}
          </Text>
        </Box>
      ))}
    </Box>
  );
};

const useStyles = () => ({
  key: {
    backgroundColor: '#FFF4DE',
  },
  content: {
    backgroundColor: '#EAE9E3',
  },
});
