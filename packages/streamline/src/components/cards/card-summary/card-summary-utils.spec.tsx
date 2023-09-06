import { CardSummaryProps } from './card-summary.types';
import { hasValidButtonAction } from './card-summary.utils';
import { getCardSummaryColors, hasValidContent } from './card-summary.utils';

describe('card summary utils', () => {
  describe('getCardSummaryColors', () => {
    it('should return the correct colors for primary appearance', () => {
      //GIVEN
      const appearance = 'primary';
      //WHEN
      const result = getCardSummaryColors({ appearance });
      //THEN
      expect(result).toStrictEqual({
        containerColors: {
          backgroundColor: 'BLUKO_700',
          pressBackgroundColor: 'BLUKO_800',
        },
        contentColors: {
          descriptionColor: 'BLUKO_200',
          titleColor: 'PURE_WHITE_1000',
        },
        headerColors: {
          headerColor: 'PURE_WHITE_1000',
          leftIconColor: 'PURE_WHITE_1000',
          rightIconColor: 'BLUKO_400',
          valueColor: 'BLUKO_200',
        },
      });
    });

    it('should return the correct colors for neutral appearance', () => {
      //GIVEN
      const appearance = 'neutral';
      //WHEN
      const result = getCardSummaryColors({ appearance });
      //THEN
      expect(result).toStrictEqual({
        containerColors: {
          backgroundColor: 'PURE_WHITE_1000',
          pressBackgroundColor: 'GREY_25',
        },
        contentColors: {
          descriptionColor: 'GREY_700',
          titleColor: 'GREY_1000',
        },
        headerColors: {
          headerColor: 'GREY_1000',
          leftIconColor: 'BLUKO_500',
          rightIconColor: 'GREY_400',
          valueColor: 'GREY_500',
        },
      });
    });
    it('should return the correct colors for warning appearance', () => {
      //GIVEN
      const appearance = 'warning';
      //WHEN
      const result = getCardSummaryColors({ appearance });
      //THEN
      expect(result).toStrictEqual({
        containerColors: {
          backgroundColor: 'ORANGE_700',
          pressBackgroundColor: 'ORANGE_800',
        },
        contentColors: {
          descriptionColor: 'ORANGE_200',
          titleColor: 'PURE_WHITE_1000',
        },
        headerColors: {
          headerColor: 'PURE_WHITE_1000',
          leftIconColor: 'PURE_WHITE_1000',
          rightIconColor: 'ORANGE_400',
          valueColor: 'ORANGE_200',
        },
      });
    });

    it('should return the correct colors danger appearance', () => {
      //GIVEN
      const appearance = 'danger';
      //WHEN
      const result = getCardSummaryColors({ appearance });
      //THEN
      expect(result).toStrictEqual({
        containerColors: {
          backgroundColor: 'TERRA_700',
          pressBackgroundColor: 'TERRA_800',
        },
        contentColors: {
          descriptionColor: 'TERRA_200',
          titleColor: 'PURE_WHITE_1000',
        },
        headerColors: {
          headerColor: 'PURE_WHITE_1000',
          leftIconColor: 'PURE_WHITE_1000',
          rightIconColor: 'TERRA_400',
          valueColor: 'TERRA_200',
        },
      });
    });

    it('should return the correct colors for default appearance', () => {
      //GIVEN
      const appearance = undefined;
      //WHEN
      const result = getCardSummaryColors({ appearance });
      //THEN
      expect(result).toStrictEqual({
        containerColors: {
          backgroundColor: 'BLUKO_700',
          pressBackgroundColor: 'BLUKO_800',
        },
        contentColors: {
          descriptionColor: 'BLUKO_200',
          titleColor: 'PURE_WHITE_1000',
        },
        headerColors: {
          headerColor: 'PURE_WHITE_1000',
          leftIconColor: 'PURE_WHITE_1000',
          rightIconColor: 'BLUKO_400',
          valueColor: 'BLUKO_200',
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

  describe('hasValidButtonAction', () => {
    it('should return true when button onPress props is provided', () => {
      //GIVEN
      const buttonLabel: CardSummaryProps['footer'] = {
        type: 'button',
        text: 'buttonLabel',
        onPress: () => {
          //
        },
      };
      //WHEN
      const result = hasValidButtonAction(buttonLabel);
      //THEN
      expect(result).toBe(true);
    });

    it('should return true when button onPressIn props is provided', () => {
      //GIVEN
      const buttonLabel: CardSummaryProps['footer'] = {
        type: 'button',
        text: 'buttonLabel',
        onPressIn: () => {
          //
        },
      };
      //WHEN
      const result = hasValidButtonAction(buttonLabel);
      //THEN
      expect(result).toBe(true);
    });

    it('should return true when button onPressOut props is provided', () => {
      //GIVEN
      const buttonLabel: CardSummaryProps['footer'] = {
        type: 'button',
        text: 'buttonLabel',
        onPressOut: () => {
          //
        },
      };
      //WHEN
      const result = hasValidButtonAction(buttonLabel);
      //THEN
      expect(result).toBe(true);
    });

    it('should return false when press props is not provided', () => {
      //GIVEN
      const buttonLabel = undefined;
      //WHEN
      const result = hasValidButtonAction(buttonLabel);
      //THEN
      expect(result).toBe(false);
    });
  });
});
