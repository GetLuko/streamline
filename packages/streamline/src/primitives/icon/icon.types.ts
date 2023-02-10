import { ColorProps } from '@shopify/restyle';
import { Theme } from '../../theme';

import * as RegularIcons from './svgs/regular';
import * as SmallIcons from './svgs/small';

export type RegularIconsName = keyof typeof RegularIcons;
export type SmallIconName = keyof typeof SmallIcons;

export type Size = 'small' | 'regular' | 'large';

export type RestyleProps = ColorProps<Theme>;
export type IconsName = RegularIconsName | SmallIconName;
