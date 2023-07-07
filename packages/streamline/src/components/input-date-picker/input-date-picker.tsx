import React, { useEffect } from 'react';
import { Pressable } from 'react-native-ama';

import { DateFormat, formatDate } from '../../utils/date';
import { isAndroid } from '../../utils/platform';
import { DatePicker } from '../date-picker/date-picker';
import { InputText } from '../inputs/input-text/input-text';

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

  const innerOnChange = (selectedDate?: Date) => {
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
      }}
      testID={testID}
      accessibilityRole="button"
      accessibilityLabel={label}
    >
      <DatePicker
        focused={focused}
        initialDate={initialDate}
        maximumDate={maximumDate}
        minimumDate={minimumDate}
        okLabelIOS={okLabelIOS}
        onChange={innerOnChange}
        onFocusChange={setFocused}
      />
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
