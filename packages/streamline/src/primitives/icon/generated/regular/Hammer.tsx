/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const Hammer = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <G clipPath="url(#a)" fill={color}>
      <Path d="M4.703 5.518C5.943 4.12 7.275 2.615 8.912 1.75c1.84-.973 4.021-1.125 6.816.303a.5.5 0 0 1-.227.945c-.899 0-2.191.004-3.313.407-.553.198-1.043.486-1.42.9-.371.41-.654.97-.76 1.75-.087.636.19 1.288.682 1.841l-2.778 2.78-.184-.199a1.5 1.5 0 0 0-1.1-.48H6.5a.5.5 0 0 0-.5.5v.172a2.5 2.5 0 0 1-.732 1.768l-1.414 1.414a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 0-.707l1.708-1.707a1.5 1.5 0 0 1 1.06-.44H3.5a.5.5 0 0 0 .5-.5v-.615c0-.371.137-.727.382-1.003l.32-.36ZM9.272 12.142l2.872-2.871L23.84 20.134a.5.5 0 0 1 .014.72l-3 3a.5.5 0 0 1-.72-.014L9.272 12.142Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default Hammer;
