import { Easing, FadeIn } from 'react-native-reanimated';

import { AnimatedBox } from '../../../../primitives/animated-box/animated-box';
import { Box } from '../../../../primitives/box/box';
import Spinner from '../../../spinner/spinner';

export const ImageSpinner = () => {
  return (
    <AnimatedBox
      position="absolute"
      top={0}
      left={0}
      bottom={0}
      right={0}
      entering={FadeIn.easing(Easing.quad)}
    >
      <Box
        position="absolute"
        top={0}
        left={0}
        bottom={0}
        right={0}
        backgroundColor="GREY_1000"
        opacity={0.5}
      />
      <Box
        position="absolute"
        top={0}
        left={0}
        bottom={0}
        right={0}
        justifyContent="center"
        alignItems="center"
      >
        <Spinner color="PURE_WHITE_1000" size="regular" />
      </Box>
    </AnimatedBox>
  );
};
