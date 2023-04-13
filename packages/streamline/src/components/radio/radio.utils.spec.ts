import { getRadioColors } from './radio.utils';

describe('Radio utils', () => {
  describe('getRadioColors', () => {
    it('for primary', () => {
      // Given
      const appearance = 'primary';
      // When
      const colors = getRadioColors({ appearance, disabled: false });
      // Expect
      expect(colors).toEqual({
        backgroundColor: 'PURE_WHITE_1000',
        dotColor: 'PURE_WHITE_1000',
        shadowColor: 'BLUKO_100',
        borderColor: 'GREY_300',
        activeColor: 'BLUKO_500',
      });
    });
    it('for danger', () => {
      // Given
      const appearance = 'danger';
      // When
      const colors = getRadioColors({ appearance, disabled: false });
      // Expect
      expect(colors).toEqual({
        backgroundColor: 'PURE_WHITE_1000',
        dotColor: 'PURE_WHITE_1000',
        shadowColor: 'TERRA_100',
        borderColor: 'TERRA_500',
        activeColor: 'TERRA_500',
      });
    });
    it('for primary disabled', () => {
      // Given
      const appearance = 'primary';
      // When
      const colors = getRadioColors({ appearance, disabled: true });
      // Expect
      expect(colors).toEqual({
        backgroundColor: 'GREY_50',
        dotColor: 'GREY_50',
        shadowColor: 'BLUKO_100',
        borderColor: 'GREY_200',
        activeColor: 'BLUKO_200',
      });
    });
    it('for danger disabled', () => {
      // Given
      const appearance = 'danger';
      // When
      const colors = getRadioColors({ appearance, disabled: true });
      // Expect
      expect(colors).toEqual({
        backgroundColor: 'GREY_50',
        dotColor: 'GREY_50',
        shadowColor: 'TERRA_100',
        borderColor: 'TERRA_200',
        activeColor: 'TERRA_300',
      });
    });
    it('default', () => {
      // Given
      const appearance = 'neutral';
      // When
      const colors = getRadioColors({ appearance, disabled: false });
      // Expect
      expect(colors).toEqual({
        backgroundColor: 'PURE_WHITE_1000',
        dotColor: 'PURE_WHITE_1000',
        shadowColor: 'BLUKO_100',
        borderColor: 'GREY_300',
        activeColor: 'BLUKO_500',
      });
    });
  });
});
