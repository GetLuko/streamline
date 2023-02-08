/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Map = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.225 2.083a.5.5 0 0 1 .472-.043l3.315 1.421 3.812-1.43a.5.5 0 0 1 .373.01l3.5 1.5A.5.5 0 0 1 14 4v9.5a.5.5 0 0 1-.697.46l-3.315-1.421-3.812 1.43a.5.5 0 0 1-.373-.01l-3.5-1.5A.5.5 0 0 1 2 12V2.5a.5.5 0 0 1 .225-.417ZM6.612 4.29A.975.975 0 0 0 6 5.201v7.042c0 .349.35.59.676.468l2.676-1.007a1 1 0 0 0 .648-.936V3.742a.497.497 0 0 0-.665-.47c-.707.255-1.842.669-2.723 1.018Z"
      fill={color}
    />
  </Svg>
);
export default Map;
