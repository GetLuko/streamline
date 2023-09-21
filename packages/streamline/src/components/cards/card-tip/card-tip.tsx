import React from 'react';

import { Box } from '../../../primitives/box/box';
import { Card } from '../../../primitives/card/card';
import { Icon } from '../../../primitives/icon/icon';
import { MarkdownLink } from '../../../primitives/markdown/markdown-link';
import { CardTipProps } from './card-tip.types';
import { getCardTipColors } from './card-tip.utils';

export const CardTip = ({
  appearance = 'primary',
  description,
  iconName,
  animated = true,
  onLinkPress,
}: CardTipProps) => {
  const colors = getCardTipColors({ appearance });
  return (
    <Card
      backgroundColor={colors.backgroundColor}
      flexDirection="row"
      alignItems="center"
      animated={animated}
    >
      <Icon color={colors.iconColor} iconName={iconName} size="large" />
      <Box marginLeft="md" flex={1}>
        <MarkdownLink
          bodyColor={colors.descriptionColor}
          onLinkPress={onLinkPress}
        >
          {description}
        </MarkdownLink>
      </Box>
    </Card>
  );
};

export default CardTip;
