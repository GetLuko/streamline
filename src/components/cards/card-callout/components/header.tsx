import React from 'react';

import { HeaderAction } from './header-action';
import { Box } from '../../../../primitives/box/box';
import { Icon } from '../../../../primitives/icon/icon';
import { Text } from '../../../../primitives/text/text';
import { HeaderProps } from '../card-callout.types';

export const Header = ({
  colors,
  dismissAction,
  hasAction,
  header,
  iconName,
  isLoading,
}: HeaderProps) => {
  const showAction = hasAction || dismissAction;
  return (
    <Box alignItems="center" flexDirection="row">
      <Icon color={colors.iconColor} iconName={iconName} size="large" />
      <Box flex={1}>
        <Text color={colors.headerColor} marginLeft="md" variant="body">
          {header}
        </Text>
      </Box>
      {showAction ? (
        <HeaderAction
          color={colors.clickIconColor}
          dismissAction={dismissAction}
          isLoading={isLoading}
        />
      ) : null}
    </Box>
  );
};

export default Header;
