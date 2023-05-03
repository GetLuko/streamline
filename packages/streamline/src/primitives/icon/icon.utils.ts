import { isDefined, isObjKey } from '../../types';
import { stringCapitalize } from '../../utils/string.utils';
import * as RegularIcons from './generated/regular';
import * as SmallIcons from './generated/small';
import { IconsName, RegularIconsName, SmallIconName } from './icon.types';

export const isIconName = (icon?: string): icon is IconsName => {
  return (
    isDefined(icon) &&
    isCorrectSmallIconName(icon) &&
    isCorrectRegularIconName(icon)
  );
};

export const sanitizeIconName = (iconName?: string) => {
  // extra type safety
  if (typeof iconName !== 'string') {
    return;
  }

  const iconNameSplitted = iconName.replace(' ', '').split('-');
  return iconNameSplitted.map((item) => stringCapitalize(item)).join('');
};

export const isCorrectSmallIconName = (
  iconName?: string
): iconName is SmallIconName => {
  return Boolean(isObjKey(iconName, SmallIcons));
};

export const isCorrectRegularIconName = (
  iconName?: string
): iconName is RegularIconsName => {
  return Boolean(isObjKey(iconName, RegularIcons));
};
