import { Pressable } from 'react-native-ama';

import { Box } from '../../../primitives/box/box';
import { Icon } from '../../../primitives/icon/icon';
import { IconsName } from '../../../types';
import { EmojiRatingProps } from './emoji-rating.types';

const FACES: IconsName[] = ['Angry', 'Sad', 'Neutral', 'Happy', 'Pumped'];

const EmojiRating = ({ currentRating, onRatingChange }: EmojiRatingProps) => {
  return (
    <Box flexDirection="row" flex={1} justifyContent="space-between">
      {FACES.map((icon, index) => {
        const rating = index + 1;
        const isFilled = rating === currentRating;
        const color = isFilled ? 'BLUKO_500' : 'GREY_300';
        return (
          <Pressable
            testID={`emoji-${icon}`}
            accessibilityRole="button"
            key={rating}
            accessibilityLabel={`${icon} face rating`}
            onPress={() => onRatingChange(rating)}
          >
            {({ pressed }) => {
              return (
                <Icon
                  iconName={icon}
                  size="xlarge"
                  color={pressed ? 'BLUKO_700' : color}
                />
              );
            }}
          </Pressable>
        );
      })}
    </Box>
  );
};

export default EmojiRating;
