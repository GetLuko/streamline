import { Box } from '../../../../primitives/box/box';
import { Text } from '../../../../primitives/text/text';
import { InputSliderProps } from '../input-slider.types';

type Props = Pick<InputSliderProps, 'isDisabled' | 'maximum' | 'minimum'>;

const Footer = ({ isDisabled, maximum, minimum }: Props) => {
  const textColor = isDisabled ? 'GREY_500' : 'GREY_700';
  return (
    <Box
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      paddingTop="xs"
    >
      <Text color={textColor} variant="subBodyBold" marginRight="xxs">
        {minimum}
      </Text>
      <Text color={textColor} variant="subBodyBold" marginLeft="xxs">
        {maximum}
      </Text>
    </Box>
  );
};

export default Footer;
