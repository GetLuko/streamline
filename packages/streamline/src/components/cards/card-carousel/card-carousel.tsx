import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Image, ImageBackground, StyleSheet } from 'react-native';

import { usePress } from '../../../hooks/use-press.hook';
import { Box } from '../../../primitives/box/box';
import { Card } from '../../../primitives/card/card';
import { Icon } from '../../../primitives/icon/icon';
import { Text } from '../../../primitives/text/text';
import ButtonIcon from '../../buttons/button-icon/button-icon';
import Tag from '../../tag/tag';
import { CardCarouselSkeleton } from './card-carousel-skeleton';
import {
  LARGE_CARD_HEIGHT,
  LINEAR_BACKGROUND,
  LINEAR_END_X,
  LINEAR_START_X,
  SMALL_CARD_SIZE,
} from './card-carousel.constants';
import { CardCarouselProps } from './card-carousel.types';
import { getCardCarouselBackgroundColors } from './card-carousel.utils';

export const CardCarousel = (props: CardCarouselProps) => {
  const {
    size,
    title,
    description,
    onPress,
    onPressIn,
    onPressOut,
    isSkeleton,
    accessibilityLabel,
    isLoading,
    testID,
    media,
    onClose,
    appearance,
  } = props;

  const { backgroundColor, pressedBackgroundColor } =
    getCardCarouselBackgroundColors({ appearance });

  const isSmall = size === 'small';
  const cardHeight = isSmall ? SMALL_CARD_SIZE : LARGE_CARD_HEIGHT;
  const cardWidth = isSmall ? SMALL_CARD_SIZE : '100%';

  const [handlePress, isResolving] = usePress({ onPress: onPress });

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
      backgroundColor={backgroundColor}
      pressedBackgroundColor={pressedBackgroundColor}
    >
      {media ? (
        <ImageBackground source={media} style={StyleSheet.absoluteFillObject}>
          <LinearGradient
            colors={LINEAR_BACKGROUND}
            start={{ x: LINEAR_START_X, y: 0 }}
            end={{ x: LINEAR_END_X, y: 1 }}
            style={StyleSheet.absoluteFillObject}
          />
        </ImageBackground>
      ) : null}

      <Box
        flexDirection="row-reverse"
        justifyContent="space-between"
        alignItems="center"
      >
        <ButtonIcon
          testID={`${testID}-close-button`}
          isLoading={isLoading || isResolving}
          iconName="Cross"
          accessibilityLabel="close"
          appearance="light"
          onPress={onClose}
          withContainer
        />

        {size === 'large' && props.tag ? (
          <Tag
            text={props.tag.text}
            iconName={props.tag.iconName}
            appearance="dark"
          />
        ) : null}

        {size === 'small' && props.iconName ? (
          <Icon iconName={props.iconName} color="PURE_WHITE_1000" />
        ) : null}
      </Box>

      <Box>
        <Text
          variant={isSmall ? 'bodyBold' : 'headlineBold'}
          color="PURE_WHITE_1000"
        >
          {title}
        </Text>

        {description ? (
          <Text
            variant={isSmall ? 'subBody' : 'body'}
            color="PURE_WHITE_1000"
            opacity={0.8}
            numberOfLines={2}
          >
            {description}
          </Text>
        ) : null}
      </Box>
    </Card>
  );
};

export default CardCarousel;
