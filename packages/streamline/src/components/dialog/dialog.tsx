import { PropsWithChildren } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Buttons from './components/buttons';
import { DialogProps } from './dialog.types';
import { Box } from '../../primitives/box/box';
import { Icon } from '../../primitives/icon/icon';
import { Text } from '../../primitives/text/text';

export const Dialog = ({
  title,
  children,
  buttons,
  icon,
}: PropsWithChildren<DialogProps>) => {
  const styles = useStyles();

  return (
    <Box
      borderTopLeftRadius="lg"
      borderTopRightRadius="lg"
      backgroundColor="PURE_WHITE_1000"
      paddingVertical="md"
    >
      <Box paddingHorizontal="md" alignItems={icon ? 'center' : 'flex-start'}>
        {icon ? (
          <Box
            marginBottom="xl"
            marginTop="md"
            borderRadius="round"
            borderWidth={2}
            borderColor="GREY_100"
            width={80}
            height={80}
            justifyContent="center"
            alignItems="center"
          >
            <Icon iconName={icon} size="xlarge" />
          </Box>
        ) : null}

        <Text
          variant="titleMediumBold"
          marginBottom="xs"
          textAlign={icon ? 'center' : 'left'}
        >
          {title}
        </Text>
      </Box>
      {children}
      {buttons ? <Buttons buttons={buttons} /> : null}
      <Box style={styles.bottomInset} />
    </Box>
  );
};

const useStyles = () => {
  const insets = useSafeAreaInsets();

  return {
    bottomInset: {
      marginBottom: insets.bottom,
    },
  };
};

export default Dialog;
