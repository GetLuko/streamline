/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Size = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="M8.262 1.074a.498.498 0 0 0-.524 0l-1.93 1.14a.5.5 0 0 0 .509.862l1.183-.7V3.5a.5.5 0 0 0 1 0V2.376l1.184.7a.5.5 0 1 0 .508-.861l-1.93-1.141ZM4.772 3.407a.5.5 0 0 1-.176.685l-1.113.658 1.114.658a.5.5 0 1 1-.51.861L3 5.626V7a.5.5 0 0 1-1 0V4.758a.498.498 0 0 1 .07-.262v-.002a.498.498 0 0 1 .184-.18l1.833-1.083a.5.5 0 0 1 .685.176ZM11.23 3.41a.5.5 0 0 1 .686-.177l1.83 1.082c.073.04.136.1.182.176l.005.009c.047.081.069.17.067.258V7a.5.5 0 0 1-1 0V5.626l-1.086.642a.5.5 0 0 1-.509-.86l1.112-.658-1.11-.656a.5.5 0 0 1-.176-.685ZM2.5 8.5A.5.5 0 0 1 3 9v1.374l1.087-.642a.5.5 0 0 1 .508.86l-1.112.658 1.116.66a.5.5 0 1 1-.509.86l-1.836-1.085A.498.498 0 0 1 2 11.242V9a.5.5 0 0 1 .5-.5ZM13.5 8.5a.5.5 0 0 1 .5.5v2.242a.498.498 0 0 1-.254.443l-1.835 1.085a.5.5 0 1 1-.51-.86l1.116-.66-1.11-.656a.5.5 0 0 1 .508-.861l1.085.64V9a.5.5 0 0 1 .5-.5ZM10.37 13.1a.5.5 0 0 1-.177.685l-1.939 1.146a.5.5 0 0 1-.508 0l-1.937-1.145a.5.5 0 0 1 .509-.86l1.182.698V12.5a.5.5 0 0 1 1 0v1.124l1.184-.7a.5.5 0 0 1 .685.176ZM5.628 6.598a.5.5 0 0 1 .684-.176L8 7.419l1.688-.997a.5.5 0 0 1 .508.86L8.5 8.286V10a.5.5 0 0 1-1 0V8.285L5.804 7.283a.5.5 0 0 1-.176-.685Z"
      fill={color}
    />
  </Svg>
);
export default Size;
