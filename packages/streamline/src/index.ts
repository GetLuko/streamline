import * as GeneratedRegularIcons from './primitives/icon/generated/regular';

export * from './primitives/markdown/markdown';
export * from './components/buttons/button-icon/button-icon';
export * from './components/buttons/button/button';
export * from './components/buttons/button/button';
export * from './components/buttons/button-dock/button-dock';
export * from './components/cards/card-callout/card-callout';
export * from './components/cards/card-summary/card-summary';
export * from './components/cards/card-tip/card-tip';
export * from './components/cards/card-tip/card-tip';
export * from './components/checkbox/checkbox';
export * from './components/inputs/input-text-area/input-text-area';
export * from './components/inputs/input-text/input-text';
export * from './components/inputs/input-text/input-text';
export * from './components/list-items/list-item/list-item';
export * from './components/list-items/list-item/list-item.types';
export * from './components/list-items/list-item-group/list-item-group';
export * from './components/radio/radio';
export * from './components/spinner/spinner';
export * from './components/progress-bar/progress-bar';
export * from './components/tag/tag';
export * from './components/navigation/navigation-title/navigation-title';
export * from './components/navigation/navigation-bar-progress/navigation-bar-progress';
export * from './primitives/animated-box/animated-box';
export * from './primitives/box/box';
export * from './primitives/card/card';
export * from './primitives/icon/icon';
export * from './primitives/skeleton/skeleton';
export * from './primitives/text/text';
export * from './theme';
export * from './theme/ThemeProvider';
export * from './utils/platform';
export { GeneratedRegularIcons };

export type InteractionType = {
  /**
   * Accessibility label
   */
  accessibilityLabel: string;
  /**
   * If true, the element state will be set to loading
   */
  isLoading?: boolean;
  /**
   * If true, the element will be disabled
   */
  isDisabled?: boolean;
  /**
   * Callback when pressed
   */
  onPress?: (params: unknown) => void;
  /**
   * Id for tests
   */
  testID?: string;
};
