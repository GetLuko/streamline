/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Microphone = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M12 1a5.002 5.002 0 0 0-4.742 3.41c-.1.3.138.59.454.59H9a1 1 0 1 1 0 2H7.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5H9a1 1 0 1 1 0 2H7.712c-.316 0-.554.29-.454.59a5.002 5.002 0 0 0 9.484 0c.1-.3-.138-.59-.454-.59H15a1 1 0 1 1 0-2h1.5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H15a1 1 0 1 1 0-2h1.288c.316 0 .554-.29.454-.59A5.002 5.002 0 0 0 12 1Z"
      fill={color}
    />
    <Path
      d="M5 10a1 1 0 1 0-2 0c0 4.48 3.272 8.194 7.556 8.885.252.04.444.253.444.508V20.5a.5.5 0 0 1-.5.5H8a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2h-2.5a.5.5 0 0 1-.5-.5v-1.107c0-.255.192-.468.444-.508C17.728 18.194 21 14.479 21 10a1 1 0 1 0-2 0 7 7 0 1 1-14 0Z"
      fill={color}
    />
  </Svg>
);
export default Microphone;
