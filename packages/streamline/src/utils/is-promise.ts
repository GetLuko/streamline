export const isPromise = (value: unknown): value is Promise<unknown> => {
  // ref: https://stackoverflow.com/questions/27746304/how-do-i-tell-if-an-object-is-a-promise

  return (
    typeof value === 'object' &&
    value !== null &&
    'then' in value &&
    typeof (value as { then: unknown }).then === 'function'
  );
};
