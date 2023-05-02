import React from 'react';

import MarkdownDisplay, {
  MarkdownIt,
} from '@ronradtke/react-native-markdown-display';
import { ColorTheme, fonts, useStreamlineTheme } from '../../theme';
import { colors } from '../../theme/colors';
import { isIOS } from '../../utils/platform';
import { FontFamily } from '../../theme/fonts';

export interface MarkdownProps {
  children: string;
  onLinkPress?: (url: string) => boolean;
  bodyColor?: ColorTheme;
}

export function MarkdownLink({
  children,
  onLinkPress,
  bodyColor,
}: MarkdownProps) {
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
  strong: { ...fonts.bodyBold, color: colors.PRIMARY.BLACK },
  em: {
    ...fonts.bodyBold,
    fontFamily: FontFamily.Italic,
  },
  link: {
    ...fonts.body,
    color: bodyColor ? bodyColor : colors.BLUKO.BLUKO_500,
    paddingBottom: isIOS ? 2 : 0,
  },
  paragraph: {
    marginTop: 0,
    marginBottom: 0,
  },
});
