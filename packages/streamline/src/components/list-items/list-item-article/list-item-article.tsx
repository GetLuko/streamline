import { GestureResponderEvent, Pressable } from 'react-native';
import {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { ImageContainer } from './components/image-container';
import { LIST_ITEM_ARTICLE_HEIGHT } from './constants';
import { ListItemArticleSkeleton } from './list-item-article-skeleton';
import { ListItemArticleProps } from './list-item-article.types';
import { usePress } from '../../../hooks/use-press.hook';
import { AnimatedBox } from '../../../primitives/animated-box/animated-box';
import { Box } from '../../../primitives/box/box';
import { Icon } from '../../../primitives/icon/icon';
import { Text } from '../../../primitives/text/text';
import { useStreamlineTheme } from '../../../theme';
import { Divider } from '../components/divider';

export const ListItemArticle = (props: ListItemArticleProps) => {
  const {
    accessibilityLabel,
    description,
    header,
    imageAccessibilityLabel,
    imageSource,
    isDisabled,
    isLoading,
    isPress,
    isSkeleton,
    key,
    onLongPress,
    onPress,
    onPressIn,
    onPressOut,
    pressableProps,
    showDivider,
    testID,
    title,
  } = props;
  const theme = useStreamlineTheme();
  const [handlePress, isResolving] = usePress({ onPress });
  const [handleLongPress, isLongPressResolving] = usePress({
    onPress: onLongPress,
  });

  const pressInAnimatedValue = useSharedValue(0);

  const { colors } = useStreamlineTheme();

  const handlePressIn = (e: GestureResponderEvent) => {
    pressInAnimatedValue.value = 1;
    onPressIn?.(e);
  };

  const handlePressOut = (e: GestureResponderEvent) => {
    pressInAnimatedValue.value = 0;
    onPressOut?.(e);
  };

  const backgroundColor = colors['GREY_50'];
  const pressedBackgroundColor = colors['GREY_100'];

  const animatedStyle = useAnimatedStyle(() => {
    const innerBackgroundColor = withTiming(
      interpolateColor(
        pressInAnimatedValue.value,
        [0, 1],
        [backgroundColor, pressedBackgroundColor]
      )
    );

    return {
      backgroundColor: isPress ? pressedBackgroundColor : innerBackgroundColor,
    };
  });

  if (isSkeleton) {
    return <ListItemArticleSkeleton />;
  }

  const innerIsLoading = isResolving || isLoading || isLongPressResolving;
  const isPressable = onPress || onLongPress || onPressIn || onPressOut;

  return (
    <Pressable
      {...pressableProps}
      disabled={isDisabled || innerIsLoading}
      testID={testID}
      onPress={handlePress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onLongPress={handleLongPress}
      key={key}
      accessibilityState={{ busy: innerIsLoading }}
      accessibilityRole={isPressable ? 'button' : 'none'}
      accessibilityLabel={
        accessibilityLabel ?? `${header}\n${title}\n${description}`
      }
    >
      <AnimatedBox
        style={animatedStyle}
        borderRadius="lg"
        padding="md"
        flexDirection="row"
        alignItems="center"
        height={LIST_ITEM_ARTICLE_HEIGHT}
      >
        <ImageContainer
          accessibilityLabel={
            imageAccessibilityLabel ??
            `${header}\n${title}\n${description}\nimage`
          }
          imageSource={imageSource}
          isDisabled={isDisabled}
          isLoading={innerIsLoading}
        />
        <Box flex={1} flexDirection="row" alignItems="center">
          <Box paddingLeft="md" flex={1}>
            <Text
              variant="subBody"
              color={isDisabled ? 'GREY_500' : 'GREY_700'}
              numberOfLines={1}
            >
              {header}
            </Text>
            <Text
              variant="body"
              color={isDisabled ? 'GREY_500' : 'GREY_1000'}
              numberOfLines={1}
            >
              {title}
            </Text>
            <Text
              variant="subBody"
              color={isDisabled ? 'GREY_500' : 'GREY_700'}
              numberOfLines={1}
            >
              {description}
            </Text>
          </Box>
          <Box paddingLeft="xs">
            <Icon iconName="ChevronFarRight" color="GREY_400" />
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
      </AnimatedBox>
    </Pressable>
  );
};

export default ListItemArticle;
