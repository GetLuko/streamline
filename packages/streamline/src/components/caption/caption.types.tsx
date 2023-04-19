import { Appearance } from '../../theme';

export type CaptionProps = {
  appearance?: Extract<Appearance, 'neutral' | 'warning' | 'danger'>;
  text: string;
};
