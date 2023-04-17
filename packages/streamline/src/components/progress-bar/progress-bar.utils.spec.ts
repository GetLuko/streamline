import {
  getProgressBarColor,
  getProgressBarBackgroundColor,
} from './progress-bar.utils';

describe('getProgressBarColor', () => {
  it('should return the correct color for primary appearance', () => {
    expect(getProgressBarColor('primary')).toEqual('BLUKO_500');
  });

  it('should return the correct color for light appearance', () => {
    expect(getProgressBarColor('light')).toEqual('PURE_WHITE_1000');
  });

  it('should return the correct color for dark appearance', () => {
    expect(getProgressBarColor('dark')).toEqual('GREY_1000');
  });

  it('should return the default color for default appearance', () => {
    expect(getProgressBarColor('danger')).toEqual('BLUKO_500');
  });
});

describe('getProgressBarBackgroundColor', () => {
  it('should return the correct background color and opacity for primary appearance', () => {
    expect(getProgressBarBackgroundColor('primary')).toEqual({
      backgroundColor: 'GREY_100',
      backgroundOpacity: 1,
    });
  });

  it('should return the correct background color and opacity for light appearance', () => {
    expect(getProgressBarBackgroundColor('light')).toEqual({
      backgroundColor: 'PURE_WHITE_1000',
      backgroundOpacity: 0.1,
    });
  });

  it('should return the correct background color and opacity for dark appearance', () => {
    expect(getProgressBarBackgroundColor('dark')).toEqual({
      backgroundColor: 'GREY_1000',
      backgroundOpacity: 0.1,
    });
  });

  it('should return the default background color and opacity for default appearance', () => {
    expect(getProgressBarBackgroundColor('danger')).toEqual({
      backgroundColor: 'GREY_100',
      backgroundOpacity: 1,
    });
  });
});
