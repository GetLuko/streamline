import React from 'react';

import { Box } from '../../../../primitives/box/box';
import { Icon } from '../../../../primitives/icon/icon';
import Spinner from '../../../spinner/spinner';
import { ListItemProps } from '../list-item.types';

export const LeftContent = ({
  iconName,
  isDisabled,
  isLoading,
}: Pick<ListItemProps, 'iconName' | 'isDisabled'> & { isLoading: boolean }) => {
  if (!iconName) {
    return null;
  }

  const color = isDisabled ? 'GREY_500' : 'BLUKO_500';

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
