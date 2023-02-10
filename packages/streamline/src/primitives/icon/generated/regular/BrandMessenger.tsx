/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const BrandMessenger = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 1C5.803 1 1 5.54 1 11.67c0 3.207 1.315 5.978 3.455 7.893.18.162.288.385.297.626l.06 1.957a.881.881 0 0 0 1.234.779l2.183-.963a.878.878 0 0 1 .586-.044c1.003.277 2.072.423 3.185.423 6.197 0 11-4.54 11-10.67C23 5.538 18.197 1 12 1Zm6.604 8.21-3.231 5.125a1.651 1.651 0 0 1-2.386.44l-2.57-1.927a.66.66 0 0 0-.794.002l-3.47 2.634c-.463.352-1.07-.204-.757-.695l3.231-5.126a1.652 1.652 0 0 1 2.386-.44l2.57 1.927a.66.66 0 0 0 .794-.002l3.47-2.634c.463-.352 1.07.204.757.695Z"
      fill="#fff"
    />
  </Svg>
);
export default BrandMessenger;
