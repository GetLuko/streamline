import React from 'react';
import { FadeIn } from 'react-native-reanimated';

import { ButtonProps } from '../button.types';
import { getTextColor } from '../button.utils';
import { AnimatedBox } from '../../../../primitives/animated-box/animated-box';
import { Box } from '../../../../primitives/box/box';
import { Icon } from '../../../../primitives/icon/icon';
import { Skeleton } from '../../../../primitives/skeleton/skeleton';
import { theme } from '../../../../theme';

const InnerIcon = ({
  isLoading,
  isSkeleton,
  isDisabled,
  iconName,
  appearance,
  size,
}: Pick<
  ButtonProps,
  'isLoading' | 'appearance' | 'isSkeleton' | 'isDisabled' | 'size' | 'iconName'
>) => {
  switch (true) {
    case isLoading:
    case size !== 'mini':
    case iconName === undefined && !isSkeleton: {
      return null;
    }
    case isSkeleton: {
      return iconName !== undefined ? (
        <Box paddingRight="xs">
          <Skeleton shape="square" size="sm" />
        </Box>
      ) : null;
    }

    default: {
      return (
        <AnimatedBox
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          entering={FadeIn.duration(theme.animation.appearDuration)}
          paddingRight="xs"
        >
          <Icon
            // We already check if iconName is undefined above
            // type inferance don't work well with switch case
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            iconName={iconName}
            color={getTextColor({ appearance, isSkeleton, isDisabled })}
          />
        </AnimatedBox>
      );
    }
  }
};

export default InnerIcon;
