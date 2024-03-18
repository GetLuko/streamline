import { Box } from '../../../primitives/box/box';
import Footer from '../input-slider/components/footer';

import Header from './components/header';
import RangeSlider from './components/range-slider';
import { InputSliderRangeProps } from './input-slider-range.types';

export const InputSliderRange = ({
  connector,
  endValue,
  isDisabled,
  maximum,
  measurement,
  minimum,
  onChangeEnd,
  onChangeStart,
  startValue,
  step,
  testID,
}: InputSliderRangeProps) => {
  const backgroundColor = isDisabled ? 'GREY_100' : 'PURE_WHITE_1000';
  return (
    <Box
      backgroundColor={backgroundColor}
      borderRadius="lg"
      padding="md"
      testID={testID}
    >
      <Header
        connector={connector}
        endValue={endValue}
        isDisabled={isDisabled}
        measurement={measurement}
        startValue={startValue}
      />
      <RangeSlider
        endValue={endValue}
        isDisabled={isDisabled}
        maximum={maximum}
        minimum={minimum}
        onChangeEnd={onChangeEnd}
        onChangeStart={onChangeStart}
        startValue={startValue}
        step={step}
      />
      <Footer isDisabled={isDisabled} maximum={maximum} minimum={minimum} />
    </Box>
  );
};
