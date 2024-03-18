import { Box } from '../../../../primitives/box/box';
import { Text } from '../../../../primitives/text/text';
import { InputSliderRangeProps } from '../input-slider-range.types';

type Props = Pick<
  InputSliderRangeProps,
  'connector' | 'endValue' | 'isDisabled' | 'measurement' | 'startValue'
>;

const Header = ({
  connector,
  endValue,
  isDisabled,
  measurement,
  startValue,
}: Props) => {
  const primaryTextColor = isDisabled ? 'GREY_500' : 'GREY_1000';
  return (
    <Box flexDirection="row" alignItems="center" paddingBottom="xs">
      <Text color={primaryTextColor} variant="titleSmallBold">
        {startValue}
      </Text>
      <Text color="GREY_500" variant="titleSmall" marginLeft="xxs">
        {connector}
      </Text>
      <Text color={primaryTextColor} variant="titleSmallBold" marginLeft="xxs">
        {endValue}
      </Text>
      <Text color="GREY_500" variant="titleSmall" marginLeft="xxs">
        {measurement}
      </Text>
    </Box>
  );
};

export default Header;
