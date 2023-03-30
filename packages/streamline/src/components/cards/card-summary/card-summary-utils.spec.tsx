import {
  getCardSummaryColors,
  hasValidButton,
  hasValidContent,
} from './card-summary.utils';

describe('card summary utils', () => {
  describe('getCardSummaryColors', () => {
    it('should return the correct colors for bluko appearance', () => {
      //GIVEN
      const appearance = 'bluko';
      //WHEN
      const result = getCardSummaryColors({ appearance });
      //THEN
      expect(result).toEqual({
        containerColors: {
          backgroundColor: 'BLUKO_700',
        },
        headerColors: {
          rightIconColor: 'BLUKO_400',
          headerColor: 'PURE_WHITE_1000',
          leftIconColor: 'PURE_WHITE_1000',
          valueColor: 'BLUKO_300',
        },
        contentColors: {
          titleColor: 'PURE_WHITE_1000',
          descriptionColor: 'BLUKO_200',
        },
      });
    });
    it('should return the correct colors for neutral appearance', () => {
      //GIVEN
      const appearance = 'neutral';
      //WHEN
      const result = getCardSummaryColors({ appearance });
      //THEN
      expect(result).toEqual({
        containerColors: {
          backgroundColor: 'GREY_100',
        },
        headerColors: {
          rightIconColor: 'GREY_400',
          headerColor: 'GREY_1000',
          leftIconColor: 'BLUKO_500',
          valueColor: 'GREY_500',
        },
        contentColors: {
          titleColor: 'GREY_1000',
          descriptionColor: 'GREY_700',
        },
      });
    });
    it('should return the correct colors for default appearance', () => {
      //GIVEN
      const appearance = undefined;
      //WHEN
      const result = getCardSummaryColors({ appearance });
      //THEN
      expect(result).toEqual({
        containerColors: {
          backgroundColor: 'GREY_100',
        },
        headerColors: {
          rightIconColor: 'GREY_400',
          headerColor: 'GREY_1000',
          leftIconColor: 'BLUKO_500',
          valueColor: 'GREY_500',
        },
        contentColors: {
          titleColor: 'GREY_1000',
          descriptionColor: 'GREY_700',
        },
      });
    });
  });
  describe('hasValidContent', () => {
    it('should return true when title and description are provided', () => {
      //GIVEN
      const title = 'title';
      const description = 'description';
      //WHEN
      const result = hasValidContent({ title, description });
      //THEN
      expect(result).toBe(true);
    });

    it('should return false when title is not provided', () => {
      //GIVEN
      const title = undefined;
      const description = 'description';
      //WHEN
      const result = hasValidContent({ title, description });
      //THEN
      expect(result).toBe(true);
    });

    it('should return false when description is not provided', () => {
      //GIVEN
      const title = 'title';
      const description = undefined;
      //WHEN
      const result = hasValidContent({ title, description });
      //THEN
      expect(result).toBe(true);
    });

    it('should return false when title and description are not provided', () => {
      //GIVEN
      const title = undefined;
      const description = undefined;
      //WHEN
      const result = hasValidContent({ title, description });
      //THEN
      expect(result).toBe(false);
    });
  });

  describe('hasValidButton', () => {
    it('should return true when buttonLabel is provided', () => {
      //GIVEN
      const buttonLabel = 'buttonLabel';
      //WHEN
      const result = hasValidButton(buttonLabel);
      //THEN
      expect(result).toBe(true);
    });

    it('should return false when buttonLabel is not provided', () => {
      //GIVEN
      const buttonLabel = undefined;
      //WHEN
      const result = hasValidButton(buttonLabel);
      //THEN
      expect(result).toBe(false);
    });
  });
});
