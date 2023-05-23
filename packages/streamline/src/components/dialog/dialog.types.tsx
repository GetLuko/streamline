import { IconsName } from '../../primitives/icon/icon.types';
import { ButtonProps } from '../buttons/button/button.types';

export interface DialogProps {
  title: string;
  icon?: IconsName;
  buttons: {
    orientation: 'horizontal' | 'vertical';
    primary: ButtonProps & {
      appearance: 'primary' | 'danger' | 'warning';
    };
    secondary?: ButtonProps & {
      appearance: 'neutral' | 'secondary';
    };
  };
}
