/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const DoorMovement = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 1a1 1 0 0 0-1 1v13h8V2a1 1 0 0 0-1-1H5Zm5.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"
      fill={color}
    />
    <Path
      d="M13.276 3.553a.5.5 0 0 1 .671.223l1 2a.5.5 0 0 1 0 .448L14.06 8l.888 1.776a.5.5 0 0 1 0 .448l-1 2a.5.5 0 1 1-.894-.448L13.94 10l-.888-1.776a.5.5 0 0 1 0-.448L13.94 6l-.888-1.776a.5.5 0 0 1 .223-.671ZM2.053 3.776a.5.5 0 1 1 .894.448L2.06 6l.888 1.776a.5.5 0 0 1 0 .448L2.06 10l.888 1.776a.5.5 0 1 1-.894.448l-1-2a.5.5 0 0 1 0-.448L1.94 8l-.888-1.776a.5.5 0 0 1 0-.448l1-2Z"
      fill={color}
    />
  </Svg>
);
export default DoorMovement;
