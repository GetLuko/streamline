import { positionToValue, valueToPosition } from '../input-slider.utils';

describe('input slider utils', () => {
  describe('positionToValue', () => {
    it('when maximum and mininimum positions are equal', () => {
      // Given
      const maximum = 2500;
      const minimum = 500;
      const maximumPosition = 100;
      const minimumPosition = 100;
      const position = 200;
      const step = 250;

      // When
      const result = positionToValue({
        maximum,
        maximumPosition,
        minimum,
        minimumPosition,
        position,
        step,
      });

      // Then
      expect(result).toEqual(maximum);
    });

    it('when position is below minimum position', () => {
      // Given
      const maximum = 2500;
      const minimum = 1000;
      const maximumPosition = 345;
      const minimumPosition = 100;
      const position = 50;
      const step = 250;

      // When
      const result = positionToValue({
        maximum,
        maximumPosition,
        minimum,
        minimumPosition,
        position,
        step,
      });

      // Then
      expect(result).toEqual(minimum);
    });

    it('when position is above maximum position', () => {
      // Given
      const maximum = 2500;
      const minimum = 1000;
      const maximumPosition = 345;
      const minimumPosition = 100;
      const position = 350;
      const step = 250;

      // When
      const result = positionToValue({
        maximum,
        maximumPosition,
        minimum,
        minimumPosition,
        position,
        step,
      });

      // Then
      expect(result).toEqual(maximum);
    });

    it('when position is between minimum and maximum position', () => {
      // Given
      const maximum = 2500;
      const minimum = 750;
      const maximumPosition = 345;
      const minimumPosition = 43.125;
      const position = 150;
      const step = 250;

      // When
      const result = positionToValue({
        maximum,
        maximumPosition,
        minimum,
        minimumPosition,
        position,
        step,
      });

      // Then
      expect(result).toEqual(1250);
    });
  });

  describe('valueToPosition', () => {
    it('when minimum and maximum are equal', () => {
      // Given
      const maximum = 500;
      const minimum = 500;
      const minimumPosition = 0;
      const maximumPosition = 345;
      const value = 1000;

      // When
      const result = valueToPosition({
        maximum,
        maximumPosition,
        minimum,
        minimumPosition,
        value,
      });

      // Then
      expect(result).toEqual(maximumPosition);
    });

    it('when minimum and maximum are not equal', () => {
      // Given
      const maximum = 2500;
      const minimum = 750;
      const minimumPosition = 43.125;
      const maximumPosition = 345;
      const value = 1500;

      // When
      const result = valueToPosition({
        maximum,
        maximumPosition,
        minimum,
        minimumPosition,
        value,
      });

      // Then
      expect(result).toEqual(172.5);
    });
  });
});
