import React from 'react';

import { usePress } from '../../../hooks/use-press.hook';
import { Box } from '../../../primitives/box/box';
import { Card } from '../../../primitives/card/card';
import { CardContent } from '../../../primitives/card/card-content/card-content';

import { CardOptionSkeleton } from './card-option-skeleton';
import { CardOptionProps } from './card-option.types';
import { Content } from './components/content';
import { Footer } from './components/footer';
import { Header } from './components/header';

export const CardOption = ({
  accessibilityLabel,
  description,
  header,
  iconName,
  isBusy,
  isLoading,
  isSkeleton,
  onPress,
  onPressIn,
  onPressOut,
  rightOption,
  switchOption,
  testID,
  title,
  value,
}: CardOptionProps) => {
  const [handlePress, isResolving] = usePress({ onPress });

  const isInnerBusy = isLoading || isSkeleton || isBusy || isResolving;

  if (isSkeleton) {
    return (
      <CardOptionSkeleton
        title={title}
        testID={testID}
        accessibilityLabel={accessibilityLabel}
      />
    );
  }

  return (
    <Card
      backgroundColor="PURE_WHITE_1000"
      pressedBackgroundColor="GREY_25"
      testID={testID}
      accessibilityRole={onPress ? 'button' : 'summary'}
      accessibilityLabel={accessibilityLabel || title}
      accessibilityState={{ busy: isInnerBusy }}
      onPress={handlePress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      disabled={isInnerBusy}
    >
      <Header
        hasOnPress={!!onPress}
        iconName={iconName}
        isLoading={isLoading || isResolving}
        rightOption={rightOption}
        title={header}
        value={value}
      />
      <Content title={title} description={description} />
      <Footer switchOption={switchOption} />
    </Card>
  );
};

export default CardOption;
