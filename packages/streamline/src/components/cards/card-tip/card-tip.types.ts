import { IconsName } from '../../../primitives/icon/icon.types';
import { MarkdownLinkProps } from '../../../primitives/markdown/markdown-link.types';
import { ColorTheme } from '../../../theme';
import { Appearance } from '../../../theme/appearance';

export type CardTipProps = {
  appearance?: Appearance;
  description: string;
  iconName: IconsName;
  animated?: boolean;
  onLinkPress?: MarkdownLinkProps['onLinkPress'];
};

export type CardTipColors = {
  backgroundColor: ColorTheme;
  descriptionColor: ColorTheme;
  iconColor: ColorTheme;
};
