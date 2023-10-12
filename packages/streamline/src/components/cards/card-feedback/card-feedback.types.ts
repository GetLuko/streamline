import { Appearance } from '../../../theme';

interface DefaultProps {
  appearance?: Appearance;
  title?: string;
  description?: string;
  type: 'star' | 'emoji' | 'thumb';
}

export interface NumberFeedBackProps extends DefaultProps {
  type: 'star' | 'emoji';
  currentRating: number;
  onRatingChange: (rating: number) => void;
}

export type ThumbsFeedback = 'like' | 'dislike';

export interface ThumbsFeedBackProps extends DefaultProps {
  type: 'thumb';
  onRatingChange: (rating: ThumbsFeedback) => void;
}

export type CardFeedbackProps = NumberFeedBackProps | ThumbsFeedBackProps;
