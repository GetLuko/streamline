import { ColorProps } from '@shopify/restyle';

import * as RegularIcons from './generated/regular';
import * as SmallIcons from './generated/small';
import { Theme } from '../../theme';

export type RegularIconsName = keyof typeof RegularIcons;
export type SmallIconName = keyof typeof SmallIcons;

export type GenericSize = 'regular' | 'large';
export type Size = 'small' | GenericSize | 'xlarge';

export type RestyleProps = ColorProps<Theme>;
export type IconsName = RegularIconsName | SmallIconName;
