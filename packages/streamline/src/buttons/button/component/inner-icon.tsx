import React from 'react';
import { FadeIn } from 'react-native-reanimated';

import { ButtonProps } from '../button.types';
import { getTextColor } from '../button.utils';
import { Box } from '../../../primitives/box/box';
import { AnimatedBox } from '../../../primitives/animated-box/animated-box';
import { Icon } from '../../../primitives/icon/icon';
import PlaceholderAnimation from '../../../placeholder/placeholder-animation/placeholder-animation';
import { theme } from '../../../theme';

const InnerIcon = ({
  isLoading,
  iconName,
  appearance,
  type,
}: Pick<ButtonProps, 'isLoading' | 'appearance' | 'type' | 'iconName'>) => {
  switch (true) {
    case isLoading:
    case type !== 'mini':
    case iconName === undefined && appearance !== 'placeholder': {
      return null;
    }
    case appearance === 'placeholder': {
      return (
        <Box
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          testID="button-skeleton"
        >
          {iconName !== undefined && (
            <>
              <Box
                width={16}
                height={16}
                style={{ borderRadius: theme.borderRadii.lg }}
                backgroundColor="GREY_200"
                overflow="hidden"
              >
                <PlaceholderAnimation />
              </Box>
              <Box paddingRight="xs" />
            </>
          )}
          <Box
            style={{ borderRadius: theme.borderRadii.lg }}
            height={24}
            width={82}
            backgroundColor="GREY_200"
            overflow="hidden"
          >
            <PlaceholderAnimation />
          </Box>
        </Box>
      );
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
            size="small"
            color={getTextColor(appearance)}
          />
        </AnimatedBox>
      );
    }
  }
};

export default InnerIcon;
