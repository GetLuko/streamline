/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Crutch = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.707 1.293a1 1 0 1 0-1.414 1.414l.146.147-2.875 2.875a3 3 0 0 0-.725 1.173l-.552 1.656a3 3 0 0 1-.725 1.173L2.5 12.793l-.646-.647a.5.5 0 0 0-.708.708l2 2a.5.5 0 0 0 .708-.708l-.647-.646 3.062-3.062a3 3 0 0 1 1.173-.725l1.656-.552a3 3 0 0 0 1.173-.725l2.875-2.875.147.146a1 1 0 1 0 1.414-1.414l-3-3Zm.732 3.56-1.293-1.292L9.207 5.5 10.5 6.793l1.94-1.94ZM7.937 6.77l.563-.563L9.793 7.5l-.563.563-1.18.393a.4.4 0 0 1-.506-.506l.393-1.18Z"
      fill={color}
    />
  </Svg>
);
export default Crutch;
