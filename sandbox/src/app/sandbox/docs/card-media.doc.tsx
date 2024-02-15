import { CardMedia } from '@getluko/streamline';
import React from 'react';

import { DocList } from '../components/DocList';

const CARDS: JSX.Element[] = [
  <CardMedia
    thumbnail={{
      uri: 'https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg',
    }}
    type="image"
    caption="This is a caption"
  />,
  <CardMedia
    thumbnail={{
      uri: 'https://images.prismic.io/luko/12533d65-918a-4653-8b1a-9b51191b187a_Picture_Maison.jpg?auto=compress,format&w=309&h=232',
    }}
    type="video"
    caption="This is a caption"
    duration="4:21"
  />,
];

export const CardMediaSandbox = () => <DocList docs={CARDS} margin="md" />;
