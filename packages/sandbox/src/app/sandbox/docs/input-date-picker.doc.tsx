import {
  DatePicker,
  InputDatePicker,
  ListItemValue,
} from '@getluko/streamline';
import { useState } from 'react';

import { DocList } from '../components/DocList';

export const InputDatePickerSandbox = () => {
  const [date, setDate] = useState<Date>(new Date('2023-06-07'));
  const [focused, setFocused] = useState<boolean>(false);
  const docs: JSX.Element[] = [
    <InputDatePicker
      label="Title"
      placeholder="Placeholder"
      description="Description"
    />,
    <InputDatePicker
      label="Date"
      placeholder="Placeholder"
      description="Description"
      date={new Date('2023-06-07')}
    />,
    <ListItemValue
      title="Date"
      value={date.toDateString()}
      rightOption={{
        iconName: 'Write',
        onPress: () => setFocused(true),
        accessibilityLabel: 'Edit date',
      }}
    />,
    <DatePicker
      focused={focused}
      onChange={(date) => date && setDate(date)}
      onFocusChange={setFocused}
    />,
  ];
  return <DocList docs={docs} />;
};
