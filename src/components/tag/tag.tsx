import React from 'react';

import { Box } from '../../primitives/box/box';
import { Icon } from '../../primitives/icon/icon';
import { Text } from '../../primitives/text/text';

import { TagProps } from './tag.types';
import { getTagColors } from './tag.utils';

export const Tag = ({
  accessibilityLabel,
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
      accessibilityLabel={accessibilityLabel ?? text}
      alignItems="center"
      alignSelf="flex-start"
      flexDirection="row"
      justifyContent="center"
      paddingHorizontal="xs"
      paddingVertical="xxs"
    >
      <Box
        backgroundColor={colors.backgroundColor}
        borderRadius="round"
        opacity={colors.backgroundOpacity}
        position="absolute"
        top={0}
        bottom={0}
        right={0}
        left={0}
      />
      {iconName ? (
        <Icon color={colors.iconColor} iconName={iconName} size={iconSize} />
      ) : null}
      {text ? (
        <Text
          color={colors.textColor}
          marginLeft={iconName ? 'xxs' : undefined}
          variant={textVariant}
        >
          {text}
        </Text>
      ) : null}
    </Box>
  );
};

export default Tag;
