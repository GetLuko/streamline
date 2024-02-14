import { StyleSheet } from 'react-native';

import { Box } from '../../../../primitives/box/box';
import { Icon } from '../../../../primitives/icon/icon';
import { useStreamlineTheme } from '../../../../theme';
import Tag from '../../../tag/tag';

const ICON_CONTAINER_SIZE = 48;

interface VideoOverlayProps {
  duration?: string;
}

export const VideoOverlay = ({ duration }: VideoOverlayProps) => {
  const { spacing } = useStreamlineTheme();
  return (
    <Box
      style={StyleSheet.absoluteFillObject}
      alignItems="center"
      justifyContent="center"
      testID="card-media-video-overlay"
    >
      {duration ? (
        <Box position="absolute" bottom={spacing.md} right={spacing.md}>
          <Tag text={duration} appearance="dark" />
        </Box>
      ) : null}
      <Box
        width={ICON_CONTAINER_SIZE}
        height={ICON_CONTAINER_SIZE}
        alignItems="center"
        justifyContent="center"
      >
        <Box
          backgroundColor="GREY_1000"
          opacity={0.4}
          style={StyleSheet.absoluteFillObject}
          borderRadius="round"
        />
        <Icon iconName="Play" size="large" color="PURE_WHITE_1000" />
      </Box>
    </Box>
  );
};
