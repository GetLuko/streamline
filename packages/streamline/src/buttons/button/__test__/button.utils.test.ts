import { theme } from '../../../theme';
import { ButtonProps } from '../button.types';
import {
  getInnerVariant,
  getPressableBackgroundColor,
  getTextColor,
} from '../button.utils';

describe('Button.utils', () => {
  describe('getInnerVariant', () => {
    it('should return disabled when isDisabled is true', () => {
      // GIVEN
      const isDisabled = true;
      const variant = 'primary';
      // WHEN

      const result = getInnerVariant({ isDisabled, variant });
      // THEN

      expect(result).toBe('disabled');
    });

    it('should return variant when isDisabled is false', () => {
      // GIVEN
      const isDisabled = false;
      const variant = 'primary';
      // WHEN
      const result = getInnerVariant({ isDisabled, variant });
      // THEN
      expect(result).toBe('primary');
    });
  });

  describe('getPressableBackgroundColor', () => {
    it('should return backgroundColor when pressed is true', () => {
      // GIVEN
      const variant = 'primary';
      const pressed = true;
      const isTouched = false;
      // WHEN
      const result = getPressableBackgroundColor(
        theme.colors,
        variant
      )({
        pressed,
        isTouched,
      });
      // THEN
      expect(result).toEqual({ backgroundColor: '#5875EC' });
    });
    it('should return backgroundColor when pressed is false', () => {
      // GIVEN
      const variant = 'primary';
      const pressed = false;
      const isTouched = false;

      // WHEN
      const result = getPressableBackgroundColor(
        theme.colors,
        variant
      )({
        pressed,
        isTouched,
      });

      // THEN
      expect(result).toEqual({ backgroundColor: '#2D50E6' });
    });
  });

  describe('getTextColor', () => {
    it('should return color when variant is primary', () => {
      // GIVEN
      const variant: ButtonProps['variant'] = 'primary';
      // WHEN
      const result = getTextColor(variant);
      // THEN
      expect(result).toEqual('PURE_WHITE_1000');
    });
    it('should return color when variant is secondary', () => {
      // GIVEN
      const variant: ButtonProps['variant'] = 'secondary';
      // WHEN
      const result = getTextColor(variant);
      // THEN
      expect(result).toEqual('BLACK');
    });
    it('should return color when variant is danger', () => {
      // GIVEN
      const variant: ButtonProps['variant'] = 'danger';
      // WHEN
      const result = getTextColor(variant);
      // THEN
      expect(result).toEqual('PURE_WHITE_1000');
    });
    it('should return color when variant is skeleton', () => {
      // GIVEN
      const variant: ButtonProps['variant'] = 'skeleton';
      // WHEN
      const result = getTextColor(variant);
      // THEN
      expect(result).toEqual('PURE_WHITE_1000');
    });
    it('should return color when variant is disabled', () => {
      // GIVEN
      const variant: ButtonProps['variant'] = 'disabled';
      // WHEN
      const result = getTextColor(variant);
      // THEN
      expect(result).toEqual('GREY_300');
    });
  });
});
