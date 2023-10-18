import React from 'react';
import { Image, StyleSheet } from 'react-native';

import { usePress } from '../../../hooks/use-press.hook';
import { Box } from '../../../primitives/box/box';
import { Card } from '../../../primitives/card/card';
import { Text } from '../../../primitives/text/text';
import Spinner from '../../spinner/spinner';
import Tag from '../../tag/tag';
import { CardHighlightSkeleton } from './card-highlight-skeleton';
import { CardHighlightProps } from './card-highlight.types';
import { getCardHighlightColors } from './card-highlight.utils';

export function CardHighlight({
  appearance = 'primary',
  isSkeleton,
  isLoading,
  description,
  tag,
  title,
  media,
  onPress,
  testID,
  onPressIn,
  onPressOut,
  accessibilityLabel,
  isPublished = true,
}: CardHighlightProps) {
  const [handlePress, isResolving] = usePress({ onPress });

  const { backgroundColor, titleColor, descriptionColor } =
    getCardHighlightColors({ appearance });

  if (isSkeleton) {
    return <CardHighlightSkeleton title={title} testID={testID} />;
  }

  return (
    <Card
      testID={testID}
      backgroundColor={backgroundColor}
      borderRadius="lg"
      overflow="hidden"
      withPadding={false}
      onPress={handlePress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      accessibilityLabel={accessibilityLabel}
    >
      <Box padding="md">
        <Box flexDirection="row" justifyContent="space-between">
          {tag ? (
            <Box marginBottom="md">
              <Tag iconName={tag.iconName} text={tag.text} appearance="light" />
            </Box>
          ) : null}
          {isLoading || isResolving ? (
            <Spinner color="PURE_WHITE_1000" />
          ) : null}
        </Box>

        <Text variant="titleMediumBold" color={titleColor}>
          {title}
        </Text>
        {description ? (
          <Text variant="body" color={descriptionColor} marginTop="xxs">
            {description}
          </Text>
        ) : null}
      </Box>
      <Image
        source={media}
        style={{ flex: 1, height: 192 }}
        resizeMode="cover"
      />
      {!isPublished ? (
        <Box
          width={5}
          style={StyleSheet.absoluteFillObject}
          backgroundColor="BLACK"
        />
      ) : null}
    </Card>
  );
}

export default CardHighlight;
