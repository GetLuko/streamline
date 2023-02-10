/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const EScooter = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.636 1.772a1 1 0 1 0-.986.165l1.357 8.145a.5.5 0 0 0-.411.576l.375 2.252a.53.53 0 0 1-.325.57A6.008 6.008 0 0 0 14.083 18H6.829a3.001 3.001 0 1 0-.593 3H14a2 2 0 0 0 2-2c0-1.4.72-2.634 1.81-3.348.274-.18.62.006.673.328l.066.394A3 3 0 0 0 20 22a3 3 0 0 0 .521-5.955l-.115-.691c-.04-.239.11-.463.284-.63a1 1 0 0 0-.272-1.632c-.22-.102-.433-.265-.473-.504l-.376-2.26A.499.499 0 0 0 19.36 10h1.14a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-.882a1 1 0 0 0-.862.493l-1.12-6.721ZM4 18a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm16 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
      fill={color}
    />
  </Svg>
);
export default EScooter;
