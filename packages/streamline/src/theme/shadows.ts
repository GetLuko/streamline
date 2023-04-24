/**
 * https://www.figma.com/file/tOJLNigXQXJqCSKgJFPZn5/Mobile-Lukomponents-(PoC)?t=bHX0bZ8IyspwHn0r-0
 */
export const shadows = {
  soft: {
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
  },
  moderate: {
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 7,
  },
  strong: {
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowRadius: 16,
    shadowOpacity: 0.16,
    elevation: 12,
  },
};

export type ShadowTheme = keyof typeof shadows;

export const getShadowsStyle = (shadow: ShadowTheme) => shadows[shadow];
