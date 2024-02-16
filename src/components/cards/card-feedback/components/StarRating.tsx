import { Pressable } from 'react-native';

import { Box } from '../../../../primitives/box/box';
import { Icon } from '../../../../primitives/icon/icon';

export interface StarRatingProps {
  currentRating: number;
  onRatingChange: (rating: number) => void;
}

const StarRating = ({ currentRating, onRatingChange }: StarRatingProps) => {
  return (
    <Box flexDirection="row" flex={1} justifyContent="space-between">
      {Array(5)
        .fill(0)
        .map((_, index) => {
          const rating = index + 1;
          const isFilled = rating <= currentRating;
          const color = isFilled ? 'GOLD_500' : 'GREY_300';
          return (
            <Pressable
              testID={`star-${rating}`}
              accessibilityRole="button"
              key={rating}
              accessibilityLabel={`Rate ${rating} stars`}
              onPress={() => onRatingChange(rating)}
            >
              <Icon iconName="Star" size="xlarge" color={color} />
            </Pressable>
          );
        })}
    </Box>
  );
};

export default StarRating;
