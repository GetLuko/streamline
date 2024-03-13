import { Box } from '../../../primitives/box/box';
import { Button } from '../../buttons/button/button';
import { ThumbRatingProps } from './thumb-rating.types';

export const ThumbRating = ({ onRatingChange }: ThumbRatingProps) => {
  return (
    <Box flexDirection="row" flex={1} justifyContent="space-between">
      <Box flex={1} marginRight="xs">
        <Button
          testID="like-button"
          size="mini"
          text="I like it"
          iconName="ThumbUp"
          appearance="neutral"
          onPress={() => onRatingChange('like')}
        />
      </Box>
      <Box flex={1}>
        <Button
          testID="dislike-button"
          size="mini"
          text="I don't like it"
          iconName="ThumbDown"
          appearance="neutral"
          onPress={() => onRatingChange('dislike')}
        />
      </Box>
    </Box>
  );
};

export default ThumbRating;
