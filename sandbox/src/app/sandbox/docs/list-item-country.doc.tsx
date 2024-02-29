import {
  ListItemCountry,
  ListItemCountryProps,
  ListItemGroup,
} from '@getluko/streamline';
import React from 'react';

import { DocList } from '../components/DocList';

const COUNTRY_ITEMS: ListItemCountryProps[] = [
  { countryCode: 'FR', title: 'France' },
  { countryCode: 'DE', title: 'Allemagne' },
  { countryCode: 'ES', title: 'Espagne' },
  { countryCode: 'IT', title: 'Italie' },
];
const LIST_ITEMS: JSX.Element[] = [
  <ListItemCountry countryCode="FR" title="France" />,

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
