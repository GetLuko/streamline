import React from 'react';

import { usePress } from '../../../hooks/use-press.hook';
import { Box } from '../../../primitives/box/box';
import { Card } from '../../../primitives/card/card';
import { Icon } from '../../../primitives/icon/icon';
import { Text } from '../../../primitives/text/text';
import ButtonIcon from '../../buttons/button-icon/button-icon';
import Spinner from '../../spinner/spinner';
import Tag from '../../tag/tag';
import { CardCarouselSkeleton } from './card-carousel-skeleton';
import { CardCarouselProps } from './card-carousel.types';

export const CardCarousel = (props: CardCarouselProps) => {
  const {
    size = 'LG',
    iconName = 'Area',
    title,
    description,
    backgroundColor,
    onPress,
    onPressIn,
    onPressOut,
    isSkeleton,
    accessibilityLabel,
    isLoading,
    testID,
  } = props;

  const [handlePress, isResolving] = usePress({ onPress: onPress });

  if (isSkeleton) return <CardCarouselSkeleton size={size} />;

  return (
    <Card
      height={size === 'SM' ? 152 : 192}
      width={size === 'SM' ? 156 : '100%'}
      backgroundColor={backgroundColor}
      flexDirection="column"
      justifyContent="space-between"
      overflow="hidden"
      onPress={handlePress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      testID={testID}
      accessibilityLabel={accessibilityLabel}
    >
      <Box flexDirection="row-reverse" justifyContent="space-between">
        {isLoading || isResolving ? (
          <Spinner color="PURE_WHITE_1000" />
        ) : (
          <ButtonIcon iconName="Cross" accessibilityLabel="close" />
        )}

        {size === 'LG' ? (
          <Tag text="Tag" iconName={iconName} />
        ) : (
          <Icon iconName={iconName} />
        )}
      </Box>

      <Box>
        <Text variant="headlineBold">{title}</Text>
        {size === 'LG' && <Text>{description}</Text>}
      </Box>
    </Card>
  );
};

export default CardCarousel;
