/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const UnorderedList = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M3.5 8a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM7.8 5c-.442 0-.8.448-.8 1v1c0 .552.358 1 .8 1h13.4c.442 0 .8-.448.8-1V6c0-.552-.358-1-.8-1H7.8ZM3.5 14a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM7.8 11c-.442 0-.8.448-.8 1v1c0 .552.358 1 .8 1h13.4c.442 0 .8-.448.8-1v-1c0-.552-.358-1-.8-1H7.8ZM5 18.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM7 18c0-.552.358-1 .8-1h13.4c.442 0 .8.448.8 1v1c0 .552-.358 1-.8 1H7.8c-.442 0-.8-.448-.8-1v-1Z"
      fill={color}
    />
  </Svg>
);
export default UnorderedList;
