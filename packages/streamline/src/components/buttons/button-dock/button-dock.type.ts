import { ButtonProps } from '../button/button.types';

export interface ButtonDockProps {
  primary: ButtonProps;
  secondary?: ButtonProps & {
    appearance: 'neutral' | 'secondary';
  };
  isFloating?: boolean;
}
