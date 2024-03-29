import { ListItemProps } from '../list-item/list-item.types';
import { ListItemCountryProps } from '../list-item-country/list-item-country.types';
import { ListItemSelectableProps } from '../list-item-selectable/list-item-selectable.type';
import { ListItemValueProps } from '../list-item-value/list-item-value.types';

export type ListItemGroupProps = {
  description?: string;
  items: (
    | ListItemProps
    | ListItemValueProps
    | ListItemSelectableProps
    | ListItemCountryProps
  )[];
  title?: string;
};
