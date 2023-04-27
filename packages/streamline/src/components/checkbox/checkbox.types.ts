import { PressableProps } from 'react-native';
import { ColorTheme } from '../../theme';
import { Appearance } from '../../theme/appearance';

export type CheckboxProps = {
  appearance?: Appearance;
  value: boolean;
  onChange?: (value: boolean) => void;
  disabled?: boolean;
} & Pick<PressableProps, 'pointerEvents' | 'testID'>;

export interface CheckboxColors {
  backgroundColor: ColorTheme;
  iconColor: ColorTheme;
  shadowColor: ColorTheme;
  borderColor: ColorTheme;
  activeColor: ColorTheme;
}
