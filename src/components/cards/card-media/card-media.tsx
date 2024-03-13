import { ImageBackground, StyleSheet } from 'react-native';

import { Box } from '../../../primitives/box/box';
import { Card } from '../../../primitives/card/card';
import { Text } from '../../../primitives/text/text';

import { CardMediaProps } from './card-media.types';
import { VideoOverlay } from './component/video-overlay';

const DEFAULT_CARD_HEIGHT = 192;

export const CardMedia = ({
  type,
  duration,
  onPress,
  thumbnail,
  caption,
  height = DEFAULT_CARD_HEIGHT,
}: CardMediaProps) => {
  return (
    <Box>
      <Card width="100%" height={height} overflow="hidden" onPress={onPress}>
        <ImageBackground
          testID="card-media-thumbnail"
          source={thumbnail}
          style={StyleSheet.absoluteFillObject}
        >
          {type === 'video' ? <VideoOverlay duration={duration} /> : null}
        </ImageBackground>
      </Card>
      {caption ? (
        <Text variant="caption" color="GREY_500" marginTop="xs">
          {caption}
        </Text>
      ) : null}
    </Box>
  );
};

export default CardMedia;
