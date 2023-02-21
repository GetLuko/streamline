import React from 'react';
import { ActivityIndicator } from 'react-native';
import { FadeIn } from 'react-native-reanimated';

import { ButtonProps, ButtonAppearance } from '../button.types';
import { getTextColor } from '../button.utils';
import { AnimatedBox } from '../../../primitives/animated-box/animated-box';
import { Text } from '../../../primitives/text/text';
import { theme, useStreamlineTheme } from '../../../theme';
import { Box } from '../../../primitives/box/box';
import PlaceholderAnimation from '../../../placeholder/placeholder-animation/placeholder-animation';
import { stringCapitalize } from '../../../utils/string.utils';

const placeholder_WIDTH_MINI = 82;
const LABEL_CONTAINER_HEIGHT = 24;

const InnerLabel = ({
  isLoading,
  appearance,
  type,
  text,
}: Pick<ButtonProps, 'isLoading' | 'appearance' | 'type' | 'text'>) => {
  const styles = useStyles(appearance);

  switch (true) {
    case type === 'mini' && appearance === 'placeholder': {
      return null;
    }
    case appearance === 'placeholder': {
      return (
        <Box
          style={{
            borderRadius: theme.borderRadii.lg,
          }}
          height={LABEL_CONTAINER_HEIGHT}
          width={type === 'mini' ? placeholder_WIDTH_MINI : undefined}
          backgroundColor="GREY_200"
          overflow="hidden"
          flex={1}
        >
          <PlaceholderAnimation />
        </Box>
      );
    }
    case isLoading: {
      return (
        <AnimatedBox
          width={LABEL_CONTAINER_HEIGHT}
          height={LABEL_CONTAINER_HEIGHT}
          justifyContent="center"
          alignItems="center"
          entering={FadeIn.duration(styles.duration)}
        >
          <ActivityIndicator
            testID="activity-indicator"
            size="small"
            color={styles.activityIndicator.color}
          />
        </AnimatedBox>
      );
    }
    default: {
      return (
        <AnimatedBox
          alignSelf="center"
          entering={FadeIn.duration(styles.duration)}
        >
          <Text
            textAlign="center"
            variant="bodyBold"
            color={getTextColor(appearance)}
            numberOfLines={1}
          >
            {stringCapitalize(text)}
          </Text>
        </AnimatedBox>
      );
    }
  }
};

const useStyles = (variant?: ButtonAppearance) => {
  const { colors, animation } = useStreamlineTheme();

  return {
    activityIndicator: {
      color: variant === 'secondary' ? colors.BLACK : colors.PURE_WHITE_1000,
    },
    duration: animation.appearDuration,
  };
};

export default InnerLabel;
