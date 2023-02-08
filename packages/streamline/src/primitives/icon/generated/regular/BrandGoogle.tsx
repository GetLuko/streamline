/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const BrandGoogle = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M22.785 12.253c0-.748-.06-1.5-.19-2.235H12.22v4.236h5.941a5.091 5.091 0 0 1-2.199 3.342v2.748h3.545c2.081-1.915 3.278-4.745 3.278-8.091Z"
      fill="#4285F4"
    />
    <Path
      d="M12.22 23c2.966 0 5.468-.974 7.291-2.655l-3.545-2.749c-.986.671-2.259 1.051-3.742 1.051-2.87 0-5.303-1.936-6.176-4.539H2.39v2.833A11.001 11.001 0 0 0 12.22 23Z"
      fill="#34A853"
    />
    <Path
      d="M6.044 14.108a6.589 6.589 0 0 1 0-4.211V7.063H2.39a11.009 11.009 0 0 0 0 9.879l3.654-2.834Z"
      fill="#FBBC04"
    />
    <Path
      d="M12.22 5.354a5.978 5.978 0 0 1 4.22 1.649l3.14-3.14A10.572 10.572 0 0 0 12.22 1a10.997 10.997 0 0 0-9.83 6.062l3.654 2.834C6.913 7.29 9.35 5.354 12.22 5.354Z"
      fill="#EA4335"
    />
  </Svg>
);
export default BrandGoogle;
