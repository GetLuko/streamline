/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const EyeClosed = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.854 1.854a.5.5 0 0 0-.708-.708l-3.462 3.462C9.853 4.252 8.94 4 8 4c-1.508 0-2.9.598-4.014 1.268-1.115.668-2.042 1.463-2.624 1.961l-.013.012A1 1 0 0 0 1.4 8.8c.15.112.323.248.515.399.575.45 1.32 1.036 2.125 1.529.108.066.218.13.33.195l-3.224 3.223a.5.5 0 0 0 .708.708l3.456-3.457.952-.952L7.74 8.966l1.225-1.225 1.48-1.48 1.187-1.187 3.22-3.22Zm-5.116 3.7a3 3 0 0 0-4.184 4.184l4.184-4.183Z"
      fill={color}
    />
    <Path
      d="m7.223 10.898-.87.871A6.18 6.18 0 0 0 8 12c1.513 0 2.867-.603 3.96-1.272.804-.493 1.55-1.078 2.125-1.53.192-.15.365-.286.515-.398a1 1 0 0 0 .05-1.56 20.875 20.875 0 0 0-2.136-1.633l-1.616 1.616a3.002 3.002 0 0 1-3.675 3.675Z"
      fill={color}
    />
  </Svg>
);
export default EyeClosed;
