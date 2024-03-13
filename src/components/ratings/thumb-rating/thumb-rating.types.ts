export type ThumbsFeedback = 'like' | 'dislike';
export interface ThumbRatingProps {
  onRatingChange: (rating: ThumbsFeedback) => void;
}
