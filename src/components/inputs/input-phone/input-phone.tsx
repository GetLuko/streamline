import parsePhoneNumberFromString from 'libphonenumber-js';
import { FC, useState } from 'react';

import { Box } from '../../../primitives/box/box';
import { Text } from '../../../primitives/text/text';
import { InputTextLabel } from '../input-text/components/input-text-label';
import { InputText } from '../input-text/input-text';

import CountryPicker from './components/country-picker';
import { InputPhoneProps } from './input-phone.types';

export const InputPhone: FC<InputPhoneProps> = ({
  onChangePhoneNumber,
  onCountryPickerPress,
  countryCode = 'FR',
  isError,
  isDisabled,
  isFocused,
  description,
  label,
  onValidChange,
  ...props
}) => {
  const initialValue = props.defaultValue
    ? parsePhoneNumberFromString(
        props.defaultValue,
        countryCode
      )?.formatNational() || ''
    : '';
  const [inputValue, setInputValue] = useState(initialValue);

  const showError = isError && inputValue.length > 2;

  const showDescription = (description && !isError) || showError;

  const handleOnChangeText = (value: string) => {
    const phoneNumber = parsePhoneNumberFromString(value, countryCode);

    if (phoneNumber) {
      onChangePhoneNumber?.(phoneNumber);
      setInputValue(phoneNumber.formatNational());
      onValidChange?.(phoneNumber.isValid());
    } else {
      setInputValue(value);
      onValidChange?.(false);
    }
  };

  return (
    <Box>
      {label ? (
        <Box paddingBottom="xs">
          <InputTextLabel
            label={label}
            active={isFocused}
            disabled={isDisabled}
          />
        </Box>
      ) : null}
      <Box flexDirection="row">
        <CountryPicker
          countryCode={countryCode}
          isDisabled={isDisabled}
          isError={showError}
          onCountryPickerPress={onCountryPickerPress}
        />
        <Box flex={1} marginLeft="xs">
          <InputText
            {...props}
            isDisabled={isDisabled}
            isError={showError}
            isFocused={isFocused}
            keyboardType="phone-pad"
            onChangeText={handleOnChangeText}
            value={inputValue}
            inputType="PHONE"
          />
        </Box>
      </Box>
      {showDescription ? (
        <Text
          color={isError ? 'TERRA_500' : 'GREY_500'}
          variant="caption"
          marginTop="xs"
        >
          {description}
        </Text>
      ) : null}
    </Box>
  );
};

export default InputPhone;
