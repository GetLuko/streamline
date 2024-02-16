/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Webhook = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.5 3.5c0 .566-.188 1.088-.505 1.507l1.732 3.079a3.472 3.472 0 0 0-1.743.98L8.252 5.988A2.5 2.5 0 1 1 10.5 3.5Zm-2 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM5.966 6.349a3.491 3.491 0 0 0 1.26.565l-1.731 3.08a2.5 2.5 0 1 1-1.743-.98l1.732-3.08a3.52 3.52 0 0 0 .482.415ZM3.5 12a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM6.964 12a3.53 3.53 0 0 0-.109-1.5h3.353a2.5 2.5 0 1 1 0 2H6.855a3.48 3.48 0 0 0 .11-.5ZM13 11.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"
      fill={color}
    />
  </Svg>
);
export default Webhook;
