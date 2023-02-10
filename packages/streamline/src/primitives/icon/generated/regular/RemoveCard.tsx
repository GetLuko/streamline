/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const RemoveCard = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M22.707 2.707a1 1 0 0 0-1.414-1.414L18.586 4H3a2 2 0 0 0-2 2 1 1 0 0 0 1 1h13.586l-2 2H2a1 1 0 0 0-1 1v8a2 2 0 0 0 1.622 1.964l-1.33 1.329a1 1 0 1 0 1.415 1.414l20-20Z"
      fill={color}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m19.243 9-11 11H21a2 2 0 0 0 2-2v-8a1 1 0 0 0-1-1h-2.757ZM18 16a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2Z"
      fill={color}
    />
    <Path
      d="M22 7h-.757l1.65-1.65c.07.204.107.423.107.65a1 1 0 0 1-1 1Z"
      fill={color}
    />
  </Svg>
);
export default RemoveCard;
