import React from 'react';
import { Box } from '../../../primitives/box/box';
import { Card } from '../../../primitives/card/card';
import { CardHeader } from '../../../primitives/card/card-header/card-header';
import { CardContent } from '../../../primitives/card/card-content/card-content';
import { CardSummaryProps } from './card-summary.types';
import {
  getCardSummaryColors,
  hasValidButton,
  hasValidButtonAction,
  hasValidContent,
} from './card-summary.utils';
import { Button } from '../../buttons/button/button';

export const CardSummary = (props: CardSummaryProps) => {
  const {
    appearance = 'primary',
    header,
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
    buttonProps,
    accessibilityLabel,
  } = props;

  const { contentColors, headerColors, containerColors } = getCardSummaryColors(
    { appearance }
  );

  const hasContent = hasValidContent({ title, description });
  const hasButton = hasValidButton(buttonProps);
  const hasButtonAction = hasValidButtonAction(buttonProps);
  const isBusy = isLoading || isSkeleton;

  if (isSkeleton) {
    return (
      <Card
        backgroundColor="GREY_100"
        testID={testID}
        accessibilityRole="button"
        accessibilityLabel={accessibilityLabel || title}
        accessibilityState={{ busy: true }}
      >
        <Box
          height={24}
          width={24}
          backgroundColor={'GREY_200'}
          borderRadius={'md'}
        />
        <Box paddingTop={'md'} />
        <Box
          height={24}
          width={'100%'}
          backgroundColor={'GREY_200'}
          borderRadius={'md'}
        />
      </Card>
    );
  }

  return (
    <Card
      backgroundColor={containerColors.backgroundColor}
      pressedBackgroundColor={containerColors.pressBackgroundColor}
      testID={testID}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel || title}
      accessibilityState={{ busy: isBusy }}
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      disabled={isBusy}
    >
      <CardHeader
        colors={headerColors}
        header={header}
        iconName={isLoading ? 'Loader' : iconName}
        value={value}
        rightAction={rightAction}
      />
      {hasContent && (
        <Box paddingTop="md">
          <CardContent
            title={title}
            description={description}
            colors={contentColors}
          />
        </Box>
      )}
      {hasButton && (
        <Box paddingTop="md">
          <Button
            pointerEvents={hasButtonAction ? undefined : 'none'}
            appearance={appearance === 'neutral' ? 'secondary' : appearance}
            {...buttonProps}
          />
        </Box>
      )}
    </Card>
  );
};

export default CardSummary;
