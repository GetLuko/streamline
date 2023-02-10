/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Alexa = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path d="M12 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z" fill={color} />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21 10c0 7.119-5.741 11.07-9.648 12.912-.64.301-1.352-.182-1.352-.889v-2.447c0-.468-.326-.867-.77-1.01A9 9 0 1 1 21 10Zm-2 0a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
      fill={color}
    />
  </Svg>
);
export default Alexa;
