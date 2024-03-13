import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Image, StyleSheet } from 'react-native';

import { usePress } from '../../../hooks/use-press.hook';
import { Box } from '../../../primitives/box/box';
import { Card } from '../../../primitives/card/card';
import { Text } from '../../../primitives/text/text';

import { CardCarouselSkeleton } from './card-carousel-skeleton';
import {
  LARGE_CARD_HEIGHT,
  LINEAR_BACKGROUND,
  LINEAR_END_X,
  LINEAR_START_X,
  SMALL_CARD_SIZE,
} from './card-carousel.constants';
import { CardCarouselProps } from './card-carousel.types';
import { getCardCarouselColors } from './card-carousel.utils';
import TopLeftContent from './components/top-left-content';
import TopRightContent from './components/top-right-content';

export const CardCarousel = (props: CardCarouselProps) => {
  const {
    size,
    title,
    description,
    dismissAction,
    onPress,
    onPressIn,
    onPressOut,
    isSkeleton,
    accessibilityLabel,
    isLoading,
    testID,
    media,
    appearance = 'primary',
    isPreview = false,
  } = props;

  const isSmall = size === 'small';
  const cardHeight = isSmall ? SMALL_CARD_SIZE : LARGE_CARD_HEIGHT;
  const cardWidth = isSmall ? SMALL_CARD_SIZE : '100%';
  const { backgroundColor, pressedColor } = getCardCarouselColors({
    appearance,
  });

  const [handlePress, isResolving] = usePress({ onPress });

  const isBusy = isResolving || isLoading;

  if (isSkeleton) return <CardCarouselSkeleton size={size} testID={testID} />;

  return (
    <Card
      height={cardHeight}
      width={cardWidth}
      flexDirection="column"
      justifyContent="space-between"
      overflow="hidden"
      onPress={handlePress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      testID={testID}
      accessibilityLabel={accessibilityLabel}
      pressedBackgroundColor={pressedColor}
      backgroundColor={backgroundColor}
    >
      {media ? (
        <>
          <Image source={media} style={StyleSheet.absoluteFillObject} />
          <LinearGradient
            colors={LINEAR_BACKGROUND}
            start={{ x: LINEAR_START_X, y: 0 }}
            end={{ x: LINEAR_END_X, y: 1 }}
            style={StyleSheet.absoluteFillObject}
          />
        </>
      ) : null}
      {isPreview ? (
        <Box
          width={5}
          style={StyleSheet.absoluteFillObject}
          backgroundColor="BLACK"
        />
      ) : null}
      <Box
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <TopLeftContent {...props} />

        <TopRightContent
          dismissAction={dismissAction}
          isLoading={isBusy}
          testID={testID}
        />
      </Box>

      <Box flex={1} justifyContent="flex-end" paddingTop="xs">
        <Text
          variant={isSmall ? 'bodyBold' : 'headlineBold'}
          color="PURE_WHITE_1000"
          numberOfLines={3}
        >
          {title}
        </Text>

        {description ? (
          <Box flexShrink={1}>
            <Text
              variant={isSmall ? 'subBody' : 'body'}
              color="PURE_WHITE_1000"
              opacity={0.8}
              numberOfLines={3}
            >
              {description}
            </Text>
          </Box>
        ) : null}
      </Box>
    </Card>
  );
};

export default CardCarousel;
