import DateTimePicker from '@react-native-community/datetimepicker';
import { Modal, StyleSheet } from 'react-native';
import { Pressable } from 'react-native-ama';

import { Box } from '../../primitives/box/box';
import { Text } from '../../primitives/text/text';
import { InputDatePickerProps } from './input-date-picker';

interface ModalPickerIOS
  extends Pick<
    InputDatePickerProps,
    'maximumDate' | 'minimumDate' | 'okLabelIOS'
  > {
  focused: boolean;
  setFocused: (focused: boolean) => void;
  innerOnChange?: () => void;
  innerDate?: Date;
}

export const ModalPickerIOS = ({
  focused,
  setFocused,
  okLabelIOS = 'OK',
  innerDate,
  innerOnChange,
  minimumDate,
  maximumDate,
}: ModalPickerIOS) => (
  <Modal
    animationType="fade"
    transparent={true}
    visible={focused}
    onRequestClose={() => {
      setFocused(false);
    }}
  >
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={okLabelIOS.toLocaleLowerCase()}
      onPress={() => {
        setFocused(false);
      }}
      style={styles.pressable}
    >
      <Box
        backgroundColor="BLACK"
        opacity={0.2}
        position="absolute"
        bottom={0}
        left={0}
        right={0}
        top={0}
        flex={1}
      />
    </Pressable>
    <Box
      backgroundColor="GREY_100"
      position="absolute"
      bottom={0}
      left={0}
      right={0}
    >
      <Box
        backgroundColor="PURE_WHITE_1000"
        height={40}
        width="100%"
        alignItems="flex-end"
        justifyContent="center"
      >
        <Text
          testID="answer-done"
          onPress={() => setFocused(false)}
          color="BLUKO_500"
          padding="xs"
          variant="bodyBold"
        >
          {okLabelIOS}
        </Text>
      </Box>
      <DateTimePicker
        testID="date-picker-input"
        value={innerDate || new Date()}
        display="inline"
        onChange={innerOnChange}
        minimumDate={minimumDate}
        maximumDate={maximumDate}
        themeVariant="light"
        style={styles.datePicker}
      />
    </Box>
  </Modal>
);

const styles = StyleSheet.create({
  datePicker: {
    height: 400,
  },
  pressable: { flex: 1 },
});
