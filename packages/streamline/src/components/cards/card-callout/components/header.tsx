import React from 'react';

import { Box } from '../../../../primitives/box/box';
import { Icon } from '../../../../primitives/icon/icon';
import { Text } from '../../../../primitives/text/text';
import { HeaderProps } from '../card-callout.types';
import { HeaderAction } from './header-action';

export const Header = ({
  colors,
  dismissAction,
  hasAction,
  header,
  iconName,
}: HeaderProps) => {
  const showAction = hasAction || dismissAction;
  return (
    <Box alignItems="center" flexDirection="row">
      <Icon color={colors.iconColor} iconName={iconName} size="regular" />
      <Box flex={1}>
        <Text color={colors.headerColor} marginLeft="md" variant="body">
          {header}
        </Text>
      </Box>
      {showAction ? (
        <HeaderAction
          color={colors.clickIconColor}
          dismissAction={dismissAction}
        />
      ) : null}
    </Box>
  );
};

export default Header;
