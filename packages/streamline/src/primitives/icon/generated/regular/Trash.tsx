/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Trash = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.894 1.553A1 1 0 0 0 13 1h-2a1 1 0 0 0-.894.553l-.448.894A1 1 0 0 1 8.764 3H4a1 1 0 0 0 0 2h.11a1 1 0 0 1 .994.883l1.688 14.35A2 2 0 0 0 8.778 22h6.444a2 2 0 0 0 1.986-1.766l1.688-14.35A1 1 0 0 1 19.89 5H20a1 1 0 1 0 0-2h-4.764a1 1 0 0 1-.894-.553l-.448-.894ZM8.09 8.079a.997.997 0 0 1 1.986-.165l.834 10.007a.997.997 0 0 1-1.986.165L8.09 8.08ZM14.917 7a.997.997 0 0 1 .993 1.08l-.834 10.006a.997.997 0 1 1-1.986-.165l.834-10.007A.997.997 0 0 1 14.917 7Z"
      fill={color}
    />
  </Svg>
);
export default Trash;
