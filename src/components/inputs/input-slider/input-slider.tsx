import { Box } from '../../../primitives/box/box';

import Footer from './components/footer';
import Header from './components/header';
import Slider from './components/slider';
import { InputSliderProps } from './input-slider.types';

export const InputSlider = ({
  isDisabled,
  maximum,
  measurement,
  minimum,
  onChange,
  step,
  testID,
  value,
}: InputSliderProps) => {
  const backgroundColor = isDisabled ? 'GREY_100' : 'PURE_WHITE_1000';
  return (
    <Box
      backgroundColor={backgroundColor}
      borderRadius="lg"
      padding="md"
      testID={testID}
    >
      <Header isDisabled={isDisabled} measurement={measurement} value={value} />
      <Slider
        isDisabled={isDisabled}
        maximum={maximum}
        minimum={minimum}
        onChange={onChange}
        step={step}
        value={value}
      />
      <Footer isDisabled={isDisabled} maximum={maximum} minimum={minimum} />
    </Box>
  );
};
