import { getCardCalloutColors } from '../card-callout.utils';

describe('card callout utils', () => {
  describe('getCardCalloutColors', () => {
    it('for primary', () => {
      // Given
      const appearance = 'primary';
      // When
      const colors = getCardCalloutColors({ appearance });
      // Expect
      expect(colors).toEqual({
        backgroundColor: 'GREY_100',
        clickIconColor: 'GREY_300',
        descriptionColor: 'GREY_1000',
        headerColor: 'GREY_700',
        iconColor: 'GREY_700',
        pressedColor: 'GREY_150',
      });
    });
    it('for secondary', () => {
      // Given
      const appearance = 'secondary';
      // When
      const colors = getCardCalloutColors({ appearance });
      // Expect
      expect(colors).toEqual({
        backgroundColor: 'BLUKO_100',
        clickIconColor: 'BLUKO_300',
        descriptionColor: 'BLUKO_800',
        headerColor: 'BLUKO_600',
        iconColor: 'BLUKO_500',
        pressedColor: 'BLUKO_150',
      });
    });
    it('for neutral', () => {
      // Given
      const appearance = 'neutral';
      // When
      const colors = getCardCalloutColors({ appearance });
      // Expect
      expect(colors).toEqual({
        backgroundColor: 'GREY_100',
        clickIconColor: 'GREY_300',
        descriptionColor: 'GREY_1000',
        headerColor: 'GREY_700',
        iconColor: 'GREY_700',
        pressedColor: 'GREY_150',
      });
    });
    it('for warning', () => {
      // Given
      const appearance = 'warning';
      // When
      const colors = getCardCalloutColors({ appearance });
      // Expect
      expect(colors).toEqual({
        backgroundColor: 'ORANGE_100',
        clickIconColor: 'ORANGE_300',
        descriptionColor: 'ORANGE_800',
        headerColor: 'ORANGE_600',
        iconColor: 'ORANGE_500',
        pressedColor: 'ORANGE_150',
      });
    });
    it('for danger', () => {
      // Given
      const appearance = 'danger';
      // When
      const colors = getCardCalloutColors({ appearance });
      // Expect
      expect(colors).toEqual({
        backgroundColor: 'TERRA_100',
        clickIconColor: 'TERRA_300',
        descriptionColor: 'TERRA_800',
        headerColor: 'TERRA_600',
        iconColor: 'TERRA_500',
        pressedColor: 'TERRA_150',
      });
    });
    it('default', () => {
      // Given
      const appearance = 'success';
      // When
      const colors = getCardCalloutColors({ appearance });
      // Expect
      expect(colors).toEqual({
        backgroundColor: 'GREY_100',
        clickIconColor: 'GREY_300',
        descriptionColor: 'GREY_1000',
        headerColor: 'GREY_700',
        iconColor: 'GREY_700',
        pressedColor: 'GREY_150',
      });
    });
  });
});
