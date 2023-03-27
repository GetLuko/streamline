import { getTagColors } from '../tag.utils';

describe('tag utils', () => {
  describe('getTagColors', () => {
    it('for primary', () => {
      // Given
      const appearance = 'primary';
      // When
      const colors = getTagColors({ appearance });
      // Expect
      expect(colors).toEqual({
        backgroundColor: 'GREY_100',
        iconColor: 'GREY_700',
        textColor: 'GREY_1000',
      });
    });
    it('for secondary', () => {
      // Given
      const appearance = 'secondary';
      // When
      const colors = getTagColors({ appearance });
      // Expect
      expect(colors).toEqual({
        backgroundColor: 'BLUKO_100',
        iconColor: 'BLUKO_500',
        textColor: 'BLUKO_700',
      });
    });
    it('for success', () => {
      // Given
      const appearance = 'success';
      // When
      const colors = getTagColors({ appearance });
      // Expect
      expect(colors).toEqual({
        backgroundColor: 'MINT_100',
        iconColor: 'MINT_500',
        textColor: 'MINT_700',
      });
    });
    it('for warning', () => {
      // Given
      const appearance = 'warning';
      // When
      const colors = getTagColors({ appearance });
      // Expect
      expect(colors).toEqual({
        backgroundColor: 'ORANGE_100',
        iconColor: 'ORANGE_500',
        textColor: 'ORANGE_700',
      });
    });
    it('for danger', () => {
      // Given
      const appearance = 'danger';
      // When
      const colors = getTagColors({ appearance });
      // Expect
      expect(colors).toEqual({
        backgroundColor: 'TERRA_100',
        iconColor: 'TERRA_500',
        textColor: 'TERRA_700',
      });
    });
    it('default', () => {
      // Given
      const appearance = 'neutral';
      // When
      const colors = getTagColors({ appearance });
      // Expect
      expect(colors).toEqual({
        backgroundColor: 'GREY_100',
        iconColor: 'GREY_700',
        textColor: 'GREY_1000',
      });
    });
  });
});
