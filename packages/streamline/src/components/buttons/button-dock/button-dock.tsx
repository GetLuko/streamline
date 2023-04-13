import React from 'react';
import { Button } from '../button/button';
import { Box } from '../../../primitives/box/box';
import { ButtonDockProps } from './button-dock.type';

export const ButtonDock = ({
  primaryButton,
  secondaryButton,
  isFloating = false,
}: ButtonDockProps) => {
  return (
    <Box padding={'md'}>
      <Button {...primaryButton} isFloating={isFloating} />
      {secondaryButton && (
        <Box marginTop={'xs'}>
          <Button {...secondaryButton} isFloating={isFloating} />
        </Box>
      )}
    </Box>
  );
};

export default ButtonDock;
