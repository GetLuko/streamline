export interface InputSliderRangeProps {
  connector: string;
  endValue: number;
  isDisabled?: boolean;
  maximum: number;
  measurement: string;
  minimum: number;
  onChangeEnd: (value: number) => unknown;
  onChangeStart: (value: number) => unknown;
  step: number;
  startValue: number;
  testID?: string;
}
