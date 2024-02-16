export const stringCapitalize = (str?: string) => {
  if (str === undefined) {
    return '';
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
};
