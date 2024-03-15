export interface InputSliderProps {
  isDisabled?: boolean;
  maximum: number;
  measurement: string;
  minimum: number;
  onChange: (value: number) => unknown;
  step: number;
  testID?: string;
  value: number;
}
