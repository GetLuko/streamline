import { PressableProps } from 'react-native';
import { ColorTheme } from '../../theme';
import { Appearance } from '../../theme/appearance';

export type RadioProps = {
  appearance?: Appearance;
  value: boolean;
  onChange?: (value: boolean) => void;
  isDisabled?: boolean;
} & Pick<PressableProps, 'pointerEvents' | 'testID'>;

export interface RadioColors {
  backgroundColor: ColorTheme;
  dotColor: ColorTheme;
  shadowColor: ColorTheme;
  borderColor: ColorTheme;
  activeColor: ColorTheme;
}
