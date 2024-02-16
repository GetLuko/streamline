/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const EyeOpen = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path d="M9 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" fill={color} />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 4c-1.508 0-2.9.598-4.014 1.268-1.115.668-2.042 1.463-2.624 1.961l-.013.012A1 1 0 0 0 1.4 8.8c.15.112.323.248.515.399.575.45 1.32 1.036 2.125 1.529C5.133 11.397 6.487 12 8 12s2.867-.603 3.96-1.272c.804-.493 1.55-1.078 2.125-1.53.192-.15.365-.286.515-.398a1 1 0 0 0 .05-1.56c-.592-.508-1.55-1.304-2.685-1.976C10.845 4.602 9.452 4 8 4Zm3 4a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      fill={color}
    />
  </Svg>
);
export default EyeOpen;
