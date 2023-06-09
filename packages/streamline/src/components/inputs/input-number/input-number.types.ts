export interface InputNumberProps {
  code: string;
  onChange: (code: string) => void;
  length?: number;
  isError?: boolean;
  isDisabled?: boolean;
  autoFocus?: boolean;
}

export type InputNumberCellProps = {
  code: string;
  index: number;
  length: number;
  isInputFocused: boolean;
  isError?: boolean;
  isDisabled?: boolean;
};
