import React from 'react';

import { usePress } from '../../../hooks/use-press.hook';
import { Box } from '../../../primitives/box/box';
import { Card } from '../../../primitives/card/card';
import { CardContent } from '../../../primitives/card/card-content/card-content';
import { CardHeader } from '../../../primitives/card/card-header/card-header';
import { Button } from '../../buttons/button/button';
import Tag from '../../tag/tag';

import { CardSummarySkeleton } from './card-summary-skeleton';
import { CardSummaryProps } from './card-summary.types';
import {
  getCardSummaryColors,
  hasValidButtonAction,
  hasValidContent,
} from './card-summary.utils';

export const CardSummary = (props: CardSummaryProps) => {
  const {
    appearance = 'primary',
    header,
    subHeader,
    iconName,
    value,
    rightAction,
    title,
    description,
    testID,
    isLoading,
    onPress,
    onPressIn,
    onPressOut,
    isSkeleton,
    footer,
    accessibilityLabel,
    isBusy,
  } = props;

  const { contentColors, headerColors, containerColors } = getCardSummaryColors(
    { appearance }
  );

  const hasContent = hasValidContent({ title, description });
  const hasButton = footer?.type === 'button';
  const hasTag = footer?.type === 'tag';
  const hasButtonAction = hasValidButtonAction(footer);

  const [handlePress, isResolving] = usePress({ onPress: onPress });

  const [handleButtonPress, isButtonResolving] = usePress({
    onPress: hasButton ? footer?.onPress : undefined,
  });

  const isInnerBusy =
    isLoading || isSkeleton || isButtonResolving || isBusy || isResolving;

  if (isSkeleton) {
    return (
      <CardSummarySkeleton
        title={title}
        testID={testID}
        accessibilityLabel={accessibilityLabel}
      />
    );
  }

  return (
    <Card
      backgroundColor={containerColors.backgroundColor}
      pressedBackgroundColor={containerColors.pressBackgroundColor}
      testID={testID}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel || title}
      accessibilityState={{ busy: isInnerBusy }}
      onPress={handlePress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      disabled={isInnerBusy}
    >
      <CardHeader
        colors={headerColors}
        title={header}
        subtitle={subHeader}
        isLoading={isLoading || isResolving}
        iconName={iconName}
        value={value}
        rightAction={rightAction}
      />
      {hasContent ? (
        <Box paddingTop="md">
          <CardContent
            title={title}
            description={description}
            colors={contentColors}
          />
        </Box>
      ) : null}
      {hasButton ? (
        <Box paddingTop="md">
          <Button
            pointerEvents={hasButtonAction ? undefined : 'none'}
            appearance={appearance === 'neutral' ? 'secondary' : appearance}
            {...footer}
            onPress={handleButtonPress}
            isBusy={isInnerBusy}
            isLoading={isButtonResolving}
          />
        </Box>
      ) : null}
      {hasTag ? (
        <Box paddingTop="md">
          <Tag {...footer} />
        </Box>
      ) : null}
    </Card>
  );
};

export default CardSummary;
