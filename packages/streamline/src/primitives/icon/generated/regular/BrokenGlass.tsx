/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const BrokenGlass = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v18a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V3Zm9 1a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1V4Zm1.401 9H17c.351 0 .66.18.838.455L16.5 14.793v.898l-1.276.638-.616-1.23 1.177-1.177L14.4 13Zm3.099 2.207.5-.5v5.175l-.691-1.382h-1l-.638-1.276 1.829-.915v-1.102ZM15 18.118l-.392.783 1.1 1.099-1 1H17c.142 0 .277-.03.4-.083L16.69 19.5h-1L15 18.118ZM13 14v6c0 .351.18.66.455.838l.838-.838-.901-.901L14.44 17l-1.05-2.099.824-.823L13.2 13.4A.995.995 0 0 0 13 14ZM10 3a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h3ZM7 21a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H7Z"
      fill={color}
    />
  </Svg>
);
export default BrokenGlass;
