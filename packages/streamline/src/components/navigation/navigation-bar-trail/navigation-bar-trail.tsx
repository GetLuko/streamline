import { IconsName } from 'packages/streamline/src/types';
import { Box } from '../../../primitives/box/box';
import { Text } from '../../../primitives/text/text';
import ButtonIcon from '../../buttons/button-icon/button-icon';
import { ButtonIconProps } from '../../buttons/button-icon/button-icon.types';

interface NavigationBarTrailProps {
  title?: string;
  left?: ButtonIconProps;
  right?: ButtonIconProps;
  action?: {
    title: string;
    onPress: () => void;
  };
}

export const NavigationBarTrail = ({
  title,
  left,
  right,
  action,
}: NavigationBarTrailProps) => {
  return (
    <Box
      paddingHorizontal="xs"
      paddingVertical="xxs"
      backgroundColor="ORANGE_700"
      flexDirection="row"
      alignItems="center"
    >
      {left ? (
        <ButtonIcon
          iconName={left.iconName}
          accessibilityLabel={left.accessibilityLabel}
          size="large"
          appearance="light"
          isOpaque
          shouldDisplaySpinner={false}
        />
      ) : null}
      <Box flex={1}>
        <Text variant="headlineBold" color="PURE_WHITE_1000" textAlign="center">
          {'Title'}
        </Text>
      </Box>
      {right ? (
        <ButtonIcon
          iconName="Area"
          accessibilityLabel="Back"
          size="large"
          appearance="light"
        />
      ) : null}
    </Box>
  );
};

export default NavigationBarTrail;
