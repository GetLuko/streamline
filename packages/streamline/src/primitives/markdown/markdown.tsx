import MarkdownDisplay from '@ronradtke/react-native-markdown-display';
import React from 'react';

import { fonts } from '../../theme';
import { colors } from '../../theme/colors';
import { FontFamily } from '../../theme/fonts';
import { radius } from '../../theme/radius';
import { isIOS } from '../../utils/platform';
import { Box } from '../box/box';
import { Text } from '../text/text';

export interface MarkdownProps {
  children: string;
  onLinkPress?: (url: string) => boolean;
}

export function Markdown({ children, onLinkPress }: MarkdownProps) {
  return (
    <MarkdownDisplay
      onLinkPress={onLinkPress}
      style={styles}
      rules={{
        hr: (node) => {
          return node.markup === '---' ? (
            // spacer
            <Box key={node.key} style={styles.hr} />
          ) : (
            // divider
            <Box
              key={node.key}
              style={styles.hr}
              height={1}
              backgroundColor="GREY_100"
            />
          );
        },
        fence: (node, children, parent, styles, inheritedStyles = {}) => {
          let { content } = node;
          if (
            typeof node.content === 'string' &&
            node.content.charAt(node.content.length - 1) === '\n'
          ) {
            content = node.content.substring(0, node.content.length - 1);
          }
          return (
            <Box key={node.key} style={styles.code_block}>
              <Text style={inheritedStyles}>{content}</Text>
            </Box>
          );
        },
      }}
    >
      {children}
    </MarkdownDisplay>
  );
}
const styles = {
  body: { ...fonts.body, color: colors.GREY.GREY_700 },
  heading1: { ...fonts.titleMediumBold, color: colors.PRIMARY.BLACK },
  heading2: { ...fonts.titleSmallBold, color: colors.PRIMARY.BLACK },
  heading3: { ...fonts.headlineBold, color: colors.PRIMARY.BLACK },
  strong: { ...fonts.bodyBold, color: colors.PRIMARY.BLACK },
  em: {
    ...fonts.bodyBold,
    fontFamily: FontFamily.Italic,
  },
  link: {
    ...fonts.body,
    color: colors.BLUKO.BLUKO_500,
    paddingBottom: isIOS ? 2 : 0,
  },
  paragraph: { ...fonts.body },
  list_item: { ...fonts.body },
  bullet_list_icon: {
    marginLeft: 0,
    marginRight: 0,
    paddingRight: 12,
    fontSize: isIOS ? 32 : 16,
    paddingTop: isIOS ? 6 : 0,
    color: colors.PRIMARY.BLACK,
  },
  ordered_list_icon: {
    marginLeft: 0,
    marginRight: 0,
    paddingRight: 10,
    fontSize: 14,
    color: colors.PRIMARY.BLACK,
  },
  code_block: {
    ...fonts.body,
    backgroundColor: colors.GREY.GREY_100,
    borderRadius: radius.lg,
    borderWith: 0,
    padding: 16,
    borderColor: 'transparent',
  },
  fence: { ...fonts.body, borderWidth: 0, borderRadius: radius.lg },
  code_inline: {
    ...fonts.body,
    backgroundColor: colors.GREY.GREY_100,
    borderRadius: radius.lg,
  },
  blockquote: {
    backgroundColor: 'transparent',
    color: colors.GREY.GREY_1000,
    borderColor: colors.GREY.GREY_100,
    borderLeftWidth: 4,
    marginLeft: 0,
    paddingLeft: 28,
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  hr: {
    marginTop: 16,
    marginBottom: 16,
  },
};
