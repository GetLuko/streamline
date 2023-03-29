import React from 'react';

import { Card } from '../../../primitives/card/card';
import { Icon } from '../../../primitives/icon/icon';
import { Text } from '../../../primitives/text/text';
import { CardTipProps } from './card-tip.types';
import { getCardTipColors } from './card-tip.utils';

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
      <Text color={colors.descriptionColor} marginLeft="md" variant="body">
        {description}
      </Text>
    </Card>
  );
};

export default CardTip;
