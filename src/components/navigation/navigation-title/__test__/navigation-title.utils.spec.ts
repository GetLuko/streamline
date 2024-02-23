import { getNavigationTitleColors } from '../navigation-title.utils';

describe('getNavigationTitleColors', () => {
  it('should return dark colors when appearance is "dark"', () => {
    const result = getNavigationTitleColors('dark');
    expect(result.headerColor).toBe('GREY_700');
    expect(result.titleColor).toBe('GREY_1000');
    expect(result.valueColor).toBe('GREY_700');
    expect(result.valueOpacity).toBe(1);
    expect(result.headerOpacity).toBe(1);
  });

  it('should return light colors when appearance is "light"', () => {
    const result = getNavigationTitleColors('light');
    expect(result.headerColor).toBe('PURE_WHITE_1000');
    expect(result.titleColor).toBe('PURE_WHITE_1000');
    expect(result.valueColor).toBe('PURE_WHITE_1000');
    expect(result.valueOpacity).toBe(0.8);
    expect(result.headerOpacity).toBe(0.6);
  });
});
