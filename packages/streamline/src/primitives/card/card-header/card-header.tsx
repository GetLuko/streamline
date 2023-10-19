import React from 'react';

import Spinner from '../../../components/spinner/spinner';
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

export const CardHeader = (props: CardHeaderProps) => {
  const { colors, iconName, title, subtitle, value, rightAction, isLoading } =
    props;

  const hasIconName = hasValidIconName(iconName);
  const hasHeader = hasValidHeader(title);
  const hasValue = hasValidValue(value);
  const hasRightAction = hasValidRightAction(rightAction);

  return (
    <Box
      flex={1}
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
    >
      <Box flexDirection="row" alignItems="center" flex={1}>
        {hasIconName && !isLoading && (
          <Icon color={colors.leftIconColor} iconName={iconName} size="large" />
        )}
        {isLoading ? <Spinner color={colors.leftIconColor} /> : null}
        {hasHeader ? (
          <Box flex={1}>
            <Text
              color={colors.headerColor}
              paddingLeft={hasIconName ? 'md' : undefined}
              variant="body"
            >
              {title}
            </Text>
            {subtitle ? (
              <Text
                color={colors.valueColor}
                paddingLeft={hasIconName ? 'md' : undefined}
                variant="subBody"
              >
                {subtitle}
              </Text>
            ) : null}
          </Box>
        ) : null}
      </Box>
      <Box
        flexDirection="row"
        alignItems="center"
        justifyContent="flex-end"
        flex={1}
      >
        {hasValue ? (
          <Box flex={1}>
            <Text color={colors.valueColor} variant="body" textAlign="right">
              {value}
            </Text>
          </Box>
        ) : null}
        {hasRightAction ? (
          <Box>
            <Box paddingLeft="xs" />
            <Icon
              color={colors.rightIconColor}
              iconName="ChevronFarRight"
              size="regular"
            />
          </Box>
        ) : null}
      </Box>
    </Box>
  );
};
