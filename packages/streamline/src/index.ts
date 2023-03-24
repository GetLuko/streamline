import * as GeneratedRegularIcons from './primitives/icon/generated/regular';

export * from './components/buttons/button/button';
export * from './components/buttons/button-icon/button-icon';
export * from './components/cards/card-callout/card-callout';
export * from './components/spinner/spinner';
export * from './components/tag/tag';
export * from './primitives/animated-box/animated-box';
export * from './primitives/box/box';
export * from './primitives/text/text';
export * from './primitives/icon/icon';
export * from './primitives/card/card';
export * from './theme';
export * from './theme/ThemeProvider';
export { GeneratedRegularIcons };

export type InteractionType = {
  /**
   * Accessibility label for the button
   */
  accessibilityLabel: string;
  /**
   * If true, the button state will be set to loading
   */
  isLoading?: boolean;
  /**
   * If true, the button will be disabled
   */
  isDisabled?: boolean;
  /**
   * Callback when pressed
   */
  onPress?: () => void;
};
