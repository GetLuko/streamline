import { ColorTheme } from '../../theme';
import { Appearance } from '../../theme/appearance';

export interface RadioProps {
  appearance?: Appearance;
  value: boolean;
  onChange?: (value: boolean) => void;
  disabled?: boolean;
  testID?: string;
}

export interface RadioColors {
  backgroundColor: ColorTheme;
  dotColor: ColorTheme;
  shadowColor: ColorTheme;
  borderColor: ColorTheme;
  activeColor: ColorTheme;
}
