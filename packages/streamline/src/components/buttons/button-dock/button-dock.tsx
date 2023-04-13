import React from 'react';
import { Button } from '../button/button';
import { Box } from '../../../primitives/box/box';
import { ButtonDockProps } from './button-dock.type';

export const ButtonDock = ({
  primary,
  secondary,
  isFloating = false,
}: ButtonDockProps) => {
  return (
    <Box padding={'md'}>
      <Button {...primary} isFloating={isFloating} />
      {secondary && (
        <Box marginTop={'xs'}>
          <Button {...secondary} isFloating={isFloating} />
        </Box>
      )}
    </Box>
  );
};

export default ButtonDock;
