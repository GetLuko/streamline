import { Pressable, StyleSheet } from 'react-native';

import { Box } from '../../primitives/box/box';

import {
  RADIO_BORDER_CONTAINER_SIZE,
  RADIO_CONTAINER_SIZE,
  RADIO_SHADOW_CONTAINER_SIZE,
} from './radio.constants';
import { RadioProps } from './radio.types';
import { getRadioColors } from './radio.utils';

export const Radio = ({
  appearance = 'primary',
  value,
  onChange,
  isDisabled = false,
  testID,
  pointerEvents,
}: RadioProps) => {
  const colors = getRadioColors({ appearance, isDisabled });

  const handleOnPress = () => {
    onChange?.(!value);
  };

  return (
    <Pressable
      disabled={isDisabled}
      hitSlop={10}
      onPress={handleOnPress}
      testID={testID}
      style={styles.container}
      pointerEvents={pointerEvents}
    >
      {({ pressed }) => (
        <Box
          alignItems="center"
          justifyContent="center"
          height={RADIO_SHADOW_CONTAINER_SIZE}
          width={RADIO_SHADOW_CONTAINER_SIZE}
          borderRadius="round"
        >
          <Box
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
            backgroundColor={colors.shadowColor}
            opacity={pressed ? 1 : 0}
            borderRadius="round"
          />
          <Box
            height={RADIO_BORDER_CONTAINER_SIZE}
            width={RADIO_BORDER_CONTAINER_SIZE}
            alignItems="center"
            justifyContent="center"
            backgroundColor={
              value || pressed ? colors.activeColor : colors.borderColor
            }
            borderRadius="round"
          >
            <Box
              height={RADIO_CONTAINER_SIZE}
              width={RADIO_CONTAINER_SIZE}
              alignItems="center"
              justifyContent="center"
              backgroundColor={
                value ? colors.activeColor : colors.backgroundColor
              }
              borderRadius="round"
            >
              <Box
                height={8}
                width={8}
                backgroundColor={colors.dotColor}
                borderRadius="round"
              />
            </Box>
          </Box>
        </Box>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    height: RADIO_SHADOW_CONTAINER_SIZE,
    width: RADIO_SHADOW_CONTAINER_SIZE,
  },
});

export default Radio;
