import React from 'react';

import { usePress } from '../../../../hooks/use-press.hook';
import { Icon } from '../../../../primitives/icon/icon';
import ButtonIcon from '../../../buttons/button-icon/button-icon';
import { ListItemProps } from '../list-item.types';

export const RightContent = ({
  onPress,
  rightOption,
}: Pick<ListItemProps, 'onPress' | 'rightOption'>) => {
  const [handlePress, isResolving] = usePress({
    onPress: rightOption?.onPress,
  });

  if (!rightOption && !onPress) {
    return null;
  }

  if (rightOption)
    return (
      <ButtonIcon
        accessibilityLabel={rightOption.accessibilityLabel}
        appearance="neutral"
        iconName={rightOption.iconName}
        onPress={handlePress}
        isLoading={isResolving}
        size="large"
      />
    );

  return <Icon color="GREY_400" iconName="ChevronFarRight" />;
};
