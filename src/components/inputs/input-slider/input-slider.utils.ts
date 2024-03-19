export const positionToValue = ({
  maximum,
  maximumPosition,
  minimum,
  minimumPosition,
  position,
  step,
}: {
  maximum: number;
  maximumPosition: number;
  minimum: number;
  minimumPosition: number;
  position: number;
  step: number;
}) => {
  if (maximumPosition === minimumPosition) {
    return maximum;
  }
  if (position <= minimumPosition) {
    return minimum;
  }
  if (position >= maximumPosition) {
    return maximum;
  }
  const offset =
    (maximum - minimum) *
    ((position - minimumPosition) / (maximumPosition - minimumPosition));

  const value = Math.round((minimum + offset) / step) * step;
  return value;
};

export const valueToPosition = ({
  maximum,
  maximumPosition,
  minimum,
  minimumPosition,
  value,
}: {
  maximum: number;
  maximumPosition: number;
  minimum: number;
  minimumPosition: number;
  value: number;
}) => {
  if (maximum === minimum) {
    return maximumPosition;
  }
  const offset =
    (maximumPosition - minimumPosition) *
    ((value - minimum) / (maximum - minimum));
  return minimumPosition + offset;
};
