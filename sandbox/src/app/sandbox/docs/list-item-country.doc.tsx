import {
  ListItemCountry,
  ListItemCountryProps,
  ListItemGroup,
} from '@getluko/streamline';
import React from 'react';

import { DocList } from '../components/DocList';

const onPress = () => {};

const COUNTRY_ITEMS: ListItemCountryProps[] = [
  { countryCode: 'FR', title: 'France', onPress },
  { countryCode: 'DE', title: 'Allemagne', onPress },
  { countryCode: 'ES', title: 'Espagne', onPress },
  { countryCode: 'IT', title: 'Italie', onPress },
];
const LIST_ITEMS: JSX.Element[] = [
  <ListItemCountry countryCode="FR" title="France" onPress={onPress} />,

  <ListItemGroup
    title="Country group"
    description="description"
    items={COUNTRY_ITEMS}
    key="Country items"
  />,
];

export const ListItemCountrySandbox = () => (
  <DocList docs={LIST_ITEMS} margin="md" />
);
