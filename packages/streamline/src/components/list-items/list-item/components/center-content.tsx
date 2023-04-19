import React from 'react';

import { Box } from '../../../../primitives/box/box';
import { Text } from '../../../../primitives/text/text';
import { ListItemProps } from '../list-item.types';

export const CenterContent = ({
  description,
  header,
  title,
}: Pick<ListItemProps, 'description' | 'header' | 'title'>) => {
  return (
    <Box flex={1} marginRight="xs">
      {header ? (
        <Text color="GREY_700" variant="subBody">
          {header}
        </Text>
      ) : null}
      <Text color="GREY_1000" variant="body">
        {title}
      </Text>
      {description ? (
        <Text color="GREY_700" variant="subBody">
          {description}
        </Text>
      ) : null}
    </Box>
  );
};
