import React from 'react';
import { FadeIn } from 'react-native-reanimated';

import { AnimatedBox } from '../../../../primitives/animated-box/animated-box';
import { Skeleton } from '../../../../primitives/skeleton/skeleton';
import { Text } from '../../../../primitives/text/text';
import { useStreamlineTheme } from '../../../../theme';
import { Appearance } from '../../../../theme/appearance';
import { stringCapitalize } from '../../../../utils/string.utils';
import Spinner from '../../../spinner/spinner';
import { ButtonProps } from '../button.types';
import { getTextColor } from '../button.utils';

const MIN_WIDTH = 82;
const LABEL_CONTAINER_HEIGHT = 24;

const InnerLabel = ({
  isLoading,
  appearance,
  text,
  isSkeleton,
  isDisabled,
  isMini,
}: Pick<
  ButtonProps,
  'isLoading' | 'appearance' | 'isSkeleton' | 'isDisabled' | 'text'
> & {
  isMini: boolean;
}) => {
  const styles = useStyles(appearance);
  const textColor = getTextColor({ appearance, isSkeleton, isDisabled });

  switch (true) {
    case isSkeleton && isMini: {
      return (
        <AnimatedBox width={MIN_WIDTH}>
          <Skeleton />
        </AnimatedBox>
      );
    }
    case isSkeleton && !isMini: {
      return <Skeleton />;
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
