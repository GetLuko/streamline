/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Attachment = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="M13.121 2.879a3 3 0 0 0-4.242 0l-.007.006L2.507 9.02a1.75 1.75 0 0 0 2.48 2.467l.006-.005 6.466-6.047.001-.002a.625.625 0 0 0-.897-.87l-.006.006-6.715 6.296a.5.5 0 0 1-.684-.73L9.862 3.85a1.625 1.625 0 1 1 2.26 2.333l-6.434 6.018A2.75 2.75 0 1 1 1.84 8.274l6.335-6.106a4 4 0 0 1 5.654 5.66l-6.974 7.024a.5.5 0 0 1-.71-.704l6.975-7.025.001-.002a3 3 0 0 0 0-4.242Z"
      fill={color}
    />
  </Svg>
);
export default Attachment;
