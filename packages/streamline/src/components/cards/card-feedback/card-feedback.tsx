import { Pressable } from 'react-native-ama';

import { Box } from '../../../primitives/box/box';
import { Icon } from '../../../primitives/icon/icon';
import { Text } from '../../../primitives/text/text';
import { IconsName } from '../../../types';
import { Button } from '../../buttons/button/button';
import { CardFeedbackProps } from './card-feedback.types';
import { getCardFeedbackBackgroundColor } from './card-feedback.utils';
import EmojiRating from './components/EmojiRating';
import StarRating from './components/StarRating';
import ThumbRating from './components/ThumbRating';

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
  const { appearance = 'primary', title, description } = props;
  const backgroundColor = getCardFeedbackBackgroundColor({ appearance });
  return (
    <Box backgroundColor={backgroundColor} padding="md" borderRadius="lg">
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
    </Box>
  );
};

export default CardFeedback;
