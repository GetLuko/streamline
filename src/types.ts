import { ButtonProps } from './components/buttons/button/button.types';
import { TagProps } from './components/tag/tag.types';

export { IconsName } from './primitives/icon/icon.types';
export * from './components/buttons/button/button.types';

export * from './components/cards/card-highlight/card-highlight.types';
export * from './components/cards/card-feedback/card-feedback.types';
export * from './components/cards/card-media/card-media.types';
export * from './components/cards/card-summary/card-summary.types';
export * from './components/cards/card-tip/card-tip.types';

export * from './components/dialog/dialog.types';

export * from './components/inputs/input-outline/input-outline.types';
export * from './components/inputs/input-text/types';
export * from './components/inputs/input-phone/input-phone.types';

export * from './components/list-items/list-item/list-item.types';
export * from './components/list-items/list-item-article/list-item-article.types';
export * from './components/list-items/list-item-country/list-item-country.types';
export * from './components/list-items/list-item-group/list-item-group.types';
export * from './components/list-items/list-item-selectable/list-item-selectable.type';
export * from './components/list-items/list-item-value/list-item-value.types';

export * from './components/navigation/navigation-bar-search/navigation-bar-search.types';
export * from './components/navigation/navigation-section-title/navigation-section-title.types';

export * from './components/ratings/emoji-rating/emoji-rating.types';
export * from './components/ratings/star-rating/star-rating.types';
export * from './components/ratings/thumb-rating/thumb-rating.types';

export * from './components/tabs/tab/tab.types';

export function isObjKey<T extends object>(key: any, obj: T): key is keyof T {
  return key in obj;
}

export const isDefined = <T>(argument: T | undefined | null): argument is T => {
  return argument != null;
};

export type FooterProps =
  | (Omit<ButtonProps, 'appearance' | 'pointerEvents'> & { type: 'button' })
  | (TagProps & { type: 'tag' });
