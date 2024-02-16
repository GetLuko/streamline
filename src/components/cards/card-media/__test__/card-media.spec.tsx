import { renderWithProvider } from '../../../../testing/render-with-provider';
import CardMedia from '../card-media';
import { CardMediaProps } from '../card-media.types';

const defaultProps: CardMediaProps = {
  thumbnail: { uri: 'https://source.unsplash.com/random' },
  type: 'image',
  caption: 'Caption',
  onPress: jest.fn(),
};

describe('CardMedia', () => {
  it('should render correctly', () => {
    const { getByText, getByTestId } = renderWithProvider(
      <CardMedia {...defaultProps} />
    );

    expect(getByText('Caption')).toBeTruthy();
    expect(getByTestId('card-media-thumbnail').props.source).toBe(
      defaultProps.thumbnail
    );
  });

  it('should render video overlay when type video', () => {
    const { getByTestId } = renderWithProvider(
      <CardMedia {...defaultProps} type="video" />
    );

    expect(getByTestId('card-media-video-overlay')).toBeTruthy();
  });
});
