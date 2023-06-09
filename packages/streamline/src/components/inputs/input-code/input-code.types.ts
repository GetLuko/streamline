export interface InputCodeProps {
  code: string;
  onChange: (code: string) => void;
  length?: number;
  isError?: boolean;
  isDisabled?: boolean;
  autoFocus?: boolean;
  testID?: string;
}

export type InputCodeCellProps = {
  code: string;
  index: number;
  length: number;
  isInputFocused: boolean;
  isError?: boolean;
  isDisabled?: boolean;
};
