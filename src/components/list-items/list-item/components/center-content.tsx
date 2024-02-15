import React from 'react';

import { Box } from '../../../../primitives/box/box';
import { Text } from '../../../../primitives/text/text';
import { ColorTheme } from '../../../../theme';
import { ListItemProps } from '../list-item.types';

export const CenterContent = ({
  description,
  header,
  title,
  secondaryTextColor,
  mainTextColor,
}: Pick<ListItemProps, 'description' | 'header' | 'title'> & {
  secondaryTextColor: ColorTheme;
  mainTextColor: ColorTheme;
}) => {
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
