/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Circle, Path } from 'react-native-svg';
const Us = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Circle cx={12} cy={12} r={11} fill="#fff" />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 12c0 .236.009.469.027.7H12V3c-1.85 0-3.57.558-5 1.516a.5.5 0 0 1-.635.466c-.157.126-.31.258-.458.394a.5.5 0 0 1-.687.705c-.12.137-.235.277-.346.42a.5.5 0 0 1-.552.8A8.958 8.958 0 0 0 3 12Zm5.5-7a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm2.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM7.5 6.167a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm2.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM6.5 7.333a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm2.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm1.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM6 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm1.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM10 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM4.5 9.667a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm2.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm1.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm2.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm-5.5 1.666a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm2.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm1.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM5 11.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm1.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm2.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm1.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"
      fill={color}
    />
    <Path
      d="M12 12.7h8.973a9.11 9.11 0 0 0 0-1.4H12v1.4ZM12 9.933h8.762a8.928 8.928 0 0 0-.454-1.4H12v1.4ZM12 7.167h7.593a9.042 9.042 0 0 0-1.1-1.4H12v1.4ZM12 4.4h4.823A8.958 8.958 0 0 0 12 3v1.4ZM3.239 14.067c.113.482.265.95.453 1.4h16.616c.188-.45.34-.918.454-1.4H3.239ZM5.508 18.233a9.035 9.035 0 0 1-1.101-1.4h15.186c-.32.503-.69.972-1.1 1.4H5.507ZM12 21a8.958 8.958 0 0 0 4.823-1.4H7.177A8.958 8.958 0 0 0 12 21Z"
      fill="#D95762"
    />
  </Svg>
);
export default Us;