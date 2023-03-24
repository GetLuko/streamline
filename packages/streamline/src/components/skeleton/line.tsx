import React from 'react';
import { AnimatedBox } from '../../primitives/animated-box/animated-box';
import { HEIGHT } from './skeleton.constants';

type LineProps = React.ComponentProps<typeof AnimatedBox>;

export const Line = ({ marginTop }: LineProps) => (
  <AnimatedBox
    backgroundColor="GREY_150"
    borderRadius="md"
    flex={1}
    height={HEIGHT}
    marginTop={marginTop}
  />
);
