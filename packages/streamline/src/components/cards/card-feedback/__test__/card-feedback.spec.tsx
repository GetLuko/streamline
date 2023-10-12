import { fireEvent } from '@testing-library/react-native';

import { renderWithProvider } from '../../../../testing/render-with-provider';
import { CardFeedback } from '../card-feedback';

describe('CardFeedback with type "star"', () => {
  const onRatingChange = jest.fn();

  it('renders correctly', () => {
    const { getByTestId } = renderWithProvider(
      <CardFeedback
        type="star"
        currentRating={3}
        onRatingChange={onRatingChange}
      />
    );
    const starRating = getByTestId('star-1');
    expect(starRating).toBeDefined();
  });

  it('calls onRatingChange when a star is pressed', () => {
    const { getByTestId } = renderWithProvider(
      <CardFeedback
        type="star"
        currentRating={3}
        onRatingChange={onRatingChange}
      />
    );
    const star = getByTestId('star-2');
    fireEvent.press(star);
    expect(onRatingChange).toHaveBeenCalledWith(2);
  });
});

describe('CardFeedback with type "emoji"', () => {
  const onRatingChange = jest.fn();

  it('renders correctly', () => {
    const { getByTestId } = renderWithProvider(
      <CardFeedback
        type="emoji"
        currentRating={3}
        onRatingChange={onRatingChange}
      />
    );
    const starRating = getByTestId('emoji-Angry');
    expect(starRating).toBeDefined();
  });

  it('calls onRatingChange when a emoji is pressed', () => {
    const { getByTestId } = renderWithProvider(
      <CardFeedback
        type="emoji"
        currentRating={3}
        onRatingChange={onRatingChange}
      />
    );
    const emoji = getByTestId('emoji-Happy');
    fireEvent.press(emoji);
    expect(onRatingChange).toHaveBeenCalledWith(4);
  });
});

describe('CardFeedback with type "thumb"', () => {
  const onRatingChange = jest.fn();

  it('renders correctly', () => {
    const { getByTestId } = renderWithProvider(
      <CardFeedback type="thumb" onRatingChange={onRatingChange} />
    );
    const likeButton = getByTestId('like-button');
    const dislikeButton = getByTestId('dislike-button');

    expect(likeButton).toBeDefined();
    expect(dislikeButton).toBeDefined();
  });

  it('calls onRatingChange when a button is pressed', () => {
    const { getByTestId } = renderWithProvider(
      <CardFeedback type="thumb" onRatingChange={onRatingChange} />
    );
    const likeButton = getByTestId('like-button');
    const dislikeButton = getByTestId('dislike-button');

    fireEvent.press(likeButton);
    expect(onRatingChange).toHaveBeenCalledWith('like');

    fireEvent.press(dislikeButton);
    expect(onRatingChange).toHaveBeenCalledWith('dislike');
  });
});
