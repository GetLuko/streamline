import MarkdownDisplay, {
  MarkdownIt,
} from '@ronradtke/react-native-markdown-display';
import React from 'react';

import { ColorTheme, fonts, useStreamlineTheme } from '../../theme';
import { colors } from '../../theme/colors';
import { FontFamily } from '../../theme/fonts';
import { isIOS } from '../../utils/platform';

export interface MarkdownLinkProps {
  children: string;
  onLinkPress?: (url: string) => boolean;
  bodyColor?: ColorTheme;
}

export function MarkdownLink({
  children,
  onLinkPress,
  bodyColor,
}: MarkdownLinkProps) {
  const theme = useStreamlineTheme();
  const styles = getStyles(bodyColor ? theme.colors[bodyColor] : undefined);
  return (
    <MarkdownDisplay
      onLinkPress={onLinkPress}
      style={styles}
      markdownit={MarkdownIt({ typographer: true }).disable([
        'image',
        'fence',
        'list',
        'blockquote',
      ])}
    >
      {children}
    </MarkdownDisplay>
  );
}
const getStyles = (bodyColor?: string) => ({
  body: { ...fonts.body, color: bodyColor || colors.GREY.GREY_700 },
  strong: { ...fonts.bodyBold, color: bodyColor || colors.PRIMARY.BLACK },
  em: {
    ...fonts.bodyBold,
    fontFamily: FontFamily.Italic,
  },
  link: {
    ...fonts.body,
    color: bodyColor || colors.BLUKO.BLUKO_500,
    bottom: isIOS ? 2 : -1,
  },
  paragraph: {
    marginTop: 0,
    marginBottom: 0,
  },
});
