import { CardFeedback, ThumbsFeedback } from '@getluko/streamline';
import React, { useState } from 'react';

import { DocList } from '../components/DocList';

const TITLE = 'How was your experience?';
const DESC = 'Your feedback helps us improve our service for everyone.';

export const CardFeedbackDoc = () => {
  const [star, setStar] = useState(0);
  const [emoji, setEmoji] = useState(0);

  const onStarPress = (rating: number) => {
    console.log('onPress pressed', rating);
    setStar(rating);
  };

  const onEmojiPress = (rating: number) => {
    console.log('onPress pressed', rating);
    setEmoji(rating);
  };

  const onThumbPress = (rating: ThumbsFeedback) => {
    console.log('onPress pressed', rating);
  };

  const CARDS: JSX.Element[] = [
    <CardFeedback
      type="emoji"
      currentRating={emoji}
      onRatingChange={onEmojiPress}
      title={TITLE}
      description={DESC}
    />,
    <CardFeedback
      type="star"
      currentRating={star}
      onRatingChange={onStarPress}
      title={TITLE}
      description={DESC}
    />,
    <CardFeedback
      type="thumb"
      onRatingChange={onThumbPress}
      title={TITLE}
      description={DESC}
    />,
    <CardFeedback
      type="emoji"
      currentRating={emoji}
      onRatingChange={onEmojiPress}
    />,
    <CardFeedback
      type="star"
      currentRating={star}
      onRatingChange={onStarPress}
    />,
    <CardFeedback type="thumb" onRatingChange={onThumbPress} />,
  ];
  return <DocList docs={CARDS} margin="md" />;
};

export const CardFeedbackSandbox = () => <CardFeedbackDoc />;
