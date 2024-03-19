import { Box } from '../../../../primitives/box/box';
import { Text } from '../../../../primitives/text/text';
import { InputSliderProps } from '../input-slider.types';

type Props = Pick<InputSliderProps, 'isDisabled' | 'measurement' | 'value'>;

const Header = ({ isDisabled, measurement, value }: Props) => {
  const primaryTextColor = isDisabled ? 'GREY_500' : 'GREY_1000';
  return (
    <Box flexDirection="row" alignItems="center" paddingBottom="xs">
      <Text color={primaryTextColor} variant="titleSmallBold">
        {value}
      </Text>
      <Text color="GREY_500" variant="titleSmall" marginLeft="xxs">
        {measurement}
      </Text>
    </Box>
  );
};

export default Header;
