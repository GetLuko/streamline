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

export * from './components/list-items/list-item/list-item.types';
export * from './components/list-items/list-item-group/list-item-group.types';
export * from './components/list-items/list-item-selectable/list-item-selectable.type';
export * from './components/list-items/list-item-value/list-item-value.types';

export * from './components/navigation/navigation-section-title/navigation-section-title.types';

export function isObjKey<T extends object>(key: any, obj: T): key is keyof T {
  return key in obj;
}

export const isDefined = <T>(argument: T | undefined | null): argument is T => {
  return argument != null;
};

export type FooterProps =
  | (Omit<ButtonProps, 'appearance' | 'pointerEvents'> & { type: 'button' })
  | (TagProps & { type: 'tag' });