import React from 'react';

import { Box } from '../../../../primitives/box/box';
import { Icon } from '../../../../primitives/icon/icon';
import { Text } from '../../../../primitives/text/text';
import { useStreamlineTheme } from '../../../../theme';
import ButtonIcon from '../../../buttons/button-icon/button-icon';
import Spinner from '../../../spinner/spinner';
import { CardOptionProps } from '../card-option.types';

type Props = Pick<
  CardOptionProps,
  'title' | 'isLoading' | 'iconName' | 'value' | 'rightOption'
> & {
  hasOnPress: boolean;
};

export const Header = ({
  hasOnPress,
  iconName,
  isLoading,
  rightOption,
  title,
  value,
}: Props) => {
  const { spacing } = useStreamlineTheme();
  return (
    <Box
      flex={1}
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
    >
      <Box flexDirection="row" alignItems="center" flex={1}>
        {iconName && !isLoading && (
          <Icon color="BLUKO_500" iconName={iconName} size="large" />
        )}
        {isLoading ? <Spinner color="BLUKO_500" /> : null}
        {title ? (
          <Box flex={1}>
            <Text
              color="GREY_1000"
              paddingLeft={iconName ? 'md' : undefined}
              variant="body"
            >
              {title}
            </Text>
          </Box>
        ) : null}
      </Box>
      <Box
        flexDirection="row"
        alignItems="center"
        justifyContent="flex-end"
        maxWidth="50%"
        flexShrink={1}
      >
        {value ? (
          <Box paddingLeft="xs" paddingRight={rightOption ? 'xl' : undefined}>
            <Text color="GREY_500" variant="body" textAlign="right">
              {value}
            </Text>
          </Box>
        ) : null}
        {rightOption ? (
          <Box position="absolute" right={-spacing.xs}>
            <ButtonIcon size="large" appearance="secondary" {...rightOption} />
          </Box>
        ) : null}
        {hasOnPress && !rightOption ? (
          <Box paddingLeft="xs">
            <Icon color="GREY_500" iconName="ChevronFarRight" size="regular" />
          </Box>
        ) : null}
      </Box>
    </Box>
  );
};
