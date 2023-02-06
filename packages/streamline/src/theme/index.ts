import { createTheme, useTheme } from "@shopify/restyle";

import { colors } from "./colors";
import { radius } from "./radius";
import { spacings } from "./spacings";

export const theme = createTheme({
    textVariants: {
        defaults: { fontWeight: 0} // TODO typography
    },
    colors: {
        ...colors.PRIMARY,
        ...colors.GREY,
        ...colors.PURPLE,
        ...colors.TEAL,
        ...colors.BLUKO,
        ...colors.ORANGE,
        ...colors.MINT,
        ...colors.GOLD,
        ...colors.TERRA,
    },
    spacing:{
        ...spacings
    },
    breakpoints: {
        phone: 0,
        tablet: 768,
    },
    borderRadii: {
        ...radius
    }
})


export type Theme = typeof theme;

export const useStreamlineTheme = () => useTheme<Theme>();