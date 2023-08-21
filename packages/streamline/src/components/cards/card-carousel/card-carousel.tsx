import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Image, StyleSheet } from 'react-native';

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
  LINEAR_END_X,
  LINEAR_START_X,
  SMALL_CARD_SIZE,
} from './card-carousel.constants';
import { CardCarouselProps } from './card-carousel.types';

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
  } = props;

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
    >
      {media ? (
        <Image source={media} style={StyleSheet.absoluteFillObject} />
      ) : null}

      <LinearGradient
        colors={['rgba(0, 0, 0, 0.00)', 'rgba(0, 0, 0, 0.80)']}
        start={{ x: LINEAR_START_X, y: 0 }}
        end={{ x: LINEAR_END_X, y: 1 }}
        style={StyleSheet.absoluteFillObject}
      />
      <Box
        flexDirection="row-reverse"
        justifyContent="space-between"
        alignItems="center"
      >
        <ButtonIcon
          testID={
            isLoading || isResolving ? `${testID}_spinner` : `${testID}_close`
          }
          isLoading={isLoading || isResolving}
          iconName="Cross"
          accessibilityLabel="close"
          appearance="light"
          onPress={onClose}
        />

        {size === 'large' && props.tag ? (
          <Tag
            text={props.tag.text}
            iconName={props.tag.iconName}
            appearance="dark"
          />
        ) : null}

        {size === 'small' && props.iconName ? (
          <Box justifyContent="center" alignItems="center">
            <Icon iconName={props.iconName} color="PURE_WHITE_1000" />
          </Box>
        ) : null}
      </Box>

      <Box>
        <Text
          variant={isSmall ? 'bodyBold' : 'headlineBold'}
          color="PURE_WHITE_1000"
        >
          {title}
        </Text>
        {
          <Text
            variant="body"
            color="PURE_WHITE_1000"
            style={{ opacity: 0.8 }}
            numberOfLines={isSmall ? 1 : 2}
          >
            {description}
          </Text>
        }
      </Box>
    </Card>
  );
};

export default CardCarousel;
