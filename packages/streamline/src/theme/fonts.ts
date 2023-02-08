import { TextStyle } from 'react-native';

/**
 * https://www.figma.com/file/tOJLNigXQXJqCSKgJFPZn5/Mobile-Lukomponents-(PoC)?node-id=4173%3A3506&t=dOO6KIa04mQ0knst-11
 */
const FontFamily = {
  Default: 'CircularXX-Book',
  Bold: 'CircularXX-Bold',
};

type TextVariantRegular =
  | 'titleLarge'
  | 'titleMedium'
  | 'titleSmall'
  | 'headline'
  | 'body'
  | 'subBody'
  | 'caption';

type TextVariantBold =
  | 'titleLargeBold'
  | 'titleMediumBold'
  | 'titleSmallBold'
  | 'headlineBold'
  | 'bodyBold'
  | 'subBodyBold'
  | 'captionBold';

export type TextVariants = TextVariantBold | TextVariantRegular;

const regulars: Record<TextVariantRegular, TextStyle> = {
  titleLarge: {
    fontFamily: FontFamily.Default,
    fontSize: 32,
    lineHeight: 40,
    letterSpacing: -1,
  },
  titleMedium: {
    fontFamily: FontFamily.Default,
    fontSize: 24,
    lineHeight: 32,
    letterSpacing: -1,
  },
  titleSmall: {
    fontFamily: FontFamily.Default,
    fontSize: 20,
    lineHeight: 28,
    letterSpacing: -1,
  },
  headline: {
    fontFamily: FontFamily.Default,
    fontSize: 18,
    lineHeight: 24,
    letterSpacing: -1,
  },
  body: {
    fontFamily: FontFamily.Default,
    fontSize: 16,
    lineHeight: 24,
  },
  subBody: {
    fontFamily: FontFamily.Default,
    fontSize: 14,
    lineHeight: 20,
  },
  caption: {
    fontFamily: FontFamily.Default,
    fontSize: 12,
    lineHeight: 16,
  },
};

export const fonts: Record<TextVariants, TextStyle> = {
  ...regulars,
  titleLargeBold: {
    ...regulars.titleLarge,
    fontFamily: FontFamily.Bold,
  },
  titleMediumBold: {
    ...regulars.titleMedium,
    fontFamily: FontFamily.Bold,
  },
  titleSmallBold: {
    ...regulars.titleSmall,
    fontFamily: FontFamily.Bold,
  },
  headlineBold: {
    ...regulars.headline,
    fontFamily: FontFamily.Bold,
  },
  bodyBold: {
    ...regulars.body,
    fontFamily: FontFamily.Bold,
  },
  subBodyBold: {
    ...regulars.subBody,
    fontFamily: FontFamily.Bold,
  },
  captionBold: {
    ...regulars.caption,
    fontFamily: FontFamily.Bold,
  },
};
