import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import React, { useEffect } from 'react';
import { Modal } from 'react-native';
import { Pressable } from 'react-native-ama';

import { Box } from '../../primitives/box/box';
import { Text } from '../../primitives/text/text';
import { DateFormat, formatDate } from '../../utils/date';
import { isAndroid, isIOS } from '../../utils/platform';
import { InputText } from '../inputs/input-text/input-text';

/* eslint-disable-next-line */
export interface InputDatePickerProps {
  label: string;
  placeholder?: string;
  description?: string;
  isDisabled?: boolean;
  isError?: boolean;
  testID?: string;
  date?: Date;
  dateFormat?: DateFormat;
  initialDate?: Date;
  maximumDate?: Date;
  minimumDate?: Date;
  onChange?: (date?: Date) => void;
  onFocus?: () => void;
  okLabelIOS?: string;
}

export function InputDatePicker({
  label,
  placeholder,
  description,
  isDisabled,
  testID,
  isError,
  date,
  initialDate,
  onFocus,
  onChange,
  maximumDate,
  minimumDate,
  okLabelIOS = 'OK',
  dateFormat = DateFormat.DATE_EN,
}: InputDatePickerProps) {
  const [focused, setFocused] = React.useState(false);
  const [innerDate, setInnerDate] = React.useState(date);

  useEffect(() => {
    if (initialDate && !isNaN(initialDate.getTime())) {
      setInnerDate(initialDate);
      onChange?.(initialDate);
    } else {
      setInnerDate(date);
    }
  }, []);

  const innerOnChange = (event?: DateTimePickerEvent, selectedDate?: Date) => {
    if (isAndroid) {
      setFocused(false);
    }
    if (selectedDate) {
      setInnerDate(selectedDate);
      onChange?.(selectedDate);
    }
  };

  const dateString = innerDate ? formatDate(innerDate, dateFormat) : undefined;

  return (
    <Pressable
      disabled={isDisabled}
      onPress={() => {
        setFocused(true);
        onFocus?.();
        console.log('press');
      }}
      testID={testID}
      accessibilityRole="button"
      accessibilityLabel={label}
    >
      {isAndroid && focused ? (
        <DateTimePicker
          testID="date-picker-input"
          value={innerDate || new Date()}
          onChange={innerOnChange}
          minimumDate={minimumDate}
          maximumDate={maximumDate}
        />
      ) : null}
      {isIOS ? (
        <ModalPickerIOS
          focused={focused}
          setFocused={setFocused}
          okLabelIOS={okLabelIOS}
          innerDate={innerDate}
          innerOnChange={innerOnChange}
          minimumDate={minimumDate}
          maximumDate={maximumDate}
        />
      ) : null}
      <InputText
        pointerEvents="none"
        label={label}
        placeholder={placeholder}
        description={description}
        type="calendar"
        isError={isError}
        isFocused={focused}
        value={dateString}
      />
    </Pressable>
  );
}

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

const ModalPickerIOS = ({
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
      style={{ flex: 1 }}
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
        style={{ height: 400 }}
      />
    </Box>
  </Modal>
);

export default InputDatePicker;
