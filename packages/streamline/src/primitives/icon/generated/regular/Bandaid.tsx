/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Bandaid = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.586 21.414a2 2 0 0 1-2.829 0L12 17.657l-3.757 3.757a2 2 0 0 1-2.829 0l-2.828-2.828a2 2 0 0 1 0-2.829L6.343 12 2.586 8.243a2 2 0 0 1 0-2.829l2.828-2.828a2 2 0 0 1 2.829 0L12 6.343l3.757-3.757a2 2 0 0 1 2.829 0l2.828 2.828a2 2 0 0 1 0 2.829L17.657 12l3.757 3.757a2 2 0 0 1 0 2.829l-2.828 2.828ZM8 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM6 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm2 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-3 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm2 2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm2-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-2-8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm2-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm7-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm1 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm1-5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm1 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-3 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm1 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm1-5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm1 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-3.793-7.793a1 1 0 0 1 0 1.414l-3.586 3.586a1 1 0 0 1-1.414 0l-1.414-1.414a1 1 0 0 1 0-1.414l3.586-3.586a1 1 0 0 1 1.414 0l1.414 1.414Z"
      fill={color}
    />
  </Svg>
);
export default Bandaid;
