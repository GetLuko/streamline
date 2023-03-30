import React from 'react';
import { Box } from '../../../primitives/box/box';
import { Card } from '../../../primitives/card/card';
import { CardHeader } from '../../../primitives/card/card-header/card-header';
import { CardContent } from '../../../primitives/card/card-content/card-content';
import { CardSummaryProps } from './card-summary.types';
import {
  getCardSummaryColors,
  hasValidButton,
  hasValidContent,
} from './card-summary.utils';
import { Button } from '../../buttons/button/button';

export const CardSummary = (props: CardSummaryProps) => {
  const {
    appearance = 'neutral',
    header,
    iconName,
    value,
    rightAction,
    title,
    description,
    buttonLabel,
    testID,
  } = props;

  const { contentColors, headerColors, containerColors } = getCardSummaryColors(
    { appearance }
  );

  const hasContent = hasValidContent({ title, description });
  const hasButton = hasValidButton(buttonLabel);

  return (
    <Card
      backgroundColor={containerColors.backgroundColor}
      // testID={testID}
      // accessibilityRole="button"
      // accessibilityLabel="summary card"
      // accessibilityState={{ busy: false }}
    >
      <CardHeader
        colors={headerColors}
        header={header}
        iconName={iconName}
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
            text="Label"
            appearance={appearance === 'neutral' ? 'secondary' : 'primary'}
          />
        </Box>
      )}
    </Card>
  );
};

export default CardSummary;
