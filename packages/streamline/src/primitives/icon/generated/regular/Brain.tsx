/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Brain = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.5 4a2 2 0 0 0-3.597-1.204A.508.508 0 0 1 7.5 3a2.5 2.5 0 0 0-2.495 2.334A3.5 3.5 0 0 1 10 8.5a.5.5 0 0 1-1 0 2.5 2.5 0 1 0-4.95.496.68.68 0 0 1-.213.637A2.497 2.497 0 0 0 3.05 11l-.005.025a2.514 2.514 0 0 0 .253 1.659A2.5 2.5 0 0 0 5.5 14a.5.5 0 0 1 0 1 3.489 3.489 0 0 1-2.45-1 2.496 2.496 0 0 0 .941 2.494.82.82 0 0 1 .239.957 2.5 2.5 0 0 0 2.89 3.471.773.773 0 0 1 .786.286A2 2 0 1 0 9.5 18a.5.5 0 0 1 0-1c.768 0 1.47.289 2 .764V7a2 2 0 0 0-2-2 .5.5 0 0 1 0-1c.768 0 1.47.289 2 .764V4ZM6 9a.5.5 0 0 0-1 0 3.5 3.5 0 0 0 2.894 3.448A1 1 0 0 1 7 13a.5.5 0 0 0 0 1 2 2 0 0 0 1.944-1.528c.47-.06.913-.213 1.306-.44a.5.5 0 0 0-.5-.866A2.5 2.5 0 0 1 6 9Zm-.497 9c.161 0 .338 0 .528.006C6.285 16.055 8.025 15 9.5 15a.5.5 0 0 1 0 1c-1.068 0-2.276.755-2.472 2.11.857.16 1.846.557 2.826 1.536a.5.5 0 0 1-.708.708C7.795 19.002 6.472 19 5.5 19a.5.5 0 0 1 0-1h.003ZM12.5 4a2 2 0 0 1 3.597-1.204A.508.508 0 0 0 16.5 3a2.5 2.5 0 0 1 2.495 2.334A3.5 3.5 0 0 0 14 8.5a.5.5 0 0 0 1 0 2.5 2.5 0 1 1 4.95.496.68.68 0 0 0 .213.637c.395.352.678.828.787 1.367l.005.025a2.519 2.519 0 0 1-.253 1.659A2.5 2.5 0 0 1 18.5 14a.5.5 0 0 0 0 1c.954 0 1.819-.382 2.45-1a2.507 2.507 0 0 1-.941 2.494.82.82 0 0 0-.239.957 2.5 2.5 0 0 1-2.89 3.471.773.773 0 0 0-.786.286A2 2 0 1 1 14.5 18a.5.5 0 0 0 0-1c-.768 0-1.47.289-2 .764V7a2 2 0 0 1 2-2 .5.5 0 0 0 0-1c-.768 0-1.47.289-2 .764V4ZM18 9a.5.5 0 0 1 1 0 3.5 3.5 0 0 1-2.894 3.448A1 1 0 0 0 17 13a.5.5 0 0 1 0 1 2 2 0 0 1-1.944-1.528 3.482 3.482 0 0 1-1.306-.44.5.5 0 0 1 .5-.866A2.5 2.5 0 0 0 18 9Zm.497 9c-.161 0-.338 0-.528.006C17.715 16.055 15.975 15 14.5 15a.5.5 0 0 0 0 1c1.068 0 2.276.755 2.472 2.11-.857.16-1.847.557-2.826 1.536a.5.5 0 0 0 .708.708C16.205 19.002 17.528 19 18.5 19a.5.5 0 0 0 0-1h-.003Z"
      fill={color}
    />
  </Svg>
);
export default Brain;
