import { FC } from 'react';

import { Icon } from '../../../../primitives/icon/icon';
import { IconsName } from '../../../../primitives/icon/icon.types';
import Checkbox from '../../../checkbox/checkbox';
import Radio from '../../../radio/radio';
import Spinner from '../../../spinner/spinner';

interface LeftContentProps {
  type: 'icon' | 'checkbox' | 'radio';
  isSelected?: boolean;
  isLoading?: boolean;
  isDisabled?: boolean;
  iconName?: IconsName;
}

const LeftContent: FC<LeftContentProps> = ({
  type,
  isSelected = false,
  isLoading,
  isDisabled,
  iconName,
}) => {
  if (isLoading) {
    return <Spinner color="BLUKO_500" />;
  }
  if (type === 'icon' && iconName) {
    return (
      <Icon
        iconName={iconName}
        color={isDisabled ? 'GREY_500' : 'BLUKO_500'}
        size="large"
      />
    );
  }

  if (type === 'checkbox') {
    return (
      <Checkbox
        value={isSelected}
        isDisabled={isDisabled}
        pointerEvents="none"
      />
    );
  }
  return (
    <Radio value={isSelected} isDisabled={isDisabled} pointerEvents="none" />
  );
};

export default LeftContent;
