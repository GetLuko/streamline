import { PropsWithChildren } from 'react';
import { ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Box } from '../../primitives/box/box';
import { Icon } from '../../primitives/icon/icon';
import { Text } from '../../primitives/text/text';
import { useStreamlineTheme } from '../../theme';
import { Button } from '../buttons/button/button';
import { DialogProps } from './dialog.types';

export const Dialog = ({
  title,
  children,
  buttons,
  icon,
}: PropsWithChildren<DialogProps>) => {
  const isHorizontal = buttons.orientation === 'horizontal';
  const styles = useStyles(buttons, isHorizontal);
  return (
    <Box
      borderTopLeftRadius="lg"
      borderTopRightRadius="lg"
      backgroundColor="PURE_WHITE_1000"
      padding="md"
    >
      <Box alignItems={icon ? 'center' : 'flex-start'}>
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
      <Box
        marginTop="xl"
        flex={1}
        flexDirection={isHorizontal ? 'row-reverse' : 'column'}
        style={styles.buttonsContainer}
      >
        <Box flex={1} style={styles.primary}>
          <Button {...buttons.primary} />
        </Box>
        {buttons.secondary ? (
          <Box flex={1} style={styles.secondary}>
            <Button {...buttons.secondary} />
          </Box>
        ) : null}
      </Box>
    </Box>
  );
};

const useStyles = (
  buttons: DialogProps['buttons'],
  isHorizontal: boolean
): {
  buttonsContainer: ViewStyle;
  primary: ViewStyle;
  secondary: ViewStyle;
} => {
  const { spacing } = useStreamlineTheme();
  const insets = useSafeAreaInsets();

  return {
    buttonsContainer: {
      marginBottom: insets.bottom,
    },
    primary: {
      ...(isHorizontal ? { marginLeft: spacing.xxs } : {}),
      ...(buttons.secondary ? { marginBottom: spacing.xxs } : {}),
    },
    secondary: {
      ...(isHorizontal
        ? { marginRight: spacing.xxs }
        : { marginTop: spacing.xxs }),
    },
  };
};

export default Dialog;
