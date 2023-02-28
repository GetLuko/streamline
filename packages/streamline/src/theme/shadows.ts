/**
 * https://www.figma.com/file/tOJLNigXQXJqCSKgJFPZn5/Mobile-Lukomponents-(PoC)?t=bHX0bZ8IyspwHn0r-0
 */
export const shadows = {
  // values in progress (to be synced with Ian)
  soft: {
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
    shadowOpacity: 1,
    elevation: 1,
  },
  moderate: {
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.3,
    elevation: 2,
  },
  strong: {
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 20,
    shadowOpacity: 0.12,
    elevation: 12,
  },
};

export type ShadowTheme = keyof typeof shadows;

export const getShadowsStyle = (shadow: ShadowTheme) => shadows[shadow];
