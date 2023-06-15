import { DateFormat, formatDate, initializeDateLocale } from './date';

describe('formatDate', () => {
  const changeLocale = (lang: string) => initializeDateLocale(lang);

  it('should convert date to time format', () => {
    const date = new Date('2020-08-30T21:12:22.000');
    changeLocale('fr');
    let result = formatDate(date, DateFormat.TIME);
    expect(result).toEqual('21:12');
    changeLocale('en');
    result = formatDate(date, DateFormat.TIME);
    expect(result).toEqual('9:12 PM');
  });

  it('should convert date to short date format', () => {
    const date = new Date('2020-08-30');
    changeLocale('fr');
    let result = formatDate(date, DateFormat.SHORT);
    expect(result).toEqual('30/08/2020');
    changeLocale('en');
    result = formatDate(date, DateFormat.SHORT);
    expect(result).toEqual('08/30/2020');
  });

  it('should convert date to long date format', () => {
    const date = new Date('2020-08-30T21:12:22.000');
    changeLocale('fr');
    let result = formatDate(date, DateFormat.LONG_TIME);
    expect(result).toEqual('30 août 2020 21:12');
    changeLocale('en');
    result = formatDate(date, DateFormat.LONG_TIME);
    expect(result).toEqual('August 30, 2020 9:12 PM');
  });
});
