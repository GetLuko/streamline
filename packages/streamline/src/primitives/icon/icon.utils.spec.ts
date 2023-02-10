import {
  isCorrectRegularIconName,
  isCorrectSmallIconName,
  isIconName,
  sanitizeIconName,
} from './icon.utils';

describe('sanitizeIconName', () => {
  it('should transform Broken-Glass into BrokenGlass', () => {
    const icon = 'Broken-Glass';
    const expected = 'BrokenGlass';
    const result = sanitizeIconName(icon);
    expect(result).toEqual(expected);
  });

  it('should transform Broken Glass into BrokenGlass', () => {
    const icon = 'Broken Glass';
    const expected = 'BrokenGlass';
    const result = sanitizeIconName(icon);
    expect(result).toEqual(expected);
  });

  it('should transform eScooter into EScooter', () => {
    const icon = 'eScooter';
    const expected = 'EScooter';
    const result = sanitizeIconName(icon);
    expect(result).toEqual(expected);
  });

  it('should return EScooter unchanged', () => {
    const icon = 'EScooter';
    const result = sanitizeIconName(icon);
    expect(result).toEqual(icon);
  });

  it('should return empty string', () => {
    const empty = '';
    const result = sanitizeIconName(empty);
    expect(result).toEqual(empty);
  });
  it('should return undefined', () => {
    const wrongType = undefined;
    const result = sanitizeIconName(wrongType);
    expect(result).toBeUndefined();
  });
});

describe('isCorrectSmallIconName', () => {
  it('should check icon name correctly', () => {
    expect(isCorrectSmallIconName('EScooter')).toBe(true);
    expect(isCorrectSmallIconName('OrderDown')).toBe(true);
    expect(isCorrectSmallIconName('StarWars')).toBe(false);
  });
});

describe('isCorrectRegularIconName', () => {
  it('should check icon name correctly', () => {
    expect(isCorrectRegularIconName('EScooter')).toBe(true);
    // this icon doesn't exist in regular format
    expect(isCorrectRegularIconName('OrderDown')).toBe(false);
    expect(isCorrectRegularIconName('StarWars')).toBe(false);
  });

  describe('isIconName', () => {
    it('should check EScooter icon name and return true', () => {
      // Given
      const icon = 'EScooter';
      // When
      const result = isIconName(icon);
      // Then
      expect(result).toBe(true);
    });
    it('should check OrderDown icon name and return true', () => {
      // Given
      const icon = 'BrokenGlass';
      // When
      const result = isIconName(icon);
      // Then
      expect(result).toBe(true);
    });
    it('should check StarWars icon name and return false', () => {
      // Given
      const icon = 'StarWars';
      // When
      const result = isIconName(icon);
      // Then
      expect(result).toBe(false);
    });
  });
});
