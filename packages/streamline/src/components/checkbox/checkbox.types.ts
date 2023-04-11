import { ColorTheme } from '../../theme';
import { Appearance } from '../../theme/appearance';

export interface CheckboxProps {
  appearance?: Appearance;
  value: boolean;
  onChange?: (value: boolean) => void;
  disabled?: boolean;
  testID?: string;
}

export interface CheckboxColors {
  backgroundColor: ColorTheme;
  iconColor: ColorTheme;
  shadowColor: ColorTheme;
  borderColor: ColorTheme;
  activeColor: ColorTheme;
}
