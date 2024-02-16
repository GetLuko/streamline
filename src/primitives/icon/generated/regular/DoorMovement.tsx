/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const DoorMovement = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 1a2 2 0 0 0-2 2v20h12V3a2 2 0 0 0-2-2H8Zm7 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
      fill={color}
    />
    <Path
      d="M3.447 5.106a1 1 0 0 1 .447 1.341L3.118 8l.776 1.553a1 1 0 0 1 0 .894L3.118 12l.776 1.553a1 1 0 0 1 0 .894L3.118 16l.776 1.553a1 1 0 1 1-1.788.894l-1-2a1 1 0 0 1 0-.894L1.882 14l-.776-1.553a1 1 0 0 1 0-.894L1.882 10l-.776-1.553a1 1 0 0 1 0-.894l1-2a1 1 0 0 1 1.341-.447ZM20.106 6.447a1 1 0 1 1 1.788-.894l1 2a1 1 0 0 1 0 .894L22.118 10l.776 1.553a1 1 0 0 1 0 .894L22.118 14l.776 1.553a1 1 0 0 1 0 .894l-1 2a1 1 0 1 1-1.788-.894L20.882 16l-.776-1.553a1 1 0 0 1 0-.894L20.882 12l-.776-1.553a1 1 0 0 1 0-.894L20.882 8l-.776-1.553Z"
      fill={color}
    />
  </Svg>
);
export default DoorMovement;
