import { Tag } from '@getluko/streamline';

import { DocList } from '../components/DocList';

const ICON_NAME = 'Area';

const TAGS: JSX.Element[] = [
  <Tag
    appearance="primary"
    iconName={ICON_NAME}
    key="primary"
    text="Primary"
  />,
  <Tag
    appearance="neutral"
    iconName={ICON_NAME}
    key="neutral"
    text="Neutral"
  />,
  <Tag
    appearance="warning"
    iconName={ICON_NAME}
    key="warning"
    text="Warning"
  />,
  <Tag appearance="danger" iconName={ICON_NAME} key="danger" text="Danger" />,
  <Tag
    appearance="success"
    iconName={ICON_NAME}
    key="success"
    text="Success"
  />,
  <Tag appearance="dark" iconName={ICON_NAME} key="dark" text="Dark" />,
  <Tag appearance="light" iconName={ICON_NAME} key="light" text="Light" />,
  <Tag
    appearance="primary"
    iconName={ICON_NAME}
    isSmall
    key="primary small"
    text="Primary"
  />,
  <Tag
    appearance="neutral"
    iconName={ICON_NAME}
    isSmall
    key="neutral small"
    text="Neutral"
  />,
  <Tag
    appearance="warning"
    iconName={ICON_NAME}
    isSmall
    key="warning small"
    text="Warning"
  />,
  <Tag
    appearance="danger"
    iconName={ICON_NAME}
    key="danger small"
    isSmall
    text="Danger"
  />,
  <Tag
    appearance="success"
    iconName={ICON_NAME}
    key="success small"
    isSmall
    text="Success"
  />,
  <Tag
    appearance="dark"
    iconName={ICON_NAME}
    key="dark small"
    isSmall
    text="Dark"
  />,
  <Tag
    appearance="light"
    iconName={ICON_NAME}
    key="light small"
    isSmall
    text="Light"
  />,
];

export const TagSandbox = () => <DocList docs={TAGS} margin="md" />;
