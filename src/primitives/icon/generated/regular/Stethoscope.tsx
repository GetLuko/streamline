/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Stethoscope = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7 3a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v8a6.003 6.003 0 0 0 4.178 5.718c.465.148.822.557.822 1.045V19a3 3 0 0 0 3 3h7a3 3 0 0 0 3-3V8.536c0-.423.277-.788.633-1.019a3 3 0 1 0-3.266 0c.356.231.633.596.633 1.02V19a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1v-.237c0-.488.357-.897.822-1.045A6.003 6.003 0 0 0 14 12V4a2 2 0 0 0-2-2h-2a1 1 0 0 0 0 2h2v8a4 4 0 0 1-8 0V4h2a1 1 0 0 0 1-1Zm12 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
      fill={color}
    />
  </Svg>
);
export default Stethoscope;
