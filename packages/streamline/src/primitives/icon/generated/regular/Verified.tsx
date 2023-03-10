/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Verified = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.488 1.606a2.13 2.13 0 0 0-2.976 0l-.67.652a2.13 2.13 0 0 1-1.787.584l-.922-.131a2.141 2.141 0 0 0-2.407 1.76l-.161.924a2.152 2.152 0 0 1-1.105 1.53l-.823.44a2.16 2.16 0 0 0-.92 2.847l.41.842c.29.597.29 1.295 0 1.892l-.41.842a2.16 2.16 0 0 0 .92 2.848l.823.44c.583.31.99.875 1.105 1.53l.16.923a2.141 2.141 0 0 0 2.408 1.76l.922-.131a2.13 2.13 0 0 1 1.788.584l.67.652a2.13 2.13 0 0 0 2.975 0l.67-.652a2.13 2.13 0 0 1 1.787-.584l.922.131a2.141 2.141 0 0 0 2.407-1.76l.161-.924a2.153 2.153 0 0 1 1.105-1.53l.823-.44a2.16 2.16 0 0 0 .92-2.847l-.41-.842a2.166 2.166 0 0 1 0-1.892l.41-.842a2.16 2.16 0 0 0-.92-2.848l-.823-.44a2.152 2.152 0 0 1-1.105-1.53l-.16-.923a2.141 2.141 0 0 0-2.408-1.76l-.923.131a2.13 2.13 0 0 1-1.787-.584l-.67-.652Zm4.28 7.034a1 1 0 1 0-1.536-1.28l-5.899 7.078-2.565-3.078a1 1 0 0 0-1.536 1.28l3.333 4a1 1 0 0 0 1.537 0l6.666-8Z"
      fill={color}
    />
  </Svg>
);
export default Verified;
