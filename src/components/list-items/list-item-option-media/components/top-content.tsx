import { Icon } from '../../../../primitives/icon/icon';
import { IconsName } from '../../../../primitives/icon/icon.types';
import Spinner from '../../../spinner/spinner';

interface Props {
  isLoading: boolean;
  isDisabled?: boolean;
  isSelected?: boolean;
  iconName: IconsName;
}

export const TopContent = ({
  iconName,
  isLoading,
  isSelected,
  isDisabled,
}: Props) => {
  if (isLoading) {
    return <Spinner color="BLUKO_500" size="xlarge" />;
  }
  return (
    <Icon
      iconName={iconName}
      color={isDisabled && !isSelected ? 'GREY_500' : 'BLUKO_500'}
      size="xlarge"
    />
  );
};
