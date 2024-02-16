/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Wheelchair = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M9.5 6a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM12.663 8.456c-1.065-.236-1.923-1.335-3.007-1.448a1.5 1.5 0 0 0-1.627 1.786l.84 4.196a2.5 2.5 0 0 0 2.45 2.01h3.063a.997.997 0 0 1 .986.836l.513 3.075A2.5 2.5 0 0 0 18.347 21H19.5a1.5 1.5 0 0 0 0-3h-.73l-.651-3.911A2.5 2.5 0 0 0 15.674 12h-3.125a1 1 0 0 1-.966-.744l-.002-.007a1.089 1.089 0 0 1-.012-.053l-.04-.196H15a1 1 0 0 0 .198-1.98l-2.535-.564Z"
      fill={color}
    />
    <Path
      d="m7.576 11.626-.407-2.03a7.002 7.002 0 1 0 8.255 10.83 3.49 3.49 0 0 1-.53-1.35l-.217-1.305A5.002 5.002 0 0 1 5 16c0-1.882 1.04-3.52 2.576-4.374Z"
      fill={color}
    />
  </Svg>
);
export default Wheelchair;
