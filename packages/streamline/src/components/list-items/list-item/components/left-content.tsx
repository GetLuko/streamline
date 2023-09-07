import React from 'react';

import { Box } from '../../../../primitives/box/box';
import { Icon } from '../../../../primitives/icon/icon';
import { ColorTheme } from '../../../../theme';
import Spinner from '../../../spinner/spinner';
import { ListItemProps } from '../list-item.types';

export const LeftContent = ({
  iconName,
  isDisabled,
  isLoading,
  color,
}: Pick<ListItemProps, 'iconName' | 'isDisabled'> & {
  color: ColorTheme;
  isLoading: boolean;
}) => {
  if (!iconName) {
    return null;
  }

  return (
    <Box marginRight="md">
      {isLoading ? (
        <Spinner color={color} size="regular" />
      ) : (
        <Icon color={color} iconName={iconName} size="large" />
      )}
    </Box>
  );
};
