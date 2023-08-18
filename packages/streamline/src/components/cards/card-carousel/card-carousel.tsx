import React from 'react';
import { Image, StyleSheet } from 'react-native';

import { usePress } from '../../../hooks/use-press.hook';
import { Box } from '../../../primitives/box/box';
import { Card } from '../../../primitives/card/card';
import { Icon } from '../../../primitives/icon/icon';
import { Text } from '../../../primitives/text/text';
import { colors } from '../../../theme/colors';
import ButtonIcon from '../../buttons/button-icon/button-icon';
import Spinner from '../../spinner/spinner';
import Tag from '../../tag/tag';
import { CardCarouselSkeleton } from './card-carousel-skeleton';
import { LARGE_CARD_HEIGHT, SMALL_CARD_SIZE } from './card-carousel.constants';
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
      testID={`${testID}_card`}
      accessibilityLabel={accessibilityLabel}
    >
      <Image source={{ uri: media }} style={StyleSheet.absoluteFillObject} />

      <Box flexDirection="row-reverse" justifyContent="space-between">
        {isLoading || isResolving ? (
          <Spinner color="PURE_WHITE_1000" testID={`${testID}_spinner`} />
        ) : (
          <ButtonIcon
            iconName="Cross"
            accessibilityLabel="close"
            appearance="light"
          />
        )}

        {size === 'large' && props.tag ? (
          <Tag text="Tag" iconName={props.tag.iconName} appearance="light" />
        ) : null}

        {size === 'small' && props.iconName ? (
          <Icon iconName={props.iconName} color="PURE_WHITE_1000" />
        ) : null}
      </Box>

      <Box>
        <Text variant="headlineBold" color="PURE_WHITE_1000">
          {title}
        </Text>
        {size === 'large' && <Text color="PURE_WHITE_1000">{description}</Text>}
      </Box>
    </Card>
  );
};

export default CardCarousel;
