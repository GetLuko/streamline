import { Countries } from 'libphonenumber-js/types';

export const getFlagEmoji = (countryCode: keyof Countries): string => {
  return [...countryCode.toUpperCase()]
    .map((char) => String.fromCodePoint(127397 + char.charCodeAt(0)))
    .reduce((a, b) => `${a}${b}`);
};
