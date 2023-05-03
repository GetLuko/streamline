import { NavigationTitle } from '@getluko/streamline';

import { DocList } from '../components/DocList';

const docs: JSX.Element[] = [
  <NavigationTitle
    title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et sapien eu purus blandit tincidunt a vitae magna. In hac habitasse platea dictumst. Sed aliquet est eu lacus tempor, ut semper sapien auctor."
    header="I'm a really really really really really really long header"
    value="I'm a really really really really really really long value"
    icon="Area"
  />,
  <NavigationTitle title="Title" header="Header" icon="Area" />,
  <NavigationTitle title="Title" value="Value" icon="Area" />,
  <NavigationTitle title="Title" icon="Area" />,
  <NavigationTitle title="Title" />,

  <NavigationTitle
    position="center"
    title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et sapien eu purus blandit tincidunt a vitae magna. In hac habitasse platea dictumst. Sed aliquet est eu lacus tempor, ut semper sapien auctor. "
    header="I'm a really really really really really really long header"
    value="I'm a really really really really really really long value"
    icon="Area"
  />,
  <NavigationTitle
    position="center"
    title="Title"
    header="Header"
    icon="Area"
  />,
  <NavigationTitle position="center" title="Title" value="Value" icon="Area" />,
  <NavigationTitle position="center" title="Title" icon="Area" />,

  <NavigationTitle
    appearance="light"
    title="Title"
    header="Header"
    value="Value"
    icon="Area"
  />,
  <NavigationTitle
    appearance="light"
    title="Title"
    header="Header"
    icon="Area"
  />,
  <NavigationTitle
    appearance="light"
    title="Title"
    value="Value"
    icon="Area"
  />,
  <NavigationTitle appearance="light" title="Title" icon="Area" />,

  <NavigationTitle
    position="center"
    appearance="light"
    title="Title"
    header="Header"
    value="Value"
    icon="Area"
  />,
  <NavigationTitle
    position="center"
    appearance="light"
    title="Title"
    header="Header"
    icon="Area"
  />,
  <NavigationTitle
    position="center"
    appearance="light"
    title="Title"
    value="Value"
    icon="Area"
  />,
  <NavigationTitle
    position="center"
    appearance="light"
    title="Title"
    icon="Area"
  />,
];

export const NavigationTitleSandbox = () => <DocList docs={docs} />;
