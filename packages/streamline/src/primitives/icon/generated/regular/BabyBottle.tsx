/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const BabyBottle = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M14 2c0 .137-.014.27-.04.399A5.009 5.009 0 0 1 16.9 6H18a2 2 0 1 1 0 4v11a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-2h3.5a.5.5 0 0 0 0-1H6v-2h3.5a.5.5 0 0 0 0-1H6v-2h3.5a.5.5 0 0 0 0-1H6v-2a2 2 0 1 1 0-4h1.1a5.009 5.009 0 0 1 2.94-3.601A2 2 0 1 1 14 2Z"
      fill={color}
    />
  </Svg>
);
export default BabyBottle;
