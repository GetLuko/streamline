import React from 'react';
import { Alert } from 'react-native';

import { Box, CardCallout } from '@getluko/streamline';

const ICON_NAME = 'Area';

const DISMISS_ACTION = {
  accessibilityLabel: 'Test',
  onDismiss: () => Alert.alert('onDismiss pressed'),
};

const ON_PRESS = () => Alert.alert('onPress pressed');

export const CardCalloutSandbox = () => (
  <Box paddingHorizontal="xl">
    <Box paddingVertical="xxs">
      <Box paddingVertical="xxs">
        <CardCallout
          appearance="primary"
          description="Primary card callout"
          header="Primary"
          iconName={ICON_NAME}
          onPress={ON_PRESS}
        />
      </Box>
      <Box paddingVertical="xxs">
        <CardCallout
          appearance="primary"
          description="Primary dismissable card callout"
          dismissAction={DISMISS_ACTION}
          header="Primary"
          iconName={ICON_NAME}
        />
      </Box>
    </Box>
    <Box paddingVertical="xxs">
      <Box paddingVertical="xxs">
        <CardCallout
          appearance="secondary"
          description="Secondary card callout"
          header="Secondary"
          iconName={ICON_NAME}
          onPress={ON_PRESS}
        />
      </Box>
      <Box paddingVertical="xxs">
        <CardCallout
          appearance="secondary"
          description="Secondary dismissable card callout"
          dismissAction={DISMISS_ACTION}
          header="Secondary"
          iconName={ICON_NAME}
        />
      </Box>
    </Box>
    <Box paddingVertical="xxs">
      <Box paddingVertical="xxs">
        <CardCallout
          appearance="warning"
          description="Warning card callout"
          header="Warning"
          iconName={ICON_NAME}
          onPress={ON_PRESS}
        />
      </Box>
      <Box paddingVertical="xxs">
        <CardCallout
          appearance="warning"
          description="Warning dismissable card callout"
          dismissAction={DISMISS_ACTION}
          header="Warning"
          iconName={ICON_NAME}
        />
      </Box>
    </Box>
    <Box paddingVertical="xxs">
      <Box paddingVertical="xxs">
        <CardCallout
          appearance="danger"
          description="Danger card callout"
          header="Danger"
          iconName={ICON_NAME}
          onPress={ON_PRESS}
        />
      </Box>
      <Box paddingVertical="xxs">
        <CardCallout
          appearance="danger"
          description="Danger dismissable card callout"
          dismissAction={DISMISS_ACTION}
          header="Danger"
          iconName={ICON_NAME}
        />
      </Box>
    </Box>
    <Box paddingVertical="xxs">
      <Box paddingVertical="xxs">
        <CardCallout
          description="Skeleton card callout"
          header="Skeleton"
          iconName={ICON_NAME}
          isSkeleton
        />
      </Box>
      <Box paddingVertical="xxs">
        <CardCallout
          description="Skeleton card callout"
          header="Skeleton"
          iconName={ICON_NAME}
          isSkeleton
          numberOfSkeletonLines={2}
        />
      </Box>
    </Box>
  </Box>
);
