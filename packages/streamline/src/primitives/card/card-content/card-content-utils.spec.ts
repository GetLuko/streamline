import { hasValidDescription, hasValidTitle } from './card-content-utils';

describe('card content utils', () => {
  describe('hasValidTitle', () => {
    it('should return true if title is valid', () => {
      // GIVEN
      const title = 'title';

      // WHEN
      const result = hasValidTitle(title);

      // THEN
      expect(result).toBe(true);
    });
    it('should return false for a undefined title', () => {
      // GIVEN
      const title = undefined;

      // WHEN
      const result = hasValidTitle(title);

      // THEN
      expect(result).toBe(false);
    });
  });
  describe('hasValidDescription', () => {
    it('should return true if description is valid', () => {
      // GIVEN
      const description = 'description';

      // WHEN
      const result = hasValidDescription(description);

      // THEN
      expect(result).toBe(true);
    });
    it('should return false for a undefined description', () => {
      // GIVEN
      const description = undefined;

      // WHEN
      const result = hasValidDescription(description);

      // THEN
      expect(result).toBe(false);
    });
  });
});
