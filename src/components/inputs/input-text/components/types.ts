import { InputTextProps } from '../types';

export type TextInputPrimitiveProps = InputTextProps & {
  left?: JSX.Element;
  right?: JSX.Element;
  forceFocus: () => void;
  parentState: { focused: boolean };
  innerRef: (ref: any) => void;
  maxWidth?: number;
};

export interface InputTextLabelProps {
  label?: string;
  error?: boolean;
  active?: boolean;
  disabled?: boolean;
}
