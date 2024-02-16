/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const BrandLinkedin = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.52 5.417c2.937 0 3.48 1.936 3.48 4.454V15h-2.9v-4.548c0-1.084-.02-2.48-1.508-2.48-1.51 0-1.74 1.183-1.74 2.403V15H5.954V5.649h2.78v1.278h.041c.387-.735 1.333-1.51 2.744-1.51Zm-7.386.232V15H1.23V5.649h2.904ZM2.684 1c.927 0 1.68.755 1.68 1.685 0 .931-.753 1.686-1.68 1.686A1.683 1.683 0 0 1 1 2.685C1 1.755 1.751 1 2.683 1Z"
      fill="#fff"
    />
  </Svg>
);
export default BrandLinkedin;
