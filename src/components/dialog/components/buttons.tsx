import { ViewStyle } from 'react-native';

import { Box } from '../../../primitives/box/box';
import { useStreamlineTheme } from '../../../theme';
import { Button } from '../../buttons/button/button';
import { DialogProps } from '../dialog.types';

type ButtonsProps = Required<Pick<DialogProps, 'buttons'>>;

export const Buttons = ({ buttons }: ButtonsProps) => {
  const isHorizontal = buttons.orientation !== 'vertical';
  const styles = useStyles(buttons, isHorizontal);
  return (
    <Box
      marginTop="xl"
      flex={1}
      flexDirection={isHorizontal ? 'row-reverse' : 'column'}
      paddingHorizontal="md"
    >
      <Box flex={1} style={styles.primary}>
        <Button appearance="primary" {...buttons.primary} />
      </Box>
      {buttons.secondary ? (
        <Box flex={1} style={styles.secondary}>
          <Button appearance="neutral" {...buttons.secondary} />
        </Box>
      ) : null}
    </Box>
  );
};

const useStyles = (
  buttons: ButtonsProps['buttons'],
  isHorizontal: boolean,
): {
  primary: ViewStyle;
  secondary: ViewStyle;
} => {
  const { spacing } = useStreamlineTheme();

  return {
    primary: {
      ...(isHorizontal && buttons.secondary ? { marginLeft: spacing.xxs } : {}),
      ...(buttons.secondary ? { marginBottom: spacing.xxs } : {}),
    },
    secondary: {
      ...(isHorizontal
        ? { marginRight: spacing.xxs }
        : { marginTop: spacing.xxs }),
    },
  };
};

export default Buttons;
