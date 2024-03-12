import { useState } from 'react';
import { Pressable } from 'react-native';

import { Box } from '../../../primitives/box/box';
import { Icon } from '../../../primitives/icon/icon';
import { StarRatingProps } from './star-rating.types';

const StarRating = ({ currentRating, onRatingChange }: StarRatingProps) => {
  const [pressedRating, setPressedRating] = useState<number | undefined>(
    undefined
  );

  return (
    <Box flexDirection="row" flex={1} justifyContent="space-between">
      {Array(5)
        .fill(0)
        .map((_, index) => {
          const rating = index + 1;
          const isFilled = rating <= (pressedRating ?? currentRating);
          const color = isFilled ? 'GOLD_500' : 'GREY_300';
          return (
            <Pressable
              testID={`star-${rating}`}
              accessibilityRole="button"
              key={rating}
              accessibilityLabel={`Rate ${rating} stars`}
              onPress={() => onRatingChange(rating)}
              onPressIn={() => setPressedRating(rating)}
              onPressOut={() => setPressedRating(undefined)}
            >
              {({ pressed }) => {
                return (
                  <Icon
                    iconName="Star"
                    size="xlarge"
                    color={pressed ? 'GOLD_700' : color}
                  />
                );
              }}
            </Pressable>
          );
        })}
    </Box>
  );
};

export default StarRating;
