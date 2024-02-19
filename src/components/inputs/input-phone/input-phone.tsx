import { ParseError, parsePhoneNumberWithError } from 'libphonenumber-js';
import { FC, useState } from 'react';

import CountryPicker from './components/country-picker';
import { InputPhoneProps } from './input-phone.types';
import { Box } from '../../../primitives/box/box';
import { Text } from '../../../primitives/text/text';
import { InputTextLabel } from '../input-text/components/input-text-label';
import { InputText } from '../input-text/input-text';

export const InputPhone: FC<InputPhoneProps> = ({
  onChangePhoneNumber,
  onCountryPickerPress,
  countryCode = 'FR',
  isError,
  isDisabled,
  isFocused,
  description,
  label,
  onError,
  ...props
}) => {
  const [inputValue, setInputValue] = useState('');

  const showDescription =
    (description && !isError) || (isError && inputValue.length > 2);

  const handleOnChangeText = (value: string) => {
    try {
      const phoneNumber = parsePhoneNumberWithError(value, countryCode);
      setInputValue(phoneNumber.formatNational());
      onChangePhoneNumber?.(phoneNumber);
    } catch (error) {
      if (error instanceof ParseError) {
        onError?.(error);
      }
      setInputValue(value);
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
          isError={isError}
          onCountryPickerPress={onCountryPickerPress}
        />
        <Box flex={1} marginLeft="xs">
          <InputText
            {...props}
            isDisabled={isDisabled}
            isError={isError}
            isFocused={isFocused}
            keyboardType="phone-pad"
            onChangeText={handleOnChangeText}
            value={inputValue}
            isPhoneInput
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
