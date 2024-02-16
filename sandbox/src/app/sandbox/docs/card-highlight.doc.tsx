import { CardHighlight, CardHighlightProps } from '@getluko/streamline';

import { DocList } from '../components/DocList';
import { sleep } from '../sandbox.utils';

const onPress = async () => sleep(2000);

const props: CardHighlightProps = {
  title: 'Title',
  description: 'Description',
  tag: { iconName: 'Area', text: 'Light' },
  onPress,
  media: {
    uri: 'https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png',
  },
};

const docs: JSX.Element[] = [
  <CardHighlight {...props} />,
  <CardHighlight {...props} appearance="secondary" />,
  <CardHighlight {...props} appearance="warning" />,
  <CardHighlight {...props} appearance="danger" />,
  <CardHighlight {...props} appearance="success" />,
  <CardHighlight {...props} isSkeleton />,
];

export const CardHighlightSandbox = () => <DocList docs={docs} />;
