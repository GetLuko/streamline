import { ColorTheme } from '../../../theme';

export type CardContentProps = {
  title?: string;
  description?: string;
  colors?: {
    titleColor?: ColorTheme;
    descriptionColor?: ColorTheme;
  };
};
