import { ViewStyle } from 'react-native';

import { Box } from '../../../../primitives/box/box';
import { Text } from '../../../../primitives/text/text';
import { useStreamlineTheme } from '../../../../theme';
import {
  CELL_BORDER_WIDTH,
  CELL_SHADOW_CONTAINER_SIZE,
  CELL_SHADOW_WIDTH,
} from '../input-code.constants';
import { InputCodeCellProps } from '../input-code.types';
import { getInputCellColors } from '../input-code.utils';

export const InputCodeCell = ({
  code,
  index,
  length,
  isInputFocused,
  isDisabled,
  isError,
}: InputCodeCellProps) => {
  const styles = useStyles({
    isFocused:
      isInputFocused &&
      (index === code.length ||
        (index === code.length - 1 && code.length === length)),
    isDisabled,
    isError,
  });

  return (
    <Box
      key={`cell-${index}`}
      alignItems="center"
      justifyContent="center"
      height={CELL_SHADOW_CONTAINER_SIZE}
      flex={1}
      {...(index !== length - 1 ? { marginRight: 'xs' } : {})}
    >
      <Box style={styles.shadow} />
      <Box
        alignItems="center"
        alignSelf="stretch"
        backgroundColor="PURE_WHITE_1000"
        borderWidth={CELL_BORDER_WIDTH}
        justifyContent="center"
        flex={1}
        style={styles.container}
      >
        <Text
          variant="titleLargeBold"
          color={isDisabled ? 'GREY_500' : 'GREY_1000'}
        >
          {code[index]}
        </Text>
      </Box>
    </Box>
  );
};

const useStyles = ({
  isFocused,
  isDisabled = false,
  isError = false,
}: {
  isFocused: boolean;
  isDisabled?: boolean;
  isError?: boolean;
}): {
  shadow: ViewStyle;
  container: ViewStyle;
} => {
  const { borderRadii, colors } = useStreamlineTheme();

  const borderRadius = borderRadii.lg;
  const shadowRaddi = borderRadius + CELL_SHADOW_WIDTH;

  const { shadowColor, borderColor, backgroundColor } = getInputCellColors({
    isDisabled,
    isFocused,
    isError,
  });

  return {
    shadow: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      borderRadius: shadowRaddi,
      backgroundColor: shadowColor ? colors[shadowColor] : undefined,
    },
    container: {
      borderRadius: borderRadius,
      margin: 2,
      borderColor: colors[borderColor],
      backgroundColor: colors[backgroundColor],
    },
  };
};
