export { IconsName } from './primitives/icon/icon.types';
export * from './components/list-items/list-item-value/list-item-value.types';
export * from './components/list-items/list-item/list-item.types';
export * from './components/buttons/button/button.types';

export function isObjKey<T extends object>(key: any, obj: T): key is keyof T {
  return key in obj;
}

export const isDefined = <T>(argument: T | undefined | null): argument is T => {
  return argument != null;
};
