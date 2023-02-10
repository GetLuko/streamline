/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Edit = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.294 13.367a4.44 4.44 0 0 1-1.475.826c-.554.184-1.245.412-1.82.6l-.075.025-.028.01-.064.02-.415.136a.318.318 0 0 1-.4-.401l.135-.415.055-.167c.188-.575.416-1.266.6-1.82a4.456 4.456 0 0 1 1.074-1.745l8.86-8.877a1.91 1.91 0 0 1 2.7 2.7l-8.877 8.86c-.087.086-.177.17-.27.248Zm5.565-9.508L12.14 5.14l1.593-1.59a.91.91 0 0 0-1.286-1.285l-1.59 1.593Z"
      fill={color}
    />
  </Svg>
);
export default Edit;
