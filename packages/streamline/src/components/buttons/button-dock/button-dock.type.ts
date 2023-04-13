import { ButtonProps } from '../button/button.types';

export interface ButtonDockProps {
  primary: ButtonProps & {
    appearance: 'primary' | 'danger' | 'warning';
  };
  secondary?: ButtonProps & {
    appearance: 'neutral' | 'secondary';
  };
  isFloating?: boolean;
}
