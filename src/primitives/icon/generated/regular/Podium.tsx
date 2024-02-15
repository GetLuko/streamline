/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Podium = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M12.524 1.324a.586.586 0 0 0-1.048 0l-1.401 2.822a.584.584 0 0 1-.44.318L6.5 4.916a.58.58 0 0 0-.324.991l2.267 2.197c.138.133.201.325.169.514l-.536 3.101a.584.584 0 0 0 .848.613l2.803-1.464a.588.588 0 0 1 .544 0l2.803 1.464a.584.584 0 0 0 .848-.613l-.536-3.101a.579.579 0 0 1 .168-.514l2.268-2.197a.58.58 0 0 0-.324-.99l-3.133-.453a.584.584 0 0 1-.44-.318l-1.402-2.822Z"
      fill={color}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15 15a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v2H4a1 1 0 0 0-1 1v5h18v-3a1 1 0 0 0-1-1h-5v-4ZM5 20a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm7-2a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm5 3a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
      fill={color}
    />
  </Svg>
);
export default Podium;
