import { Appearance } from '../../../theme';
import { ThumbsFeedback } from '../../ratings/thumb-rating/thumb-rating.types';

interface DefaultProps {
  appearance?: Appearance;
  title?: string;
  description?: string;
  type: 'star' | 'emoji' | 'thumb';
  animated?: boolean;
}

export interface NumberFeedBackProps extends DefaultProps {
  type: 'star' | 'emoji';
  currentRating: number;
  onRatingChange: (rating: number) => void;
}

export interface ThumbsFeedBackProps extends DefaultProps {
  type: 'thumb';
  onRatingChange: (rating: ThumbsFeedback) => void;
}

export type CardFeedbackProps = NumberFeedBackProps | ThumbsFeedBackProps;
