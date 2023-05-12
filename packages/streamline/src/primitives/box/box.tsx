import { createBox } from '@shopify/restyle';

import { Theme } from '../../theme';

/**
 * Box is a primitive component that can be used to render any element
 * with the theme's spacing, radii and colors.
 * @param spacing xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 64,
 */
export const Box = createBox<Theme>();
