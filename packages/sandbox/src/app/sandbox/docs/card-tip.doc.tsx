import { CardTip } from '@getluko/streamline';
import React from 'react';

import { DocList } from '../components/DocList';

const CARD_TIPS: JSX.Element[] = [
  <CardTip
    appearance="primary"
    description="Primary [link](http://luko.eu)"
    iconName="Area"
    key="primary"
  />,
  <CardTip
    appearance="neutral"
    description="Neutral [link](http://luko.eu)"
    iconName="Area"
    key="neutral"
  />,
  <CardTip
    appearance="warning"
    description="Warning [link](http://luko.eu)"
    iconName="Area"
    key="warning"
  />,
  <CardTip
    appearance="danger"
    description="Danger [link](http://luko.eu)"
    iconName="Area"
    key="danger"
  />,
  <CardTip
    appearance="primary"
    description="Primary **bold** [link](http://luko.eu), with a very long description that should wrap to the next line"
    iconName="Area"
    key="primary"
  />,
];

export const CardTipSandbox = () => <DocList docs={CARD_TIPS} margin="md" />;
