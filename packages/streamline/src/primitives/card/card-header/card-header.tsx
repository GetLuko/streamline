import React from 'react';
import { Box } from '../../box/box';
import { Icon } from '../../icon/icon';
import { Text } from '../../text/text';
import { CardHeaderProps } from './card-header.types';
import {
  hasValidHeader,
  hasValidIconName,
  hasValidRightAction,
  hasValidValue,
} from './card-header.utils';
import Spinner from '../../../components/spinner/spinner';

export const CardHeader = (props: CardHeaderProps) => {
  const { colors, iconName, header, value, rightAction, isLoading } = props;

  const hasIconName = hasValidIconName(iconName);
  const hasHeader = hasValidHeader(header);
  const hasValue = hasValidValue(value);
  const hasRightAction = hasValidRightAction(rightAction);

  return (
    <Box
      flex={1}
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
    >
      <Box flexDirection="row" alignItems="center">
        {hasIconName && !isLoading && (
          <Icon color={colors.leftIconColor} iconName={iconName} size="large" />
        )}
        {isLoading && <Spinner color={colors.leftIconColor} />}
        {hasHeader && (
          <Text
            color={colors.headerColor}
            paddingLeft={hasIconName ? 'md' : undefined}
            variant="body"
          >
            {header}
          </Text>
        )}
      </Box>
      <Box flexDirection="row" alignItems="center">
        {hasValue && (
          <Text color={colors.valueColor} variant="body">
            {value}
          </Text>
        )}
        {hasRightAction && (
          <>
            <Box paddingLeft="xs" />
            <Icon
              color={colors.rightIconColor}
              iconName={'ChevronRight'}
              size="regular"
            />
          </>
        )}
      </Box>
    </Box>
  );
};
