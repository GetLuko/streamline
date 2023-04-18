export const hasValidTitle = (title?: string): title is string =>
  Boolean(title);

export const hasValidDescription = (
  description?: string
): description is string => Boolean(description);
