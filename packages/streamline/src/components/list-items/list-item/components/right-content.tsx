import React from 'react';

import { usePress } from '../../../../hooks/use-press.hook';
import { Icon } from '../../../../primitives/icon/icon';
import ButtonIcon from '../../../buttons/button-icon/button-icon';
import Spinner from '../../../spinner/spinner';
import { ListItemProps } from '../list-item.types';

export const RightContent = ({
  isLoading,
  onPress,
  rightOption,
}: Pick<ListItemProps, 'onPress' | 'rightOption'> & { isLoading: boolean }) => {
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
        appearance="secondary"
        iconName={rightOption.iconName}
        onPress={handlePress}
        isLoading={isResolving}
        size="large"
      />
    );

  if (isLoading) {
    return <Spinner color="GREY_400" size="small" />;
  }

  return <Icon color="GREY_400" iconName="ChevronFarRight" />;
};
