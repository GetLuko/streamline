import { NavigationTitle } from '@getluko/streamline';
import { DocList } from '../components/DocList';

const docs: JSX.Element[] = [
  <NavigationTitle title="Title" header="Header" value="Value" icon={'Area'} />,
  <NavigationTitle title="Title" header="Header" icon={'Area'} />,
  <NavigationTitle title="Title" value="Value" icon={'Area'} />,
  <NavigationTitle title="Title" icon={'Area'} />,
  <NavigationTitle title="Title" />,

  <NavigationTitle
    position="center"
    title="Title"
    header="Header"
    value="Value"
    icon={'Area'}
  />,
  <NavigationTitle
    position="center"
    title="Title"
    header="Header"
    icon={'Area'}
  />,
  <NavigationTitle
    position="center"
    title="Title"
    value="Value"
    icon={'Area'}
  />,
  <NavigationTitle position="center" title="Title" icon={'Area'} />,

  <NavigationTitle
    appearance="light"
    title="Title"
    header="Header"
    value="Value"
    icon={'Area'}
  />,
  <NavigationTitle
    appearance="light"
    title="Title"
    header="Header"
    icon={'Area'}
  />,
  <NavigationTitle
    appearance="light"
    title="Title"
    value="Value"
    icon={'Area'}
  />,
  <NavigationTitle appearance="light" title="Title" icon={'Area'} />,

  <NavigationTitle
    position="center"
    appearance="light"
    title="Title"
    header="Header"
    value="Value"
    icon={'Area'}
  />,
  <NavigationTitle
    position="center"
    appearance="light"
    title="Title"
    header="Header"
    icon={'Area'}
  />,
  <NavigationTitle
    position="center"
    appearance="light"
    title="Title"
    value="Value"
    icon={'Area'}
  />,
  <NavigationTitle
    position="center"
    appearance="light"
    title="Title"
    icon={'Area'}
  />,
];

export const NavigationTitleSandbox = () => <DocList docs={docs} />;
