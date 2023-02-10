/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Storm = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.88 6.674a.5.5 0 0 1-.054.705C2.603 7.57 2.5 7.832 2.5 8c0 .113.05.26.216.434.168.177.436.36.805.523.737.328 1.79.543 2.979.543.685 0 1.327-.071 1.892-.196a.5.5 0 0 1 .216.976 9.85 9.85 0 0 1-2.108.22c-1.296 0-2.493-.232-3.385-.629-.445-.198-.837-.446-1.124-.748C1.702 8.82 1.5 8.44 1.5 8c0-.493.257-1.021.674-1.38a.5.5 0 0 1 .705.054ZM8 1c3.866 0 7 .746 7 1.667 0 .395-.313.687-.691 1.039C13.73 4.243 13 4.923 13 6.333c0 .667.167 1 .333 1.333.167.334.334.667.334 1.334 0 1.198-1.347 1.724-2.83 2.302C9.021 12.01 7 12.798 7 15c-.889-.333-2.667-1.333-2.667-2.667 0-.88.372-1.573.723-2.229.313-.586.61-1.141.61-1.77 0-.9-.942-1.53-1.98-2.222C2.414 5.262 1 4.318 1 2.667 1 1.747 4.134 1 8 1Zm0 2.5c3.314 0 6-.448 6-1s-2.686-1-6-1-6 .448-6 1 2.686 1 6 1Zm6.938 2.76a.5.5 0 0 1-.197.678C13.885 7.408 12.536 8 11 8c-.968 0-1.876-.13-2.643-.358a.5.5 0 1 1 .286-.958C9.306 6.881 10.117 7 11 7c1.291 0 2.465-.502 3.26-.938a.5.5 0 0 1 .678.197Z"
      fill={color}
    />
  </Svg>
);
export default Storm;
