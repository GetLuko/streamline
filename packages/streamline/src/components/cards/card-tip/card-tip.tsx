import React from 'react';

import { Card } from '../../../primitives/card/card';
import { Icon } from '../../../primitives/icon/icon';
import { CardTipProps } from './card-tip.types';
import { getCardTipColors } from './card-tip.utils';
import { Box } from '../../../primitives/box/box';
import { MarkdownLink } from '../../../primitives/markdown/markdown-link';

export const CardTip = ({
  appearance = 'primary',
  description,
  iconName,
}: CardTipProps) => {
  const colors = getCardTipColors({ appearance });
  return (
    <Card
      backgroundColor={colors.backgroundColor}
      flexDirection="row"
      alignItems="center"
    >
      <Icon color={colors.iconColor} iconName={iconName} size="large" />
      <Box marginLeft="md">
        <MarkdownLink bodyColor={colors.descriptionColor}>
          {description}
        </MarkdownLink>
      </Box>
    </Card>
  );
};

export default CardTip;
