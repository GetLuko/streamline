import * as GeneratedRegularIcons from './primitives/icon/generated/regular';

export * from './components/cards/card-highlight/card-highlight';

export * from './components/inputs/input-search/input-search';
export { GeneratedRegularIcons };
export { isIconName, sanitizeIconName } from './primitives/icon/icon.utils';
export * from './components/buttons/button-dock/button-dock';
export * from './components/list-items/list-item-article/list-item-article';
export * from './primitives/markdown/markdown';
export * from './components/list-items/list-item-option/list-item-option';
export * from './components/buttons/button-icon/button-icon';
export * from './components/buttons/button/button';
export * from './components/cards/card-callout/card-callout';
export * from './components/cards/card-carousel/card-carousel';
export * from './components/cards/card-feedback/card-feedback';
export * from './components/cards/card-media/card-media';
export * from './components/cards/card-summary/card-summary';
export * from './components/cards/card-tip/card-tip';
export * from './components/consent-box/consent-box';
export * from './components/checkbox/checkbox';
export * from './components/dialog/dialog';
export * from './components/inputs/input-outline/input-outline';
export * from './components/inputs/input-text-area/input-text-area';
export * from './components/inputs/input-text/input-text';
export * from './components/inputs/input-select/input-select';
export * from './components/inputs/input-date-picker/input-date-picker';
export * from './components/inputs/date-picker/date-picker';
export * from './components/inputs/input-code/input-code';
export * from './components/inputs/input-phone/input-phone';
export * from './components/list-items/list-item-group/list-item-group';
export * from './components/list-items/list-item-option/list-item-option';
export * from './components/list-items/list-item-value/list-item-value';
export * from './components/list-items/list-item/list-item';
export * from './components/list-items/list-item-selectable/list-item-selectable';
export * from './components/navigation/navigation-bar-progress/navigation-bar-progress';
export * from './components/navigation/navigation-title/navigation-title';
export * from './components/navigation/navigation-bar-trail/navigation-bar-trail';
export * from './components/navigation/navigation-section-title/navigation-section-title';
export * from './components/progress-bar/progress-bar';
export * from './components/switch/switch';
export * from './components/radio/radio';
export * from './components/spinner/spinner';
export * from './components/tag/tag';
export * from './components/button-bar/button-bar';
export * from './hooks/use-press.hook';
export * from './primitives/animated-box/animated-box';
export * from './primitives/box/box';
export * from './primitives/card/card';
export * from './primitives/icon/icon';
export * from './primitives/markdown/markdown';
export * from './primitives/markdown/markdown-link';
export * from './primitives/skeleton/skeleton';
export * from './primitives/text/text';
export * from './theme';
export * from './theme/ThemeProvider';
export * from './types';
export * from './utils/date';
export * from './utils/platform';

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
