import React, { useState } from 'react';

import { Card } from '../../../primitives/card/card';
import { Text } from '../../../primitives/text/text';
import { ColorTheme } from '../../../theme';
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
  onPress,
  onPressIn,
  onPressOut,
  ...rest
}: CardCalloutProps) => {
  const colors = getCardCalloutColors({ appearance });

  const [backgroundColor, setBackgroundColor] = useState<ColorTheme>(
    colors.backgroundColor
  );

  const innerOnPressIn = () => {
    setBackgroundColor(colors.pressedColor);
    return onPressIn?.();
  };

  const innerOnPressOut = () => {
    setBackgroundColor(colors.backgroundColor);
    return onPressOut?.();
  };

  if (isSkeleton) {
    return <CardCalloutSkeleton numberOfLines={numberOfSkeletonLines} />;
  }

  return (
    <Card
      backgroundColor={backgroundColor}
      onPress={onPress}
      onPressIn={innerOnPressIn}
      onPressOut={innerOnPressOut}
      {...rest}
    >
      <Header
        colors={colors}
        dismissAction={dismissAction}
        hasAction={!!onPress}
        header={header}
        iconName={iconName}
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
