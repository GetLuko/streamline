import { ColorProps } from '@shopify/restyle';

import { Theme } from '../../theme';
import * as RegularIcons from './generated/regular';
import * as SmallIcons from './generated/small';

export type RegularIconsName = keyof typeof RegularIcons;
export type SmallIconName = keyof typeof SmallIcons;

export type GenericSize = 'regular' | 'large';
export type Size = 'small' | GenericSize | 'xlarge';

export type RestyleProps = ColorProps<Theme>;
export type IconsName = RegularIconsName | SmallIconName;
