import { ColorTheme } from '../../../../theme';
import { InputTextProps } from '../types';

export type TextInputPrimitiveProps = InputTextProps & {
  left?: JSX.Element;
  right?: JSX.Element;
  forceFocus: () => void;
  parentState: { focused: boolean };
  innerRef: (ref: any) => void;
  maxWidth?: number;
};

export type OutlineProps = {
  activeColor?: ColorTheme;
  backgroundColor?: ColorTheme;
  focusColor?: ColorTheme;
  hasActiveOutline?: boolean;
  outlineColor?: ColorTheme;
};

export interface InputTextLabelProps {
  label?: string;
  error?: boolean;
  active?: boolean;
  disabled?: boolean;
}
