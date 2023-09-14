import { Box } from '../../../../primitives/box/box';
import { Icon } from '../../../../primitives/icon/icon';
import { ColorTheme } from '../../../../theme';
import Spinner from '../../../spinner/spinner';

export const LeftIcon = ({
  isSelected = false,
  isLoading,
  color,
  testID,
}: {
  isSelected?: boolean;
  color: ColorTheme;
  isLoading: boolean;
  testID?: string;
}) => {
  if (isLoading)
    return (
      <Box marginRight="md">
        <Spinner color={color} size="regular" />
      </Box>
    );

  return (
    <Box marginRight="md">
      {isSelected ? (
        <Icon
          color={color}
          iconName="Check"
          size="large"
          testID={`${testID}-check-icon`}
        />
      ) : (
        <Box marginRight="lg" />
      )}
    </Box>
  );
};

export default LeftIcon;
