import { stringCapitalize } from '../string.utils';

describe('stringCapitalize', () => {
  it('should return empty string when undefined', () => {
    // Givin
    const value = undefined;
    // When
    const result = stringCapitalize(value);
    // Then
    expect(result).toEqual('');
  });

  it('should capitalze string', () => {
    // Given
    const value = 'broken-glass';
    // When
    const result = stringCapitalize(value);
    // Then
    expect(result).toEqual('Broken-glass');
  });
});
