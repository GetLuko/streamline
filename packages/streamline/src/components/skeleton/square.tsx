import React from 'react';
import { AnimatedBox } from '../../primitives/animated-box/animated-box';
import { HEIGHT } from './skeleton.constants';

export const Square = () => (
  <AnimatedBox
    backgroundColor="GREY_150"
    borderRadius="md"
    height={HEIGHT}
    width={HEIGHT}
  />
);
