import React from 'react';

import { Box } from '../../../../primitives/box/box';
import { Text } from '../../../../primitives/text/text';
import { ListItemProps } from '../list-item.types';

export const CenterContent = ({
  description,
  header,
  isDisabled,
  title,
}: Pick<ListItemProps, 'description' | 'header' | 'isDisabled' | 'title'>) => {
  const mainTextColor = isDisabled ? 'GREY_500' : 'GREY_1000';
  const secondaryTextColor = isDisabled ? 'GREY_500' : 'GREY_700';

  return (
    <Box flex={1} marginRight="xs">
      {header ? (
        <Text color={secondaryTextColor} variant="subBody">
          {header}
        </Text>
      ) : null}
      <Text color={mainTextColor} variant="body">
        {title}
      </Text>
      {description ? (
        <Text color={secondaryTextColor} variant="subBody">
          {description}
        </Text>
      ) : null}
    </Box>
  );
};
