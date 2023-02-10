/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Mortgage = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M15 7h4.503a.5.5 0 0 0 .353-.854l-5.002-5.002a.5.5 0 0 0-.854.353V6a1 1 0 0 0 1 1Z"
      fill={color}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 3a2 2 0 0 1 2-2h5a1 1 0 0 1 1 1v4a3 3 0 0 0 3 3h4a1 1 0 0 1 1 1v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V3Zm7.5 8.154-5.319 4.091c-.34.235-.169.756.248.756H7a.5.5 0 0 1 .5.5V21h3v-3.332c0-.46.373-.834.833-.834h1.334c.46 0 .833.373.833.834V21h3v-4.499a.5.5 0 0 1 .5-.5h.57c.418 0 .59-.52.249-.756l-5.326-4.091a.877.877 0 0 0-.993 0Z"
      fill={color}
    />
  </Svg>
);
export default Mortgage;
