import { ColorTheme } from '../../theme';

export interface MarkdownLinkProps {
  children: string;
  onLinkPress?: (url: string) => boolean;
  bodyColor?: ColorTheme;
}
