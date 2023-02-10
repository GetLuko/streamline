/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Notification = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path d="M24 4a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" fill={color} />
    <Path
      d="M20 10a5.99 5.99 0 0 0 2-.341V15.6c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748C18.96 22 17.84 22 15.6 22H8.4c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C2 18.96 2 17.84 2 15.6V8.4c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C5.04 2 6.16 2 8.4 2h5.941A5.99 5.99 0 0 0 14 4H7.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C4 5.52 4 6.08 4 7.2v9.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C5.52 20 6.08 20 7.2 20h9.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874C20 18.48 20 17.92 20 16.8V10Z"
      fill={color}
    />
  </Svg>
);
export default Notification;
