/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Paint = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.293 2.293a1 1 0 0 1 1.414 0l8 8a1 1 0 0 1 0 1.414l-10 10a1 1 0 0 1-1.414 0l-8-8a1 1 0 0 1 0-1.414l2.944-2.944c-.777-.182-1.467-.408-1.995-.685a2.919 2.919 0 0 1-.795-.584C2.217 7.83 2 7.464 2 7c0-.833.662-1.33 1.084-1.576.495-.289 1.148-.519 1.873-.704 1.45-.371 3.418-.62 5.604-.695l1.732-1.732ZM8.416 6.17c-1.16.115-2.169.284-2.964.487-.442.114-.792.231-1.054.343.345.148.83.3 1.455.438.335.074.7.143 1.09.205L8.416 6.17Zm-.76 3.59A37.42 37.42 0 0 0 12 10a1 1 0 1 0 0-2c-.874 0-1.715-.028-2.505-.08L13 4.413 19.586 11l-1.827 1.827a5.091 5.091 0 0 1-.76-.327c-.5-.25-1-.5-2-.5s-1.5.25-2 .5-1 .5-2 .5-1.5-.25-2-.5-1-.5-2-.5-1.5.25-2 .5l-.169.084L7.655 9.76ZM3.912 7.278s.003-.005.014-.015l-.014.015Z"
      fill={color}
    />
    <Path
      d="M22 21a2 2 0 0 0 2-2c0-1.416-1.002-3.589-1.588-4.737a.457.457 0 0 0-.824 0C21.002 15.411 20 17.584 20 19a2 2 0 0 0 2 2Z"
      fill={color}
    />
  </Svg>
);
export default Paint;
