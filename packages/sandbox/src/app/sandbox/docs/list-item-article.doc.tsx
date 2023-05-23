import { ListItemArticle } from '@getluko/streamline';

import { DocList } from '../components/DocList';
import { sleep } from '../sandbox.utils';

const ON_PRESS = async () => {
  await sleep(2000);
};

const GROUPS = [
  <ListItemArticle
    imageSource={{
      uri: 'https://reactnative.dev/img/tiny_logo.png',
    }}
    header="Header"
    title="Default No Divider"
    description="Description"
    onPress={ON_PRESS}
  />,
  <ListItemArticle
    imageSource={{
      uri: 'https://reactnative.dev/img/tiny_logo.png',
    }}
    header="Header"
    title="Touch No Divider"
    description="Description"
    onPress={ON_PRESS}
    isPress
  />,
  <ListItemArticle
    imageSource={{
      uri: 'https://reactnative.dev/img/tiny_logo.png',
    }}
    header="Header"
    title="Disabled No Divider"
    description="Description"
    onPress={ON_PRESS}
    isDisabled
  />,
  <ListItemArticle
    imageSource={{
      uri: 'https://reactnative.dev/img/tiny_logo.png',
    }}
    header="Header"
    title="Disabled No Divider"
    description="Description"
    isLoading
    onPress={ON_PRESS}
  />,
  <ListItemArticle
    imageSource={{
      uri: 'https://reactnative.dev/img/tiny_logo.png',
    }}
    header="Header"
    title="Title"
    description="Description"
    isSkeleton
    onPress={ON_PRESS}
  />,
  <ListItemArticle
    imageSource={{
      uri: 'https://reactnative.dev/img/tiny_logo.png',
    }}
    header="Header"
    title="Default Divider"
    description="Description"
    showDivider
    onPress={ON_PRESS}
  />,
];

export const ListItemArticleSandbox = () => (
  <DocList docs={GROUPS} margin="md" />
);
