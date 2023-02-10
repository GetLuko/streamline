export function isObjKey<T extends object>(key: any, obj: T): key is keyof T {
  return key in obj;
}

export const isDefined = <T>(argument: T | undefined | null): argument is T => {
  return argument != null;
};
