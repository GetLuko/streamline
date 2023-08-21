import { CardCarousel } from '@getluko/streamline';
import React from 'react';

import { DocList } from '../components/DocList';

const docs = [
  <CardCarousel
    size="large"
    title="Test title"
    description="description bla bla bla bla bla bla bla blla bla bla bla bla bla bla"
    tag={{ text: 'Card 1', iconName: 'Backpack' }}
    media={{ uri: 'https://legacy.reactjs.org/logo-og.png' }}
  />,
  <CardCarousel
    size="large"
    title="Test title"
    description="description bla bla bla bla bla bla bla blla bla bla bla bla bla bla"
    tag={{ text: 'Tag 2', iconName: 'Backpack' }}
    media={{
      uri: 'https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg',
    }}
    isLoading
  />,
  <CardCarousel size="large" isSkeleton />,
  <CardCarousel
    size="small"
    title="Test title"
    description="description bla bla bla bla bla bla bla blla bla bla bla bla bla bla"
    iconName="Backpack"
    media={{ uri: 'https://legacy.reactjs.org/logo-og.png' }}
  />,
  <CardCarousel
    size="small"
    title="Test title"
    description="description bla bla bla bla bla bla bla blla bla bla bla bla bla bla"
    iconName="Backpack"
    isLoading
    media={{
      uri: 'https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg',
    }}
  />,
  <CardCarousel size="small" isSkeleton />,
];

export const CardCarouselSandbox = () => <DocList docs={docs} />;

export default CardCarouselSandbox;
