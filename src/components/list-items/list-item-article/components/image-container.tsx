import { Image } from 'react-native';

import { Box } from '../../../../primitives/box/box';
import { IMAGE_HEIGHT, IMAGE_WIDTH } from '../constants';
import { ListItemArticleProps } from '../list-item-article.types';

import { ImageSpinner } from './image-spinner';

export const ImageContainer = (
  props: Pick<
    ListItemArticleProps,
    'isDisabled' | 'imageSource' | 'accessibilityLabel' | 'isLoading'
  > & {
    innerIsLoading?: boolean;
  }
) => {
  const { accessibilityLabel, isDisabled, imageSource, isLoading } = props;
  return (
    <Box
      width={IMAGE_WIDTH}
      height={IMAGE_HEIGHT}
      backgroundColor="GREY_200"
      borderRadius="lg"
      overflow="hidden"
      opacity={isDisabled ? 0.5 : 1}
    >
      <Image
        style={{
          width: IMAGE_WIDTH,
          height: IMAGE_HEIGHT,
        }}
        source={imageSource}
        accessibilityLabel={accessibilityLabel}
      />
      {isLoading && <ImageSpinner />}
    </Box>
  );
};
