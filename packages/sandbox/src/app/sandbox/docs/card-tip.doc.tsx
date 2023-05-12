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
];

export const CardTipSandbox = () => <DocList docs={CARD_TIPS} margin="md" />;
