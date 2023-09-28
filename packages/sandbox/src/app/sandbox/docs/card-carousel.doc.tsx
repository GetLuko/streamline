import { CardCarousel } from '@getluko/streamline';
import React from 'react';

import { DocList } from '../components/DocList';

const DISMISS_ACTION = {
  accessibilityLabel: 'close',
  onDismiss: () => console.log('onDismiss pressed'),
};

const ON_PRESS = () => console.log('onPress pressed');

const docs = [
  <CardCarousel
    key={1}
    size="large"
    title="Test title"
    description="description bla bla bla bla bla bla bla blla bla bla bla bla bla bla"
    tag={{ text: 'Tag 2', iconName: 'Backpack' }}
    media={{
      uri: 'https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg',
    }}
    isLoading
    dismissAction={DISMISS_ACTION}
    onPress={ON_PRESS}
  />,
  <CardCarousel
    key={0}
    size="large"
    title="Test title"
    description="description bla bla bla bla bla bla bla blla bla bla bla bla bla bla"
    tag={{ text: 'Card 1', iconName: 'Backpack' }}
    appearance="secondary"
    isLoading
    onPress={ON_PRESS}
  />,
  <CardCarousel
    key={0}
    size="large"
    title="Test title"
    description="description bla bla bla bla bla bla bla blla bla bla bla bla bla bla"
    tag={{ text: 'Card 1', iconName: 'Backpack' }}
    appearance="primary"
    dismissAction={DISMISS_ACTION}
  />,
  <CardCarousel
    key={0}
    size="large"
    title="Test title"
    description="description bla bla bla bla bla bla bla blla bla bla bla bla bla bla"
    tag={{ text: 'Card 1', iconName: 'Backpack' }}
    appearance="warning"
  />,
  <CardCarousel
    key={0}
    size="large"
    title="Test title"
    description="description bla bla bla bla bla bla bla blla bla bla bla bla bla bla"
    tag={{ text: 'Card 1', iconName: 'Backpack' }}
    appearance="danger"
    dismissAction={DISMISS_ACTION}
    onPress={ON_PRESS}
  />,
  <CardCarousel
    key={0}
    size="large"
    title="Test title"
    description="description bla bla bla bla bla bla bla blla bla bla bla bla bla bla"
    tag={{ text: 'Card 1', iconName: 'Backpack' }}
    appearance="success"
    dismissAction={DISMISS_ACTION}
    onPress={ON_PRESS}
  />,
  <CardCarousel
    key={2}
    title=""
    size="large"
    isSkeleton
    dismissAction={DISMISS_ACTION}
    onPress={ON_PRESS}
  />,

  <CardCarousel
    key={4}
    size="small"
    title="Test title"
    description="description bla bla bla bla bla bla bla blla bla bla bla bla bla bla"
    iconName="Backpack"
    isLoading
    media={{
      uri: 'https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg',
    }}
    dismissAction={DISMISS_ACTION}
    onPress={ON_PRESS}
  />,
  <CardCarousel
    key={0}
    size="small"
    title="Test title"
    description="description bla bla bla bla bla bla bla blla bla bla bla bla bla bla"
    iconName="Backpack"
    appearance="secondary"
    dismissAction={DISMISS_ACTION}
    onPress={ON_PRESS}
  />,
  <CardCarousel
    key={0}
    size="small"
    title="Test title"
    description="description bla bla bla bla bla bla bla blla bla bla bla bla bla bla"
    iconName="Backpack"
    appearance="primary"
    dismissAction={DISMISS_ACTION}
  />,
  <CardCarousel
    key={0}
    size="small"
    title="Test title"
    description="description bla bla bla bla bla bla bla blla bla bla bla bla bla bla"
    iconName="Backpack"
    appearance="warning"
    dismissAction={DISMISS_ACTION}
    onPress={ON_PRESS}
  />,
  <CardCarousel
    key={0}
    size="small"
    title="Test title"
    description="description bla bla bla bla bla bla bla blla bla bla bla bla bla bla"
    iconName="Backpack"
    appearance="danger"
    dismissAction={DISMISS_ACTION}
    onPress={ON_PRESS}
  />,
  <CardCarousel
    key={0}
    size="small"
    title="Test title"
    description="description bla bla bla bla bla bla bla blla bla bla bla bla bla bla"
    iconName="Backpack"
    appearance="success"
    dismissAction={DISMISS_ACTION}
    onPress={ON_PRESS}
  />,

  <CardCarousel
    key={5}
    title=""
    size="small"
    isSkeleton
    dismissAction={DISMISS_ACTION}
    onPress={ON_PRESS}
  />,
];

export const CardCarouselSandbox = () => <DocList docs={docs} />;

export default CardCarouselSandbox;
