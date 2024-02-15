/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Package = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.553 1.106a1 1 0 0 1 .894 0l2.777 1.388a.5.5 0 0 1 0 .894L6.553 7.724A1 1 0 0 0 6 8.618v1.764a1 1 0 0 0 .553.894l.723.362A.5.5 0 0 0 8 11.191V9.618a1 1 0 0 1 .553-.894l9.118-4.56a1 1 0 0 1 .894 0l2.882 1.442A1 1 0 0 1 22 6.5v11a1 1 0 0 1-.553.894l-9 4.5a1 1 0 0 1-.894 0l-3-1.5A1 1 0 0 1 8 20.5v-1.882a1 1 0 0 0-.553-.894l-.723-.362a.5.5 0 0 0-.724.447v1.5a.5.5 0 0 1-.724.447l-2.723-1.362A1 1 0 0 1 2 17.5v-11a1 1 0 0 1 .553-.894l9-4.5Zm5.723 9.756-2.723 1.362a1 1 0 0 0-.553.894v4.573a.5.5 0 0 0 .724.447l2.723-1.362a1 1 0 0 0 .553-.894v-4.573a.5.5 0 0 0-.724-.447Z"
      fill={color}
    />
  </Svg>
);
export default Package;
