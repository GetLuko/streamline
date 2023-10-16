import { ImageSourcePropType } from 'react-native';

export interface CardMediaProps {
  type: 'image' | 'video';
  onPress?: () => void;
  thumbnail: ImageSourcePropType;
  duration?: string;
  caption?: string;
  height?: number;
}
