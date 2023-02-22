import { theme } from '../../../../theme';
import { ButtonProps } from '../button.types';
import {
  getInnerAppearance,
  getPressableBackgroundColor,
  getTextColor,
} from '../button.utils';

describe('Button.utils', () => {
  describe('getInnerVariant', () => {
    it('should return disabled when isDisabled is true', () => {
      // GIVEN
      const isDisabled = true;
      const appearance = 'primary';
      // WHEN

      const result = getInnerAppearance({ isDisabled, appearance });
      // THEN

      expect(result).toBe('disabled');
    });

    it('should return variant when isDisabled is false', () => {
      // GIVEN
      const isDisabled = false;
      const appearance = 'primary';
      // WHEN
      const result = getInnerAppearance({ isDisabled, appearance });
      // THEN
      expect(result).toBe('primary');
    });
  });

  describe('getPressableBackgroundColor', () => {
    it('should return backgroundColor when pressed is true', () => {
      // GIVEN
      const appearance = 'primary';
      const pressed = true;
      const isTouched = false;
      // WHEN
      const result = getPressableBackgroundColor(
        theme.colors,
        appearance
      )({
        pressed,
        isTouched,
      });
      // THEN
      expect(result).toEqual({ backgroundColor: '#5875EC' });
    });
    it('should return backgroundColor when pressed is false', () => {
      // GIVEN
      const appearance = 'primary';
      const pressed = false;
      const isTouched = false;

      // WHEN
      const result = getPressableBackgroundColor(
        theme.colors,
        appearance
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
      const appearance: ButtonProps['appearance'] = 'primary';
      // WHEN
      const result = getTextColor(appearance);
      // THEN
      expect(result).toEqual('PURE_WHITE_1000');
    });
    it('should return color when variant is secondary', () => {
      // GIVEN
      const appearance: ButtonProps['appearance'] = 'secondary';
      // WHEN
      const result = getTextColor(appearance);
      // THEN
      expect(result).toEqual('BLUKO_600');
    });
    it('should return color when variant is danger', () => {
      // GIVEN
      const appearance: ButtonProps['appearance'] = 'danger';
      // WHEN
      const result = getTextColor(appearance);
      // THEN
      expect(result).toEqual('PURE_WHITE_1000');
    });
    it('should return color when variant is skeleton', () => {
      // GIVEN
      const appearance: ButtonProps['appearance'] = 'placeholder';
      // WHEN
      const result = getTextColor(appearance);
      // THEN
      expect(result).toEqual('PURE_WHITE_1000');
    });
    it('should return color when variant is disabled', () => {
      // GIVEN
      const appearance: ButtonProps['appearance'] = 'disabled';
      // WHEN
      const result = getTextColor(appearance);
      // THEN
      expect(result).toEqual('GREY_400');
    });
  });
});
