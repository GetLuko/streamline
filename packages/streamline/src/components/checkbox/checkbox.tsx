import { Pressable, ViewStyle } from 'react-native';
import { CheckboxProps } from './checkbox.types';
import { getCheckboxColors } from './checkbox.utils';
import { Box } from '../../primitives/box/box';
import { Icon } from '../../primitives/icon/icon';
import { useStreamlineTheme } from '../../theme';
import {
  CHECKBOX_BORDER_CONTAINER_SIZE,
  CHECKBOX_BORDER_WIDTH,
  CHECKBOX_CONTAINER_SIZE,
  CHECKBOX_SHADOW_CONTAINER_SIZE,
  CHECKBOX_SHADOW_WIDTH,
} from './checkbox.constants';

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
          height={CHECKBOX_SHADOW_CONTAINER_SIZE}
          width={CHECKBOX_SHADOW_CONTAINER_SIZE}
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
            height={CHECKBOX_BORDER_CONTAINER_SIZE}
            width={CHECKBOX_BORDER_CONTAINER_SIZE}
            alignItems={'center'}
            justifyContent={'center'}
            backgroundColor={
              value || pressed ? colors.activeColor : colors.borderColor
            }
            style={styles.border}
          >
            <Box
              height={CHECKBOX_CONTAINER_SIZE}
              width={CHECKBOX_CONTAINER_SIZE}
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

  /**
   * In order to have the perfect border radius, we use the following formula:
   * innerRadius + distance = outerRadius
   * Also we cannot use the borderWidth property, because their is a bug in react-native that causes the border to be cut off.
   * Related issues:
   * https://github.com/facebook/react-native/issues/36566
   * https://github.com/facebook/react-native/issues/33060
   */
  const borderRadius = borderRadii.sm;
  const shadowRaddi = borderRadius + CHECKBOX_SHADOW_WIDTH;
  const containerRaddi = borderRadius - CHECKBOX_BORDER_WIDTH;

  return {
    pressable: {
      height: CHECKBOX_SHADOW_CONTAINER_SIZE,
      width: CHECKBOX_SHADOW_CONTAINER_SIZE,
    },
    shadow: {
      borderRadius: shadowRaddi,
    },
    border: {
      borderRadius: borderRadius,
    },
    container: {
      borderRadius: containerRaddi,
    },
  };
};

export default Checkbox;
