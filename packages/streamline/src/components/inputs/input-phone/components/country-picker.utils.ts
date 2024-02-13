import { CountryCode } from 'libphonenumber-js';

export const getFlagEmoji = (countryCode: CountryCode): string => {
  return [...countryCode.toUpperCase()]
    .map((char) => String.fromCodePoint(127397 + char.charCodeAt(0)))
    .reduce((a, b) => `${a}${b}`);
};
