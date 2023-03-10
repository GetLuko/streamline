/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Cog = ({ color = '#2D50E6', ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.853 1.585A.7.7 0 0 1 7.543 1h.914a.7.7 0 0 1 .69.585l.086.511a.759.759 0 0 0 .522.585c.264.087.52.193.765.317.251.126.554.12.783-.044l.422-.302a.7.7 0 0 1 .902.075l.646.646a.7.7 0 0 1 .075.902l-.302.422a.758.758 0 0 0-.044.783c.124.245.23.5.317.765a.759.759 0 0 0 .585.522l.511.086a.7.7 0 0 1 .585.69v.914a.7.7 0 0 1-.585.69l-.511.086a.759.759 0 0 0-.585.522c-.087.264-.193.52-.317.765a.758.758 0 0 0 .044.783l.302.422a.7.7 0 0 1-.075.902l-.646.646a.7.7 0 0 1-.902.075l-.422-.302a.759.759 0 0 0-.783-.044c-.245.124-.5.23-.765.317a.759.759 0 0 0-.522.585l-.086.511a.7.7 0 0 1-.69.585h-.914a.7.7 0 0 1-.69-.585l-.086-.511a.759.759 0 0 0-.522-.585 5.555 5.555 0 0 1-.765-.317.758.758 0 0 0-.783.044l-.422.302a.7.7 0 0 1-.902-.075l-.646-.646a.7.7 0 0 1-.075-.902l.302-.422a.759.759 0 0 0 .044-.783c-.124-.245-.23-.5-.317-.765a.759.759 0 0 0-.585-.522l-.511-.086A.7.7 0 0 1 1 8.457v-.914a.7.7 0 0 1 .585-.69l.511-.086a.759.759 0 0 0 .585-.522c.087-.264.193-.52.317-.765a.758.758 0 0 0-.044-.783l-.302-.422a.7.7 0 0 1 .075-.902l.646-.646a.7.7 0 0 1 .902-.075l.422.302c.23.163.532.17.783.044.245-.124.5-.23.765-.317a.759.759 0 0 0 .522-.585l.086-.511ZM8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
      fill={color}
    />
  </Svg>
);
export default Cog;
