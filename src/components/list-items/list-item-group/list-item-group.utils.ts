import { ListItemProps } from '../list-item/list-item.types';
import { ListItemSelectableProps } from '../list-item-selectable/list-item-selectable.type';
import { ListItemValueProps } from '../list-item-value/list-item-value.types';
import { ListItemCountryProps } from '../list-item-country/list-item-country.types';

export const isListItemValueProps = (
  item: ListItemProps
): item is ListItemValueProps => 'value' in item;

export const isListItemSelectable = (
  item: ListItemProps
): item is ListItemSelectableProps => 'isSelected' in item;

export const isListItemCountry = (
  item: ListItemProps
): item is ListItemCountryProps => 'countryCode' in item;
