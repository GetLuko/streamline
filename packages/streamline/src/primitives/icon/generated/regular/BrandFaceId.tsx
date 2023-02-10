/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const BrandFaceId = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.707 15.965a.945.945 0 0 1 1.29 1.38C14.887 18.38 13.54 18.904 12 18.904s-2.888-.523-3.996-1.557a.945.945 0 0 1 1.289-1.381c.753.703 1.64 1.05 2.707 1.05 1.068 0 1.954-.347 2.707-1.05ZM2.864 4.843V7.21a.932.932 0 1 1-1.864 0V4.843A3.806 3.806 0 0 1 4.843 1H7.21a.932.932 0 1 1 0 1.864H4.843c-1.123 0-1.98.856-1.98 1.98ZM21.136 7.21V4.843c0-1.123-.856-1.98-1.98-1.98h-2.364a.932.932 0 1 1 0-1.863h2.365A3.806 3.806 0 0 1 23 4.843V7.21a.932.932 0 1 1-1.864 0ZM2.864 16.79v2.366c0 1.123.856 1.98 1.98 1.98h2.365a.932.932 0 0 1 0 1.863H4.843A3.806 3.806 0 0 1 1 19.157V16.79a.932.932 0 1 1 1.864 0Zm18.272 2.366V16.79a.932.932 0 1 1 1.864 0v2.366A3.806 3.806 0 0 1 19.157 23H16.79a.932.932 0 1 1 0-1.864h2.366c1.123 0 1.98-.856 1.98-1.98ZM6.773 10.92V9.403c0-.502.385-.955.916-.955s.917.453.917.955v1.517c0 .502-.386.955-.917.955-.53 0-.916-.453-.916-.955Zm8.752 0V9.403c0-.502.385-.955.916-.955s.917.453.917.955v1.517c0 .502-.386.955-.917.955-.53 0-.916-.453-.916-.955Zm-3.911 2.37V9.393a.945.945 0 0 1 1.89 0v3.91c0 1.082-.797 1.876-1.878 1.876h-.37a.945.945 0 0 1 0-1.89h.358Z"
      fill={color}
    />
  </Svg>
);
export default BrandFaceId;