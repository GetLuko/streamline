import React from 'react';
import { Alert } from 'react-native';

import { CardCallout } from '@getluko/streamline';
import { DocList } from '../components/DocList';

const ICON_NAME = 'Area';

const DISMISS_ACTION = {
  accessibilityLabel: 'Test',
  onDismiss: () => Alert.alert('onDismiss pressed'),
};

const ON_PRESS = () => Alert.alert('onPress pressed');

const CARDS: JSX.Element[] = [
  <CardCallout
    appearance="primary"
    description="Primary card callout"
    header="Primary"
    iconName={ICON_NAME}
    key="Primary card callout"
    onPress={ON_PRESS}
  />,
  <CardCallout
    appearance="primary"
    description="Primary dismissable card callout"
    dismissAction={DISMISS_ACTION}
    header="Primary"
    iconName={ICON_NAME}
    key="Primary dismissable card callout"
  />,
  <CardCallout
    appearance="neutral"
    description="Secondary card callout"
    header="Neutral"
    iconName={ICON_NAME}
    key="Neutral card callout"
    onPress={ON_PRESS}
  />,
  <CardCallout
    appearance="neutral"
    description="Neutral dismissable card callout"
    dismissAction={DISMISS_ACTION}
    header="Neutral"
    iconName={ICON_NAME}
    key="Neutral dismissable card callout"
  />,
  <CardCallout
    appearance="warning"
    description="Warning card callout"
    header="Warning"
    iconName={ICON_NAME}
    key="Warning card callout"
    onPress={ON_PRESS}
  />,
  <CardCallout
    appearance="warning"
    description="Warning dismissable card callout"
    dismissAction={DISMISS_ACTION}
    header="Warning"
    iconName={ICON_NAME}
    key="Warning dismissable card callout"
  />,
  <CardCallout
    appearance="danger"
    description="Danger card callout"
    header="Danger"
    iconName={ICON_NAME}
    key="Danger card callout"
    onPress={ON_PRESS}
  />,
  <CardCallout
    appearance="danger"
    description="Danger dismissable card callout"
    dismissAction={DISMISS_ACTION}
    header="Danger"
    iconName={ICON_NAME}
    key="Danger dismissable card callout"
  />,
  <CardCallout
    description="Skeleton card callout"
    header="Skeleton"
    iconName={ICON_NAME}
    isSkeleton
    key="Skeleton card callout"
  />,
  <CardCallout
    description="Skeleton card callout with two lines"
    header="Skeleton"
    iconName={ICON_NAME}
    isSkeleton
    key="Skeleton card callout with two lines"
    numberOfSkeletonLines={2}
  />,
];

export const CardCalloutSandbox = () => <DocList docs={CARDS} margin="md" />;
