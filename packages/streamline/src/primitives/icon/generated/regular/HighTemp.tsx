/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const HighTemp = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M12 5a1 1 0 0 0-1 1v8.69c0 .358-.206.675-.451.934a2 2 0 1 0 2.902 0c-.245-.26-.451-.576-.451-.933V6a1 1 0 0 0-1-1Z"
      fill={color}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 1a5 5 0 0 0-5 5v7.682A6 6 0 1 0 17.197 14H18a1 1 0 1 0 0-2h-1v-2h1a1 1 0 1 0 0-2h-1V6h1a1 1 0 1 0 0-2h-1.416A5.001 5.001 0 0 0 12 1Zm3 5a3 3 0 1 0-6 0v7.598c0 .487-.196.947-.444 1.367a4 4 0 1 0 6.889 0c-.249-.42-.445-.88-.445-1.367V6Z"
      fill={color}
    />
  </Svg>
);
export default HighTemp;
