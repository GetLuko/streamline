/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Package = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.5 6.559v1.286a.25.25 0 0 1-.362.224l-.862-.43A.5.5 0 0 1 4 7.19V5.809a.5.5 0 0 1 .276-.447l5.836-2.918a.25.25 0 0 0 0-.447l-1.888-.944a.5.5 0 0 0-.448 0l-6 3A.5.5 0 0 0 1.5 4.5v7a.5.5 0 0 0 .276.447l1.862.931A.25.25 0 0 0 4 12.655v-1.25a.25.25 0 0 1 .362-.224l.862.43a.5.5 0 0 1 .276.448V13.5a.5.5 0 0 0 .276.447l2 1a.5.5 0 0 0 .448 0l6-3a.5.5 0 0 0 .276-.447v-7a.5.5 0 0 0-.276-.447l-1.941-.97a.5.5 0 0 0-.448 0L5.776 6.111a.5.5 0 0 0-.276.447Zm4.362 5.01 1.362-.68a.5.5 0 0 0 .276-.448V7.655a.25.25 0 0 0-.362-.224l-1.362.68a.5.5 0 0 0-.276.448v2.787a.25.25 0 0 0 .362.223Z"
      fill={color}
    />
  </Svg>
);
export default Package;
