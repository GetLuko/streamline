import MarkdownDisplay from '@ronradtke/react-native-markdown-display';
import React from 'react';
import { StyleSheet } from 'react-native';

import { LINK_BOTTOM_SPACE } from './mardown.constants';
import { fonts } from '../../theme';
import { colors } from '../../theme/colors';
import { FontFamily } from '../../theme/fonts';
import { radius } from '../../theme/radius';
import { spacings } from '../../theme/spacings';
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
const styles = StyleSheet.create({
  body: { ...fonts.body, color: colors.GREY.GREY_700 },
  heading1: {
    ...fonts.titleMediumBold,
    color: colors.PRIMARY.BLACK,
    marginBottom: spacings.xs,
  },
  heading2: {
    ...fonts.titleSmallBold,
    color: colors.PRIMARY.BLACK,
    marginBottom: spacings.xs,
  },
  heading3: {
    ...fonts.headlineBold,
    color: colors.PRIMARY.BLACK,
    marginBottom: spacings.xs,
  },
  strong: { ...fonts.bodyBold, color: colors.PRIMARY.BLACK },
  em: {
    ...fonts.bodyBold,
    fontFamily: FontFamily.Italic,
  },
  link: {
    ...fonts.body,
    color: colors.BLUKO.BLUKO_500,
    paddingBottom: LINK_BOTTOM_SPACE,
  },
  paragraph: { ...fonts.body, marginBottom: 16, marginTop: 0 },
  list_item: { ...fonts.body },
  bullet_list_icon: {
    marginLeft: 10,
    left: -10,
    marginRight: 0,
    paddingRight: 12,
    fontSize: isIOS ? 32 : 16,
    paddingTop: isIOS ? 6 : 0,
    color: colors.PRIMARY.BLACK,
    marginBottom: isIOS ? 0 : 8,
  },
  ordered_list_icon: {
    marginBottom: 8,
    ...fonts.body,
    marginLeft: 10,
    left: -10,
    marginRight: 0,
    paddingRight: 10,
    color: colors.PRIMARY.BLACK,
  },
  code_block: {
    ...fonts.body,
    backgroundColor: colors.GREY.GREY_100,
    borderRadius: radius.lg,
    borderWidth: 0,
    padding: 16,
    borderColor: 'transparent',
  },
  fence: { ...fonts.body, borderWidth: 0, borderRadius: radius.lg },
  code_inline: {
    ...fonts.body,
    backgroundColor: colors.GREY.GREY_100,
    borderRadius: radius.lg,
    padding: 4,
  },
  blockquote: {
    ...fonts.titleSmall,
    fontSize: 250,
    backgroundColor: 'transparent',
    color: colors.GREY.GREY_1000,
    borderColor: colors.GREY.GREY_100,
    borderLeftWidth: 4,
    marginLeft: 0,
    paddingLeft: 24,
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  hr: {
    marginTop: 16,
    marginBottom: 16,
  },
  image: {
    backgroundColor: colors.PRIMARY.PURE_WHITE_1000,
    borderRadius: radius.lg,
    overflow: 'hidden',
  },
});
