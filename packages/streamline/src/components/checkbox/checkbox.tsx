import { Pressable, StyleSheet, ViewStyle } from 'react-native';
import { CheckboxProps } from './checkbox.types';
import { getCheckboxColors } from './checkbox.utils';
import { Box } from '../../primitives/box/box';
import { Icon } from '../../primitives/icon/icon';
import { useStreamlineTheme } from '../../theme';

export const Checkbox = ({
  appearance = 'primary',
  value,
  onChange,
  disabled = false,
  testID,
}: CheckboxProps) => {
  const colors = getCheckboxColors({ appearance, disabled });
  const styles = useStyles();

  const handleOnPress = () => {
    onChange?.(!value);
  };

  return (
    <Pressable
      disabled={disabled}
      hitSlop={10}
      onPress={handleOnPress}
      testID={testID}
      style={styles.pressable}
    >
      {({ pressed }) => (
        <Box
          alignItems={'center'}
          justifyContent={'center'}
          height={24}
          width={24}
        >
          <Box
            position={'absolute'}
            top={0}
            left={0}
            right={0}
            bottom={0}
            backgroundColor={colors.shadowColor}
            style={styles.shadow}
            opacity={pressed ? 1 : 0}
          />
          <Box
            height={20}
            width={20}
            alignItems={'center'}
            justifyContent={'center'}
            backgroundColor={
              value || pressed ? colors.activeColor : colors.borderColor
            }
            style={styles.border}
          >
            <Box
              height={16}
              width={16}
              alignItems={'center'}
              justifyContent={'center'}
              backgroundColor={
                value ? colors.activeColor : colors.backgroundColor
              }
              style={styles.container}
            >
              <Icon iconName={'Check'} color={colors.iconColor} size="small" />
            </Box>
          </Box>
        </Box>
      )}
    </Pressable>
  );
};

const useStyles = (): {
  pressable: ViewStyle;
  shadow: ViewStyle;
  border: ViewStyle;
  container: ViewStyle;
} => {
  const { borderRadii } = useStreamlineTheme();

  const shadowRaddi = borderRadii.sm + 2;
  const containerRaddi = borderRadii.sm - 2;

  return {
    pressable: {
      height: 24,
      width: 24,
    },
    shadow: {
      borderRadius: shadowRaddi,
    },
    border: {
      borderRadius: borderRadii.sm,
    },
    container: {
      borderRadius: containerRaddi,
    },
  };
};

export default Checkbox;
