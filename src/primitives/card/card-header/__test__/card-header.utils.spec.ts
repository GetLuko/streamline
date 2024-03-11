import {
  hasValidHeader,
  hasValidIconName,
  hasValidRightAction,
  hasValidValue,
} from '../card-header.utils';

describe('card header utils', () => {
  describe('hasValidIconName', () => {
    it('should return true if iconName is valid', () => {
      // GIVEN
      const iconName = 'ChevronRight';

      // WHEN
      const result = hasValidIconName(iconName);

      // THEN
      expect(result).toBe(true);
    });
    it('should return false for a undefined iconName', () => {
      // GIVEN
      const iconName = undefined;

      // WHEN
      const result = hasValidIconName(iconName);

      // THEN
      expect(result).toBe(false);
    });
  });
  describe('hasValidHeader', () => {
    it('should return true if header is valid', () => {
      // GIVEN
      const header = 'header';

      // WHEN
      const result = hasValidHeader(header);

      // THEN
      expect(result).toBe(true);
    });
    it('should return false for a undefined header', () => {
      // GIVEN
      const header = undefined;

      // WHEN
      const result = hasValidHeader(header);

      // THEN
      expect(result).toBe(false);
    });
  });
  describe('hasValidValue', () => {
    it('should return true if value is valid', () => {
      // GIVEN
      const value = 'value';

      // WHEN
      const result = hasValidValue(value);

      // THEN
      expect(result).toBe(true);
    });
    it('should return false for a undefined value', () => {
      // GIVEN
      const value = undefined;

      // WHEN
      const result = hasValidValue(value);

      // THEN
      expect(result).toBe(false);
    });
  });
  describe('hasValidRightAction', () => {
    it('should return true if rightAction is valid', () => {
      // GIVEN
      const rightAction = 'navigate';

      // WHEN
      const result = hasValidRightAction(rightAction);

      // THEN
      expect(result).toBe(true);
    });
    it('should return false for a undefined rightAction', () => {
      // GIVEN
      const rightAction = undefined;

      // WHEN
      const result = hasValidRightAction(rightAction);

      // THEN
      expect(result).toBe(false);
    });
  });
});
