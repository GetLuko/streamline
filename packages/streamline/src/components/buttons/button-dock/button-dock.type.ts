import { ButtonProps } from '../button/button.types';

export interface ButtonDockProps {
  primaryButton: ButtonProps & {
    appearance: 'primary' | 'danger' | 'warning';
  };
  secondaryButton?: ButtonProps & {
    appearance: 'neutral' | 'secondary';
  };
  isFloating?: boolean;
}
