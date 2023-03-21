import React from 'react';
import { FadeIn } from 'react-native-reanimated';

import { ButtonProps } from '../button.types';
import { getTextColor } from '../button.utils';
import { AnimatedBox } from '../../../../primitives/animated-box/animated-box';
import { Text } from '../../../../primitives/text/text';
import { theme, useStreamlineTheme } from '../../../../theme';
import { Box } from '../../../../primitives/box/box';
import PlaceholderAnimation from '../../../placeholder/placeholder-animation/placeholder-animation';
import { stringCapitalize } from '../../../../utils/string.utils';
import { Appearance } from '../../../../theme/appearance';
import Spinner from '../../../spinner/spinner';

const MIN_WIDTH = 82;
const LABEL_CONTAINER_HEIGHT = 24;

const InnerLabel = ({
  isLoading,
  appearance,
  size,
  text,
  isPlaceholder,
}: Pick<
  ButtonProps,
  'isLoading' | 'appearance' | 'isPlaceholder' | 'size' | 'text'
>) => {
  const styles = useStyles(appearance);
  const textColor = getTextColor(appearance);

  switch (true) {
    case size === 'mini' && isPlaceholder: {
      return null;
    }
    case isPlaceholder: {
      return (
        <Box
          style={{
            borderRadius: theme.borderRadii.lg,
          }}
          height={LABEL_CONTAINER_HEIGHT}
          width={size === 'mini' ? MIN_WIDTH : undefined}
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
          width={MIN_WIDTH}
          height={LABEL_CONTAINER_HEIGHT}
          justifyContent="center"
          alignItems="center"
          entering={FadeIn.duration(styles.duration)}
        >
          <Spinner size="regular" color={textColor} />
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
            color={textColor}
            numberOfLines={1}
          >
            {stringCapitalize(text)}
          </Text>
        </AnimatedBox>
      );
    }
  }
};

const useStyles = (variant?: Appearance) => {
  const { colors, animation } = useStreamlineTheme();

  return {
    activityIndicator: {
      color: variant === 'secondary' ? colors.BLACK : colors.PURE_WHITE_1000,
    },
    duration: animation.appearDuration,
  };
};

export default InnerLabel;
