import { Box } from '../../../primitives/box/box';

import { TabProps } from './tab.types';
import { getBorderConfig } from './tab.utils';

type Props = Pick<TabProps, 'appearance'>;

export const TabDivider = ({ appearance }: Props) => {
  const { backgroundColor, opacity } = getBorderConfig({ appearance });

  return (
    <Box paddingBottom="md" width={16}>
      <Box
        backgroundColor={backgroundColor}
        height={1}
        position="absolute"
        bottom={0}
        right={0}
        left={0}
        opacity={opacity}
        alignSelf="center"
      />
    </Box>
  );
};
