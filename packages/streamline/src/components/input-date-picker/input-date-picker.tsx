import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import React, { useEffect } from 'react';
import { Pressable } from 'react-native-ama';

import { DateFormat, formatDate } from '../../utils/date';
import { isAndroid, isIOS } from '../../utils/platform';
import { InputText } from '../inputs/input-text/input-text';
import { ModalPickerIOS } from './modal-picker-ios';

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

export default InputDatePicker;
