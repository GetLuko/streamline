import React from 'react';
import { Text } from '../../primitives/text/text';
import { getCaptionStyle } from './caption.utils';
import { CaptionProps } from './caption.types';

export const Caption = ({ appearance, text }: CaptionProps) => {
  const captionStyle = getCaptionStyle(appearance);
  return (
    <Text {...captionStyle} variant="caption">
      {text}
    </Text>
  );
};
