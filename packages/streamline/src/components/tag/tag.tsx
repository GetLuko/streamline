import React from 'react';

import { Text } from '../../primitives/text/text';
import { Box } from '../../primitives/box/box';
import { Icon } from '../../primitives/icon/icon';
import { TagProps } from './tag.types';
import { getTagColors } from './tag.utils';

export const Tag = ({
  appearance = 'primary',
  iconName,
  isSmall = false,
  text,
}: TagProps) => {
  const iconSize = isSmall ? 'small' : 'regular';
  const textVariant = isSmall ? 'captionBold' : 'subBodyBold';
  const colors = getTagColors({ appearance });

  return (
    <Box
      backgroundColor={colors.backgroundColor}
      borderRadius="round"
      alignItems="center"
      flexDirection="row"
      paddingHorizontal="xs"
      paddingVertical="xxs"
    >
      <Icon color={colors.iconColor} iconName={iconName} size={iconSize} />
      <Text color={colors.textColor} marginLeft="xxs" variant={textVariant}>
        {text}
      </Text>
    </Box>
  );
};

export default Tag;
