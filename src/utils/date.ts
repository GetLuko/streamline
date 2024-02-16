import dayjs from 'dayjs';
import 'dayjs/locale/es';
import 'dayjs/locale/fr';
import 'dayjs/locale/de';
import dayjsAdvancedFormat from 'dayjs/plugin/advancedFormat';
import dayjsDuration from 'dayjs/plugin/duration';
import dayjsIsoWeek from 'dayjs/plugin/isoWeek';
import dayjsIsSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import dayjsLocalizedFormat from 'dayjs/plugin/localizedFormat';
import dayjsUtc from 'dayjs/plugin/utc';
import dayjsWeekOfYear from 'dayjs/plugin/weekOfYear';

dayjs.extend(dayjsAdvancedFormat);
dayjs.extend(dayjsDuration);
dayjs.extend(dayjsIsoWeek);
dayjs.extend(dayjsIsSameOrBefore);
dayjs.extend(dayjsUtc);
dayjs.extend(dayjsLocalizedFormat);
dayjs.extend(dayjsWeekOfYear);

// Format preference based on locale
// For more info, see "Localized format" section
// https://day.js.org/docs/en/display/format#list-of-localized-formats
export enum DateFormat {
  /** ex: 16:41 or 4:41 PM */
  TIME = 'LT',
  /** ex: 16:41:55 or 4:41:55 PM */
  TIME_SECONDS = 'LTS',
  /** ex: 25/12/2020 */
  SHORT = 'L',
  /** ex: Sep 4, 1986 */
  MEDIUM = 'll',
  /** ex: Sep 4th, 1986 */
  MEDIUM_ORDINAL_EN = 'MMM Do, YYYY',
  /** ex: Sep 4, 1986 8:30 PM */
  MEDIUM_TIME = 'lll',
  /** ex: September */
  MONTH = 'MMMM',
  /** ex: September 4, 1986 */
  LONG = 'LL',
  /** ex: September 4, 1986 8:30 PM */
  LONG_TIME = 'LLL',
  /** ex: Saturday */
  DAY = 'dddd',
  /** 25 Avril 2019 */
  DATE_FR = 'DD MMMM YYYY',
  /** Avril 25, 2019 */
  DATE_EN = 'MMMM DD, YYYY',
  /** ex: 06/21 */
  EXPIRATION_DATE = 'MM/YY',
  /** ex: June 2022 */
  FULL_WITHOUT_DAY = 'MMMM YYYY',
}

export const formatDate = (
  date: Date | string | number,
  format: DateFormat
) => {
  return dayjs(date).format(format);
};

export const initializeDateLocale = (locale: string) => {
  dayjs.locale(locale);
};
