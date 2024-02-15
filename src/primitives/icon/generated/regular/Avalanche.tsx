/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Avalanche = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M2 3.002c0-.89 1.077-1.337 1.707-.707L6.37 4.957C7 5.587 7 6.606 7 7.497V7.5c0 .692.284 1.321.736 1.771l6.398 6.398c.51.51.768 1.204 1.022 1.883l.068.182a3.501 3.501 0 0 0 4.68 1.973c.464-.203 1.03-.186 1.388.172l.41.412c.63.63.185 1.707-.706 1.707H3a1 1 0 0 1-1-1V3.002Z"
      fill={color}
    />
    <Path
      d="M15.793 9.885 9.721 7.051a.5.5 0 0 0-.573.804l7.525 7.525c.284.284.327.72.327 1.12a1.5 1.5 0 0 0 2.915.498L20 17a2 2 0 0 0 1.732-3A2 2 0 0 0 20 11c-.51 0-1.135-.304-1.521-.637A1.494 1.494 0 0 0 17.5 10c-.146 0-.295.008-.444.017-.436.024-.877.048-1.263-.132ZM17 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM12.5 7a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"
      fill={color}
    />
  </Svg>
);
export default Avalanche;
