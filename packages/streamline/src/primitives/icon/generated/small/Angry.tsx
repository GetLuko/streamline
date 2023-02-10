/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Angry = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm-2-4c.552 0 1-.672 1-1.5S6.552 8 6 8s-1 .672-1 1.5.448 1.5 1 1.5Zm5-1.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 8 10 8s1 .672 1 1.5Zm-1.871 1.949C8.845 11.215 8.459 11 8 11c-.458 0-.845.216-1.13.449l-.146.118c-.38.301-.84.666-.698 1.091a.5.5 0 0 0 .348.326c.167.043.33-.038.486-.116l.053-.026c.29-.14.76-.342 1.087-.342.326 0 .798.202 1.086.342l.015.007.038.02c.157.077.32.158.487.115a.5.5 0 0 0 .348-.326c.142-.425-.318-.79-.698-1.091l-.147-.118ZM6.667 5.514l-2.038-.497a.5.5 0 0 0-.447.869l1.645 1.356h.002a1 1 0 1 0 .838-1.727Zm4.704-.497-2.038.497a1 1 0 1 0 .838 1.727l.002.001 1.645-1.356a.499.499 0 0 0-.447-.87Z"
      fill={color}
    />
  </Svg>
);
export default Angry;
