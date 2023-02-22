import isNil from 'lodash.isnil';
import { useState } from 'react';
import { isPromise } from '../utils/is-promise';

export const usePress = <T>({
  onPress,
}: {
  onPress?: null | ((arg: T) => void) | ((arg: T) => Promise<void>);
}): [(arg: T) => Promise<void>, boolean] => {
  const [isResolving, setIsResolving] = useState<boolean>(false);

  const handlePress = async (arg: T) => {
    if (isNil(onPress)) {
      return;
    }

    if (typeof onPress === 'function' && !isResolving) {
      const returnValue = onPress(arg) as unknown;

      if (isPromise(returnValue)) {
        try {
          setIsResolving(true);
          await returnValue;
          setIsResolving(false);
        } catch (e) {
          setIsResolving(false);
          throw e;
        }
      }
    }
  };

  return [handlePress, isResolving];
};
