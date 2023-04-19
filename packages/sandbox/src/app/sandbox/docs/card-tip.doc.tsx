import React from 'react';

import { CardTip } from '@getluko/streamline';
import { DocList } from '../components/DocList';

const CARD_TIPS: JSX.Element[] = [
  <CardTip
    appearance="primary"
    description="Primary"
    iconName="Area"
    key="primary"
  />,
  <CardTip
    appearance="neutral"
    description="Neutral"
    iconName="Area"
    key="neutral"
  />,
  <CardTip
    appearance="warning"
    description="Warning"
    iconName="Area"
    key="warning"
  />,
  <CardTip
    appearance="danger"
    description="Danger"
    iconName="Area"
    key="danger"
  />,
];

export const CardTipSandbox = () => <DocList docs={CARD_TIPS} margin="md" />;
