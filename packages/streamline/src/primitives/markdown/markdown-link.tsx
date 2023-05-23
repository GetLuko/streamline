import MarkdownDisplay, {
  MarkdownIt,
} from '@ronradtke/react-native-markdown-display';
import React from 'react';

import { ColorTheme, fonts, useStreamlineTheme } from '../../theme';
import { colors } from '../../theme/colors';
import { FontFamily } from '../../theme/fonts';
import { isIOS } from '../../utils/platform';

export interface MarkdownProps {
  children: string;
  onLinkPress?: (url: string) => boolean;
  bodyColor?: ColorTheme;
}

/**
 * MarkdownLink
 *
 * This component is a wrapper around react-native-markdown-display.
 * It disables all the formatting except for links.
 *
 * It also uses the streamline theme for the colors.
 *
 * @param children - markdown text, should use the markdown syntax for links to be tappable: [my link](url)
 * @param onLinkPress - callback function that fires when a link is pressed, should return a boolean.
 * @param bodyColor - optional color to use for the body text
 *
 * @example
 * ```typescript
 * const myText = [link](https://www.google.com)
 *
 * const onLinkPress = (url) => {
 *   if (url) {
 *     // some custom logic
 *     return false;
 *  }
 *
 *   // return true to open with `Linking.openURL
 *   // return false to handle it yourself
 *   return true
 * }
 *
 * <MarkdownLink onLinkPress={handleLinkPress}>
 *   {myText}
 * </MarkdownLink>
 * ```
 * */

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
