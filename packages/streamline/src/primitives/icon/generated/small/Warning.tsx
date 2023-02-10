/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Warning = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.702 9.696a2.398 2.398 0 0 1 0-3.392l4.602-4.602a2.398 2.398 0 0 1 3.392 0l4.602 4.602a2.398 2.398 0 0 1 0 3.392l-4.602 4.602a2.398 2.398 0 0 1-3.392 0L1.702 9.696Zm6.98-.87c-.017.439-.251.694-.678.694-.43 0-.66-.255-.673-.694L7.25 4.92a2.627 2.627 0 0 1-.008-.167c0-.473.301-.753.761-.753.464 0 .757.28.757.753l-.002.074-.002.093-.076 3.906Zm.188 2.342c0 .464-.39.832-.866.832-.48 0-.874-.368-.874-.832 0-.464.393-.837.874-.837.477 0 .866.373.866.837Z"
      fill={color}
    />
  </Svg>
);
export default Warning;
