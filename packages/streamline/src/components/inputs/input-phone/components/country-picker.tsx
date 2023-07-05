import React, { useCallback, useEffect, useState } from 'react';

import { Box } from '../../../../primitives/box/box';
import { Text } from '../../../../primitives/text/text';
import InputTextIcon from '../../input-text/components/input-text-icon';
import { useStreamlineTheme } from 'packages/streamline/src/theme';

import { countries } from '../input-phone.constants';

export interface CountryPickerProps {
  countryCode: keyof typeof countries;
}

const CountryPicker = ({ countryCode = 'FR' }: CountryPickerProps) => {
  const theme = useStreamlineTheme();

  function getFlagEmoji(countryCode: keyof typeof countries) {
    const codePoints = countryCode
      .toUpperCase()
      .split('')
      .map((char) => 127397 + char.charCodeAt(0));
    return String.fromCodePoint(...codePoints);
  }

  // const getCountryName = useCallback((countryCode: keyof typeof countries) => {
  //   const regionNames = new Intl.DisplayNames(['en'], { type: 'region' });

  //   return regionNames.of(countryCode);
  // }, []);

  return (
    <Box
      flexDirection="row"
      alignItems="center"
      style={{
        paddingVertical: theme.spacing.xs + 4,
        paddingHorizontal: theme.spacing.sm + 4,
      }}
      backgroundColor="PURE_WHITE_1000"
      borderRadius="lg"
      borderColor="GREY_100"
      borderWidth={2}
    >
      <Text variant="body">{getFlagEmoji(countryCode)}</Text>

      <Text variant="body">
        {`+${countries[countryCode].callingCode.join('|')}`}
      </Text>
      <InputTextIcon
        name="ChevronDown"
        forceTextInputFocus={false}
        pointerEvents="none"
      />
    </Box>
  );
};

export default CountryPicker;
