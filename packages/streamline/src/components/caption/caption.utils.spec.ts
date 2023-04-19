import { CaptionProps } from './caption.types';
import { getCaptionStyle } from './caption.utils';

describe('Caption utils', () => {
  it('should return the correct neutral style', () => {
    // GIVEN
    const appearance: CaptionProps['appearance'] = 'neutral';
    // WHEN
    const style = getCaptionStyle(appearance);
    // THEN
    expect(style).toEqual({
      color: 'GREY_500',
    });
  });
  it('should return the correct warning style', () => {
    // GIVEN
    const appearance: CaptionProps['appearance'] = 'warning';
    // WHEN
    const style = getCaptionStyle(appearance);
    // THEN
    expect(style).toEqual({
      color: 'ORANGE_500',
    });
  });
  it('should return the correct danger style', () => {
    // GIVEN
    const appearance: CaptionProps['appearance'] = 'danger';
    // WHEN
    const style = getCaptionStyle(appearance);
    // THEN
    expect(style).toEqual({
      color: 'TERRA_500',
    });
  });
});
