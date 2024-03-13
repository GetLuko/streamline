import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import { useEffect, useState } from 'react';

import { isAndroid } from '../../../utils/platform';

import { ModalPickerIOS } from './modal-picker-ios';

interface DatePickerProps {
  focused: boolean;
  initialDate?: Date;
  minimumDate?: Date;
  maximumDate?: Date;
  okLabelIOS?: string;
  onChange?: (date?: Date) => void;
  onFocusChange?: (focused: boolean) => void;
}

export const DatePicker = ({
  initialDate,
  focused,
  maximumDate,
  minimumDate,
  okLabelIOS,
  onChange,
  onFocusChange,
}: DatePickerProps) => {
  const [innerDate, setInnerDate] = useState(initialDate);
  const [innerFocused, setFocused] = useState(focused);

  useEffect(() => {
    setFocused(focused);
  }, [focused]);

  const innerOnChange = (_?: DateTimePickerEvent, selectedDate?: Date) => {
    if (isAndroid) {
      setFocused(false);
      onFocusChange?.(false);
    }
    if (selectedDate) {
      setInnerDate(selectedDate);
      onChange?.(selectedDate);
    }
  };

  if (isAndroid && innerFocused) {
    return (
      <DateTimePicker
        testID="date-picker-input"
        value={innerDate || new Date()}
        onChange={innerOnChange}
        minimumDate={minimumDate}
        maximumDate={maximumDate}
      />
    );
  }
  return (
    <ModalPickerIOS
      focused={innerFocused}
      setFocused={(state) => {
        setFocused(state);
        onFocusChange?.(state);
      }}
      okLabelIOS={okLabelIOS}
      innerDate={innerDate}
      innerOnChange={innerOnChange}
      minimumDate={minimumDate}
      maximumDate={maximumDate}
    />
  );
};
