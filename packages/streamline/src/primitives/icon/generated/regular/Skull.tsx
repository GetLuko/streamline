/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Skull = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.477 2 12v5.382a1 1 0 0 0 .553.894l3.149 1.575a1 1 0 0 1 .447.447l.575 1.15a1 1 0 0 0 .894.552H8v-2a1 1 0 1 1 2 0v2h1v-2a1 1 0 1 1 2 0v2h1v-2a1 1 0 1 1 2 0v2h.382a1 1 0 0 0 .894-.553l.575-1.149a1 1 0 0 1 .447-.447l3.15-1.575a1 1 0 0 0 .552-.894V12c0-5.523-4.477-10-10-10Zm-1.19 12.758a1 1 0 0 1 .97-.758h.44a1 1 0 0 1 .97.758l.5 2A1 1 0 0 1 12.72 18h-1.44a1 1 0 0 1-.97-1.242l.5-2ZM10 12.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm6.5 2.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
      fill={color}
    />
  </Svg>
);
export default Skull;
