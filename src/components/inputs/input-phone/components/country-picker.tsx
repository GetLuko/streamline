import { getCountryCallingCode } from 'libphonenumber-js';
import { Pressable } from 'react-native';

import { Box } from '../../../../primitives/box/box';
import { Icon } from '../../../../primitives/icon/icon';
import { Text } from '../../../../primitives/text/text';
import { getFlagEmoji } from '../../../../utils/country';
import { CountryPickerProps } from '../input-phone.types';

const CountryPicker = ({
  countryCode = 'FR',
  isDisabled,
  isError,
  onCountryPickerPress,
}: CountryPickerProps) => {
  const backgroundColor = isDisabled ? 'GREY_25' : 'PURE_WHITE_1000';
  const borderColor = isError ? 'TERRA_500' : 'GREY_100';
  const textColor = isDisabled ? 'GREY_500' : 'GREY_1000';

  return (
    <Pressable onPress={onCountryPickerPress} disabled={isDisabled}>
      <Box
        flexDirection="row"
        alignItems="center"
        alignSelf="flex-start"
        height={48}
        paddingHorizontal="md"
        backgroundColor={backgroundColor}
        borderRadius="lg"
        borderColor={borderColor}
        borderWidth={2}
      >
        <Text variant="body">{getFlagEmoji(countryCode)}</Text>

        <Text variant="body" color={textColor} paddingHorizontal="xs">
          {`+${getCountryCallingCode(countryCode)}`}
        </Text>
        <Icon iconName="ChevronDown" size="regular" color="GREY_400" />
      </Box>
    </Pressable>
  );
};

export default CountryPicker;
