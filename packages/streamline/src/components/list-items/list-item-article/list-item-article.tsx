import React from 'react';
import {
  Image,
  ImageSourcePropType,
  Pressable,
  PressableProps,
} from 'react-native';

import { usePress } from '../../../hooks/use-press.hook';
import { Box } from '../../../primitives/box/box';
import { Icon } from '../../../primitives/icon/icon';
import { Text } from '../../../primitives/text/text';
import { useStreamlineTheme } from '../../../theme';
import Spinner from '../../spinner/spinner';
import { Divider } from '../components/divider';
import { ListItemArticleSkeleton } from './list-item-article-skeleton';

export type ListItemArticleProps = {
  description?: string;
  header?: string;
  imageSource: ImageSourcePropType;
  isSkeleton?: boolean;
  isLoading?: boolean;
  showDivider?: boolean;
  title: string;
  key?: React.Key;
  pressableProps?: Omit<
    PressableProps,
    | 'testID'
    | 'onPress'
    | 'children'
    | 'onPressIn'
    | 'onPressOut'
    | 'onLongPress'
  >;
} & Pick<
  PressableProps,
  | 'testID'
  | 'onPress'
  | 'onPressIn'
  | 'onPressOut'
  | 'onLongPress'
  | 'accessibilityLabel'
>;

const IMAGE_WIDTH = 48;
const IMAGE_HEIGHT = 48;
export const LIST_ITEM_ARTICLE_HEIGHT = 96;

/**
 * Todo - Use pressable from react-native-ama when issue below fixed
 * https://github.com/FormidableLabs/react-native-ama/issues/92
 */
export const ListItemArticle = (props: ListItemArticleProps) => {
  const {
    showDivider,
    imageSource,
    header,
    title,
    description,
    isSkeleton,
    testID,
    onPress,
    key,
    isLoading,
    onPressIn,
    onPressOut,
    onLongPress,
    pressableProps,
    accessibilityLabel,
  } = props;
  const theme = useStreamlineTheme();
  const [handlePress, isResolving] = usePress({ onPress });
  const [handleLongPress, isLongPressResolving] = usePress({
    onPress: onLongPress,
  });

  if (isSkeleton) {
    return <ListItemArticleSkeleton />;
  }

  const innerIsLoading = isResolving || isLoading || isLongPressResolving;

  return (
    <Pressable
      {...pressableProps}
      testID={testID}
      onPress={handlePress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      onLongPress={handleLongPress}
      key={key}
      accessibilityRole={handlePress ? 'button' : 'none'}
      accessibilityLabel={
        accessibilityLabel ?? `${header}\n${title}\n${description}`
      }
    >
      <Box
        padding="md"
        flexDirection="row"
        alignItems="center"
        height={LIST_ITEM_ARTICLE_HEIGHT}
      >
        <Box
          width={IMAGE_WIDTH}
          height={IMAGE_HEIGHT}
          backgroundColor="GREY_200"
          borderRadius="lg"
          overflow="hidden"
        >
          <Image
            style={{ width: IMAGE_WIDTH, height: IMAGE_HEIGHT }}
            source={imageSource}
          />
        </Box>
        <Box flex={1} flexDirection="row" alignItems="center">
          <Box paddingLeft="md" flex={1}>
            <Text variant="subBody" color="GREY_700" numberOfLines={1}>
              {header}
            </Text>
            <Text variant="body" numberOfLines={1}>
              {title}
            </Text>
            <Text variant="subBody" color="GREY_700" numberOfLines={1}>
              {description}
            </Text>
          </Box>
          <Box paddingLeft="xs">
            {innerIsLoading ? (
              <Spinner color="GREY_400" size="small" />
            ) : (
              <Icon iconName="ChevronFarRight" color="GREY_700" />
            )}
          </Box>
          {showDivider && (
            <Divider
              position="absolute"
              bottom={-theme.spacing.md}
              left={theme.spacing.md}
              right={0}
            />
          )}
        </Box>
      </Box>
    </Pressable>
  );
};

export default ListItemArticle;
