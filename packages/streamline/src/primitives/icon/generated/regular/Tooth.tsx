/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Tooth = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M10.86 1.442a3.158 3.158 0 0 0 2.28 0 6.5 6.5 0 0 1 8.315 8.669c-.455 1.035-1.198 1.959-1.385 3.074A4.93 4.93 0 0 0 20 14c0 4.418-2.343 9-4 9-1.53 0-2.792-4.053-2.977-8-.026-.551-.47-1-1.023-1-.552 0-.997.449-1.023 1-.185 3.947-1.447 8-2.977 8-1.657 0-4-4.582-4-9 0-.274-.025-.546-.07-.815-.187-1.115-.93-2.04-1.384-3.074a6.5 6.5 0 0 1 8.315-8.669Z"
      fill={color}
    />
  </Svg>
);
export default Tooth;
