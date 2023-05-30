import { IconsName } from '../../primitives/icon/icon.types';
import { ButtonProps } from '../buttons/button/button.types';

interface DialogPrimaryButtonProps extends ButtonProps {
  appearance?: 'primary' | 'danger' | 'warning';
}

interface DialogSecondaryButtonProps extends ButtonProps {
  appearance?: 'neutral' | 'secondary';
}

export interface DialogProps {
  title: string;
  icon?: IconsName;
  buttons: {
    orientation?: 'horizontal' | 'vertical';
    primary: DialogPrimaryButtonProps;
    secondary?: DialogSecondaryButtonProps;
  };
}
