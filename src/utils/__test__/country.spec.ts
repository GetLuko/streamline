import { getFlagEmoji } from '../country';

describe('getFlagEmoji', () => {
  it('returns the correct flag emoji for a given country code', () => {
    expect(getFlagEmoji('US')).toBe('🇺🇸');
    expect(getFlagEmoji('GB')).toBe('🇬🇧');
    expect(getFlagEmoji('FR')).toBe('🇫🇷');
  });
});
