import { ImageSourcePropType } from 'react-native';

import { Appearance } from '../../../theme';
import { IconsName } from '../../../types';

export type CardHighlightProps = {
  appearance?: Appearance;
  isSkeleton?: boolean;
  isLoading?: boolean;
  description?: string;
  tag?: {
    text: string;
    iconName: IconsName;
  };
  title: string;
  media: ImageSourcePropType;
  onPress?: () => void;
};
