import { CardFeedbackProps } from './card-feedback.types';
import { getCardFeedbackBackgroundColor } from './card-feedback.utils';
import EmojiRating from '../../ratings/emoji-rating/emoji-rating';
import StarRating from '../../ratings/star-rating/star-rating';
import ThumbRating from '../../ratings/thumb-rating/thumb-rating';
import { Box } from '../../../primitives/box/box';
import { Card } from '../../../primitives/card/card';
import { Text } from '../../../primitives/text/text';

const CardFeedbackContent = (props: CardFeedbackProps) => {
  switch (props.type) {
    case 'thumb':
      return <ThumbRating onRatingChange={props.onRatingChange} />;
    case 'star':
      return (
        <StarRating
          currentRating={props.currentRating}
          onRatingChange={props.onRatingChange}
        />
      );
    case 'emoji':
      return (
        <EmojiRating
          currentRating={props.currentRating}
          onRatingChange={props.onRatingChange}
        />
      );
  }
};

export const CardFeedback = (props: CardFeedbackProps) => {
  const { appearance = 'primary', title, description, animated } = props;
  const backgroundColor = getCardFeedbackBackgroundColor({ appearance });
  return (
    <Card backgroundColor={backgroundColor} animated={animated}>
      <Box paddingBottom={title || description ? 'md' : undefined}>
        {title ? (
          <Text variant="headlineBold" color="GREY_1000">
            {title}
          </Text>
        ) : null}
        {description ? (
          <Text variant="body" color="GREY_700">
            {description}
          </Text>
        ) : null}
      </Box>
      <CardFeedbackContent {...props} />
    </Card>
  );
};

export default CardFeedback;
