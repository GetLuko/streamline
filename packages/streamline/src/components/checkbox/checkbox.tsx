import { Pressable, StyleSheet } from 'react-native';
import { CheckboxProps } from './checkbox.types';
import { getCheckboxColors } from './checkbox.utils';
import { Box } from '../../primitives/box/box';
import { Icon } from '../../primitives/icon/icon';

export const Checkbox = ({
  appearance = 'primary',
  value,
  onChange,
  disabled = false,
  testID,
}: CheckboxProps) => {
  const colors = getCheckboxColors({ appearance, disabled });

  const handleOnPress = () => {
    onChange?.(!value);
  };

  return (
    <Pressable
      disabled={disabled}
      style={styles.pressable}
      hitSlop={10}
      onPress={handleOnPress}
      testID={testID}
    >
      {({ pressed }) => (
        <>
          {pressed ? (
            <Box
              position={'absolute'}
              top={0}
              left={0}
              right={0}
              bottom={0}
              backgroundColor={colors.shadowColor}
              borderRadius={'sm'}
            />
          ) : null}
          <Box
            height={18}
            width={18}
            borderWidth={2}
            borderRadius={'sm'}
            alignItems={'center'}
            justifyContent={'center'}
            borderColor={
              value || pressed ? colors.activeColor : colors.borderColor
            }
            backgroundColor={
              value ? colors.activeColor : colors.backgroundColor
            }
          >
            <Icon iconName={'Check'} color={colors.iconColor} size="small" />
          </Box>
        </>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressable: {
    width: 22,
    height: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Checkbox;
