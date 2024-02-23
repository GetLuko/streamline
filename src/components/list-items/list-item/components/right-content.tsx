import React from 'react';

import { usePress } from '../../../../hooks/use-press.hook';
import { Icon } from '../../../../primitives/icon/icon';
import ButtonIcon from '../../../buttons/button-icon/button-icon';
import Tag from '../../../tag/tag';
import { ListItemProps } from '../list-item.types';
import { Box } from '../../../../primitives/box/box';

export const RightContent = ({
  onPress,
  rightOption,
}: Pick<ListItemProps, 'onPress' | 'rightOption'>) => {
  const isTag = rightOption?.type === 'tag';

  const [handlePress, isResolving] = usePress({
    onPress: !isTag ? rightOption?.onPress : undefined,
  });

  if (!rightOption && !onPress) {
    return null;
  }

  if (rightOption) {
    if (isTag) {
      return (
        <Box paddingRight="xs" paddingLeft="xxs">
          <Tag
            accessibilityLabel={rightOption.accessibilityLabel}
            appearance={rightOption.appearance}
            iconName={rightOption.iconName}
            text={rightOption.text}
          />
        </Box>
      );
    }

    return (
      <ButtonIcon
        testID={rightOption.testID}
        accessibilityLabel={rightOption.accessibilityLabel}
        appearance="neutral"
        iconName={rightOption.iconName}
        onPress={handlePress}
        isLoading={isResolving}
        size="large"
      />
    );
  }

  return <Icon color="GREY_400" iconName="ChevronFarRight" />;
};
