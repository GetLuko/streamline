import { ListItemArticle } from '@getluko/streamline';

import { DocList } from '../components/DocList';

const GROUPS = [
  <ListItemArticle
    imageSource={{
      uri: 'https://reactnative.dev/img/tiny_logo.png',
    }}
    header="Header"
    title="Title"
    description="Description"
    showDivider
  />,
  <ListItemArticle
    imageSource={{
      uri: 'https://reactnative.dev/img/tiny_logo.png',
    }}
    // header="Header"
    title="Title"
    // description="Description"
    showDivider
  />,
  <ListItemArticle
    imageSource={{
      uri: 'https://reactnative.dev/img/tiny_logo.png',
    }}
    header="Header"
    title="Title"
    description="Description"
    isLoading
    showDivider
  />,
  <ListItemArticle
    imageSource={{
      uri: 'https://reactnative.dev/img/tiny_logo.png',
    }}
    header="Header"
    title="Title"
    description="Description"
    isSkeleton
  />,
];

export const ListItemArticleSandbox = () => (
  <DocList docs={GROUPS} margin="md" />
);
