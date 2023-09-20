import { CardCarousel } from '@getluko/streamline';
import React from 'react';

import { DocList } from '../components/DocList';

const DISMISS_ACTION = {
  accessibilityLabel: 'close',
  onDismiss: () => console.log('onDismiss pressed'),
};

const docs = [
  <CardCarousel
    key={0}
    size="large"
    title="Test title"
    description="description bla bla bla bla bla bla bla blla bla bla bla bla bla bla"
    tag={{ text: 'Card 1', iconName: 'Backpack' }}
    media={{ uri: 'https://legacy.reactjs.org/logo-og.png' }}
    dismissAction={DISMISS_ACTION}
  />,
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
  />,
  <CardCarousel
    key={2}
    title=""
    size="large"
    isSkeleton
    dismissAction={DISMISS_ACTION}
  />,
  <CardCarousel
    key={3}
    size="small"
    title="Test title"
    description="description bla bla bla bla bla bla bla blla bla bla bla bla bla bla"
    iconName="Backpack"
    media={{ uri: 'https://legacy.reactjs.org/logo-og.png' }}
    dismissAction={DISMISS_ACTION}
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
  />,
  <CardCarousel
    key={5}
    title=""
    size="small"
    isSkeleton
    dismissAction={DISMISS_ACTION}
  />,
];

export const CardCarouselSandbox = () => <DocList docs={docs} />;

export default CardCarouselSandbox;
