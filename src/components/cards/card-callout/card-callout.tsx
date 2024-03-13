import React from 'react';

import { usePress } from '../../../hooks/use-press.hook';
import { Card } from '../../../primitives/card/card';
import { Text } from '../../../primitives/text/text';

import { CardCalloutProps } from './card-callout.types';
import { getCardCalloutColors } from './card-callout.utils';
import { CardCalloutSkeleton } from './components/card-callout-skeleton';
import Header from './components/header';

export const CardCallout = ({
  appearance = 'primary',
  description,
  dismissAction,
  header,
  iconName,
  isSkeleton,
  numberOfSkeletonLines,
  onLongPress,
  onPress,
  onPressIn,
  onPressOut,
}: CardCalloutProps) => {
  const [handlePress, isLoading] = usePress({ onPress });

  const colors = getCardCalloutColors({ appearance });

  if (isSkeleton) {
    return <CardCalloutSkeleton numberOfLines={numberOfSkeletonLines} />;
  }

  return (
    <Card
      backgroundColor={colors.backgroundColor}
      pressedBackgroundColor={colors.pressedColor}
      onLongPress={onLongPress}
      onPress={handlePress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
    >
      <Header
        colors={colors}
        dismissAction={dismissAction}
        hasAction={!!onPress}
        header={header}
        iconName={iconName}
        isLoading={isLoading}
      />
      <Text
        color={colors.descriptionColor}
        marginTop="md"
        variant="headlineBold"
      >
        {description}
      </Text>
    </Card>
  );
};

export default CardCallout;
