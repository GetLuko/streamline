import { IconsName } from '../../icon/icon.types';
import { CardHeaderProps } from './card-header.types';

export const hasValidIconName = (
  iconName: CardHeaderProps['iconName']
): iconName is IconsName => Boolean(iconName);

export const hasValidHeader = (
  header: CardHeaderProps['header']
): header is string => Boolean(header);

export const hasValidValue = (
  value: CardHeaderProps['value']
): value is string => Boolean(value);

export const hasValidRightAction = (
  rightAction: CardHeaderProps['rightAction']
): rightAction is 'navigate' => rightAction !== null;
